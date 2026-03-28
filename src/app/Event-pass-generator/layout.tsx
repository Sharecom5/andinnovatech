import './globals.css'

export const metadata = {
  title: 'Event Pass System',
  description: 'Event Management and Registration',
}

import { Providers } from '@/components/event-pass/Providers'

export default function EventPassLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
