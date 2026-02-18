import type { Metadata } from 'next'
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
