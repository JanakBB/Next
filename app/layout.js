export const metadata = {
  title: {
    template: " %s | CodeBookPro",
    default: "CodeBookPro",
  },
  description: "CodeBookPro is best website in Nepal. Especially for MERN Stack, Web Design Course, SEO, React Course, Video Editing, UI/UX, Next.js Full Course"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "green" }}>This is app header</header>
        {children}
        <footer style={{ background: "green" }}>This is app footer</footer>
      </body>
    </html>
  );
}
