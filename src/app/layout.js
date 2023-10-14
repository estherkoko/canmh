import './globals.css'
import { Inter } from 'next/font/google'
import './global.scss'
import { Button } from 'reactstrap';
import { InstagramLogo, Envelope, Phone } from "@phosphor-icons/react/dist/ssr";
import NavContainer from '../../components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CANMH - Coalition for the Advancement of Nigerian Mental Health ',
  description: 'Coalition for the Advancement of Nigerian Mental Health',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="position-fixed w-100">
        <NavContainer />
        </header>
        {children}
        <footer className='py-5 container-fluid bg-green text-center'>
          <div className="container">
            <p>
              <a>Contact us: </a>
              <a href="https://www.instagram.com/weare_canmh/?hl=en"><InstagramLogo size={32} className='me-2' weight="duotone" /></a>
              <a href="mailto:canmh.20@gmail.com"><Envelope size={32} weight="duotone" /></a>
            </p>
            <p>Copyright © 2023</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
