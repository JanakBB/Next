export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{background: "green"}}>This is app header</header>
        {children}
        <footer style={{background: "green"}}>This is app footer</footer>
      </body>
    </html>
  );
}
