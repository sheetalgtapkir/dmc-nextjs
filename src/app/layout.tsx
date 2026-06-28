import { Inter, Poppins, Lora } from 'next/font/google'
import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'



const siteName = 'Distance MBA College'
const description = 'Compare honest advice on Distance, Online, Executive MBA programmes from India\'s top private universities. Free counselling from senior advisors.'
const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://distancembacollege.com'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-voice',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteName} - Distance MBA Counselling`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: ['Distance MBA', 'Online MBA', 'Executive MBA', 'MBA India', 'counselling'],
  authors: [{ name: 'Distance MBA College' }],
  creator: 'MagicWorks IT Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url,
    siteName,
    title: `${siteName} - Distance MBA Counselling`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} - Distance MBA Counselling`,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B1F4D" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body  className={`${inter.variable} ${poppins.variable} ${lora.variable} min-h-screen bg-cream text-ink`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
