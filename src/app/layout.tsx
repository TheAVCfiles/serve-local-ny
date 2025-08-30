import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NY National Guard - Serve Your Community',
  description: 'Discover meaningful career opportunities with the New York National Guard. Serve your community while building valuable skills and advancing your career.',
  keywords: ['NY National Guard', 'military careers', 'New York', 'national guard recruitment', 'serve local'],
  authors: [{ name: 'NY National Guard Recruitment' }],
  openGraph: {
    title: 'NY National Guard - Serve Your Community',
    description: 'Discover meaningful career opportunities with the New York National Guard.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NY National Guard - Serve Your Community',
    description: 'Discover meaningful career opportunities with the New York National Guard.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  )
}