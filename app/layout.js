import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Cursor from './components/Cursor'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Anubhav.Dev',
  description: 'Made by Anubhav',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor/>
<NavBar/>
        {children}
        <Footer/>
        </body>
     
    </html>
  )
}
