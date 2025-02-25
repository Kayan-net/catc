// src/app/layout.js
import './globals.css' //keep this
import ClientProvider from './../components/ClientProvider';

export const metadata = {
  title: 'CATC Travel Agency',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}