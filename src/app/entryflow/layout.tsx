import './globals.css'

export const metadata = {
  title: {
    absolute: 'EntryFlow — Modern Event Access',
  },
  description: 'Professional Event Registration and QR Pass System.',
  icons: {
    icon: '/favicon-event.png', // We'll need to ensure this or a generic icon exists
  }
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
