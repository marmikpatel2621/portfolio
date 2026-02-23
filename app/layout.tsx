import type { Metadata } from 'next'
import Script from 'next/script'
import '@/styles/globals.css'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'Marmik Patel | Senior Solutions Architect / Senior Data Engineer',
  description: 'Portfolio: data platform modernization, Snowflake architectures, distributed systems performance engineering.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
          <script defer
            strategy="afterInteractive"  src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "8e05ac02362d4dc9ae87ba596b06f288"}'></script>
      </head>
      <body>
        <div className="min-h-screen">
          <Header />
          <main className="container-app py-10 sm:py-14">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
