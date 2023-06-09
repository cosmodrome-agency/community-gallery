import './globals.css'
import { Inter, Gloock } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
// const gloock = Gloock({ subsets: ['cyrillic-ext']})

export const metadata = {
  title: 'The Community Gallery',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
