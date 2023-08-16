import Header from './Header'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LEO NEWS ',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='bg-gray-100 dark:bg-zink-900 transition-all duration-700'>
        <Header />
        <div className='max-w-6xl mx-auto'> {children} </div>
      </body>
    </html>
  )
}
