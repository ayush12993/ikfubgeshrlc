import type { Metadata } from "next";
import './globals.css'
import Script from 'next/script'

import MenuBar from './components/MenuBar';
export const metadata: Metadata = {
  title: {
    default: 'मौज कर्लो - (सुंदर एनीमे लड़किया)',
    template:'%s - मौज करलो - (सुंदर एनीमे लड़किया)'
  },
  description: 'सुंदर एनीमे लड़किया नाचते हुए आपके लिए बैठी हैं(Beautiful anime girls)',
  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">


        <body>
          <Script strategy='afterInteractive' 
          src='https://www.googletagmanager.com/gtag/js?id=G-RCHZ04P2Y6' />
          <Script id='google-analytics' strategy='afterInteractive'>
            {
              `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RCHZ04P2Y6');
              `
            }
          </Script>
          <MenuBar />
          {children}
        </body>

    </html>
  )
}
