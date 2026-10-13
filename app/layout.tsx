import { Children } from 'react'
import Navbar from '../app/components/Navbar'
import Footer from './components/Footer'
import './globals.css'


export default function RootLayout({children,}: Readonly<{children:React.ReactNode}>){
  return(
    <html lang='pt'>
      <body className='flex flex-col min-h-screen'>
        <Navbar/>
        <main className='flex-1'>
           {children}
        </main>
        <Footer/>
       
      </body>
    </html>
  )
}