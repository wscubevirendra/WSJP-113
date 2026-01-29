import '../globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >

        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
