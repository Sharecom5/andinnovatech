'use client'

import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/layout/Navbar'), { ssr: true })
const Footer = dynamic(() => import('@/components/layout/Footer'), { ssr: true })
const BackToTop = dynamic(() => import('@/components/ui/BackToTop'), { ssr: false })
const AIChatbot = dynamic(() => import('@/components/AIChatbot'), { ssr: false })
const CookieConsent = dynamic(() => import('@/components/ui/CookieConsent'), { ssr: false })
const LeadMagnet = dynamic(() => import('@/components/LeadMagnet'), { ssr: false })

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Skip the main AnD Innovatech navbar/footer for: entryflow, pass, and admin pages
  const isStandaloneRoute = 
    pathname?.startsWith('/entryflow') ||
    pathname?.startsWith('/pass') ||
    pathname?.startsWith('/admin')

  if (isStandaloneRoute) {
    return (
      <>
        <main>{children}</main>
        <CookieConsent />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
      <AIChatbot />
      <LeadMagnet />
      <CookieConsent />
    </>
  )
}
