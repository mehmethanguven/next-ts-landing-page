import { Button } from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

interface INavlink {
  url: string
  title: string
}

const navLinks: INavlink[] = [
  { title: 'Home', url: '/' },
  { title: 'Pricing', url: '/pricing' },
  { title: 'Product', url: '/product' },
  { title: 'About', url: '/about' },
  { title: 'Careers', url: '/careers' },
  { title: 'Community', url: '/community' },
]

const Header = () => {
  return (
    <nav className="container relative mx-auto max-w-7xl p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <Link href={'/'}>
            <Image
              src={'/images/logo.svg'}
              alt="logo"
              height={0}
              width={0}
              className="h-auto w-full"
            />
          </Link>
        </div>
        <div className="hidden space-x-6 md:flex">
          {(navLinks || []).map((item, id) => (
            <NavLink key={id} {...item} />
          ))}
        </div>
        <Button className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight">
          Get Started
        </Button>
        <Button
          id="menu-btn"
          variant="solid"
          className="hamburger m-0 block p-0 focus:outline-none md:hidden"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </Button>
      </div>
    </nav>
  )
}

export default Header
