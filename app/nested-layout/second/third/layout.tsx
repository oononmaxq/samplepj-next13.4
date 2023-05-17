export default function SecondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <p>Layout 3</p>
      {children}
    </main>
  )
}
