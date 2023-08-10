import './globals.css'
import { Inter, Gloock } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const gloock = Gloock({ weight: '400', subsets: ['latin']})

export const metadata = {
  title: 'The Community Gallery',
  description: 'A marketplace for the community, by the community.',
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
