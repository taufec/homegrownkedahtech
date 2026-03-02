import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Homegrown Kedah Tech Directory',
  description: 'While they look south, we build up north.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
