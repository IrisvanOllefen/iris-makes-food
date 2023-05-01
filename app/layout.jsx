import { Literata } from 'next/font/google'
import { Urbanist } from 'next/font/google'
import './globals.css'
import AppHeader from './_components/app-header'
import AppFooter from './_components/app-footer'

const urbanist = Urbanist({
  display: 'swap',
  preload: false,
})

const literata = Literata({
  display: 'swap',
  preload: false,
})

export default function RootLayout({ children }) {
  return (
    <>
      <html lang='en'>
        <body className={`${urbanist.className} ${literata.className}`}>
          <AppHeader className={literata.className}/>
          {children}
          <AppFooter literataFont={literata.className} urbanistFont={urbanist.className}/>
        </body>
      </html>
    </>
  )
}
