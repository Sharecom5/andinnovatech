# EntryFlow by AndInnovatech: Full SaaS Implementation (Next.js + Prisma + MySQL)

This guide contains the full working codebase and setup instructions to migrate or build your EntryFlow SaaS using your requested modern tech stack: **Next.js App Router, Tailwind CSS, MySQL, and Prisma.**

## 1. Setup Instructions

First, install the necessary dependencies in your Next.js project:

```bash
# Install Prisma and database clients
npm install prisma --save-dev
npm install @prisma/client

# Install Auth & Utility libraries
npm install next-auth bcryptjs lucide-react qrcode
npm install -D @types/bcryptjs @types/qrcode

# Initialize Prisma
npx prisma init
```

## 2. Environment Variables (`.env.local`)

You will need a PlanetScale or any MySQL database URL.

```text
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/entryflow"
NEXTAUTH_SECRET="generate_a_strong_random_secret_here"
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 3. Database Schema (`prisma/schema.prisma`)

Replace the contents of `prisma/schema.prisma` with the following:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  // If using PlanetScale, uncomment the line below:
  // relationMode = "prisma"
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  events    Event[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Event {
  id        String     @id @default(cuid())
  name      String
  date      DateTime
  location  String
  userId    String
  user      User       @relation(fields: [userId], references: [id])
  attendees Attendee[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt

  // @@index([userId]) // Uncomment if using PlanetScale relationMode
}

model Attendee {
  id        String   @id @default(cuid())
  passId    String   @unique
  name      String
  phone     String
  email     String?
  qrUrl     String?  @db.Text
  status    String   @default("registered") // "registered" | "entered"
  eventId   String
  event     Event    @relation(fields: [eventId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([eventId, phone]) // Prevent duplicate phone numbers per event
  // @@index([eventId]) // Uncomment if using PlanetScale relationMode
}
```

**Run Migrations:**
```bash
# If using a standard MySQL DB
npx prisma migrate dev --name init

# If using PlanetScale
npx prisma db push
```

## 4. Prisma Client (`src/lib/prisma.ts`)

```typescript
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

## 5. NextAuth Authentication (`src/app/api/auth/[...nextauth]/route.ts`)

```typescript
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const user = await prisma.user.findUnique({ where: { email: credentials.email } })
        if (!user) return null

        const isMatch = await bcrypt.compare(credentials.password, user.password)
        if (!isMatch) return null

        return { id: user.id, name: user.name, email: user.email }
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session?.user) {
        (session.user as any).id = token.id
      }
      return session
    }
  },
  pages: {
    signIn: '/entryflow/login',
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
```

## 6. API Route: User Signup (`src/app/api/auth/signup/route.ts`)

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json()
    const exists = await prisma.user.findUnique({ where: { email } })
    if (exists) return NextResponse.json({ error: "Email already in use" }, { status: 400 })

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword }
    })

    return NextResponse.json({ success: true, user: { id: user.id, email: user.email } })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 })
  }
}
```

## 7. API Route: Attendee Registration (`src/app/api/attendee/register/route.ts`)

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import QRCode from 'qrcode'

export async function POST(req: Request) {
  try {
    const { name, phone, email, eventId } = await req.json()

    // 1. Check if user already exists in this event by phone
    let attendee = await prisma.attendee.findUnique({
      where: { eventId_phone: { eventId, phone } }
    })

    // 2. Generate a fresh QR Base64 DataUrl regardless
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const passId = attendee ? attendee.passId : `EVT${Math.floor(100000 + Math.random() * 900000)}`
    const verificationUrl = `${appUrl}/entryflow/verify?id=${passId}`
    const qrUrl = await QRCode.toDataURL(verificationUrl, { width: 300, margin: 2 })

    if (attendee) {
      // Existing Attendee -> Send back their pass
      return NextResponse.json({
         success: true, 
         isExisting: true,
         pass: { ...attendee, qrUrl } 
      })
    }

    // 3. New Attendee -> Create record
    attendee = await prisma.attendee.create({
      data: {
        passId,
        name,
        phone,
        email,
        eventId,
        qrUrl
      }
    })

    return NextResponse.json({ success: true, pass: attendee })
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Registration failed" }, { status: 500 })
  }
}
```

## 8. API Route: Verify/Scanner Logic (`src/app/api/verify/route.ts`)

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')

  if (!id) return NextResponse.json({ error: "Invalid Pass ID" }, { status: 400 })

  const attendee = await prisma.attendee.findUnique({
    where: { passId: id },
    include: { event: true } // grab event details to show on screen
  })

  if (!attendee) return NextResponse.json({ valid: false, message: "Invalid Pass" }, { status: 404 })

  if (attendee.status === "entered") {
    return NextResponse.json({ 
      valid: false, 
      message: "Already Entered", 
      attendee 
    }, { status: 409 })
  }

  // Mark as entered (Check In)
  const updated = await prisma.attendee.update({
    where: { passId: id },
    data: { status: "entered" }
  })

  return NextResponse.json({ 
    valid: true, 
    message: "Entry Allowed", 
    attendee: updated 
  })
}
```

## 9. API Route: Fetch Dashboard Stats (`src/app/api/dashboard/stats/route.ts`)

```typescript
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function GET(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const userId = (session.user as any).id

  const events = await prisma.event.findMany({
    where: { userId },
    include: {
      _count: {
        select: { attendees: true }
      }
    }
  })

  const totalEvents = events.length
  const totalRegistrations = events.reduce((sum, e) => sum + e._count.attendees, 0)
  
  // Count attendees explicitly where status = 'entered'
  const totalCheckins = await prisma.attendee.count({
    where: {
      event: { userId },
      status: "entered"
    }
  })

  return NextResponse.json({ totalEvents, totalRegistrations, totalCheckins, events })
}
```

## 10. Dashboard UI Example (`src/app/entryflow/dashboard/page.tsx`)

```tsx
'use client'
import { useEffect, useState } from 'react'
import { Users, CheckCircle, CalendarDays } from 'lucide-react'

export default function Dashboard() {
  const [stats, setStats] = useState<any>(null)

  useEffect(() => {
    fetch('/api/dashboard/stats')
      .then(r => r.json())
      .then(data => setStats(data))
  }, [])

  if (!stats) return <div className="p-10">Loading Dashboard...</div>

  return (
    <div className="p-8 max-w-6xl mx-auto bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-slate-800 mb-8">Organizer Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-4 rounded-xl text-blue-600"><CalendarDays/></div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Total Events</p>
              <h2 className="text-3xl font-bold">{stats.totalEvents}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="bg-indigo-100 p-4 rounded-xl text-indigo-600"><Users/></div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Total Registrations</p>
              <h2 className="text-3xl font-bold">{stats.totalRegistrations}</h2>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-100 p-4 rounded-xl text-emerald-600"><CheckCircle/></div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Check-Ins</p>
              <h2 className="text-3xl font-bold">{stats.totalCheckins}</h2>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event List Table here */}
    </div>
  )
}
```

## 11. Optional WhatsApp Integration Logic (`src/lib/whatsapp.ts`)

```typescript
// You can call this function safely from the POST /api/attendee/register route
export async function sendWhatsAppPass(phone: string, name: string, passId: string) {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  const passUrl = `${appUrl}/entryflow/pass/${passId}`
  
  const message = `Hi ${name}! 🎉 Your EntryFlow Pass is confirmed.\n\nPass ID: ${passId}\nView your QR Code here: ${passUrl}\n\nPlease show this code at the entry. See you there!`

  // Using a placeholder API like CallMeBot or UltraMsg 
  try {
    await fetch(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(message)}&apikey=${process.env.CALLMEBOT_API_KEY}`)
    console.log(`WhatsApp sent to ${phone}`)
  } catch(e) {
    console.error(`Failed to send WA`, e)
  }
}
```

## 12. Deployment Steps

1. **Database:** Create a MySQL database (e.g. PlanetScale or Railway).
2. **Environment URL:** Set the `DATABASE_URL` in your Vercel Project settings. 
3. **Migrate DB during build:** Update `package.json` build script:
```json
  "scripts": {
    "build": "prisma generate && prisma migrate deploy && next build",
    ...
  }
```
*(If using PlanetScale, change `migrate deploy` to `prisma db push`)*
4. **Deploy:** Push your application to GitHub and Vercel will automatically build the Next.js app and prepare your Prisma schema.
