export default function SecondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 2</p>
      {children}
    </main>
  )
}
