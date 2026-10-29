import React from 'react'

export const metadata = {
  title: 'SemaAfrica',
  description: 'Bridging communication across Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
