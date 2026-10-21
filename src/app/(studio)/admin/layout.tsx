export const metadata = {
  title: 'Next.js',
  description: 'Wygenerowano przez Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  )
}
