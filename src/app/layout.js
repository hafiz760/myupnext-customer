import './globals.css';
import { Hanken_Grotesk } from 'next/font/google';

const hanken = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata = {
  title: 'Tripiphy',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hanken.className}>
        {children}
      </body>
    </html>
  )
}
