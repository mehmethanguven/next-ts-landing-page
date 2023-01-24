import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface ISocialIcon {
  url: string
  imageUrl: string
}
export interface IFooterPageLink {
  url: string
  imageUrl?: string
  title: string
}

const footerPageLinks: IFooterPageLink[] = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/pricing',
    title: 'Pricing',
  },
  {
    url: '/products',
    title: 'Products',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/careers',
    title: 'Careers',
  },
  {
    url: '/community',
    title: 'Community',
  },
  {
    url: '/privacy-policy',
    title: 'Privacy Policy',
  },
]

const socialIcons: ISocialIcon[] = [
  { url: '', imageUrl: '/images/icon-facebook.svg' },
  { url: '', imageUrl: '/images/icon-youtube.svg' },
  { url: '', imageUrl: '/images/icon-twitter.svg' },
  { url: '', imageUrl: '/images/icon-pinterest.svg' },
  { url: '', imageUrl: '/images/icon-instagram.svg' },
]

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            &copy; Copyright {new Date().getFullYear()}, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <Image
              src="/images/logo-white.svg"
              className="h-8 w-full"
              alt=""
              width={0}
              height={0}
            />
          </div>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            {(socialIcons || []).map(({ imageUrl, url }, id) => (
              <Link key={id} href={url}>
                <Image
                  src={imageUrl}
                  className="h-8 w-8"
                  alt=""
                  height={0}
                  width={0}
                />
              </Link>
            ))}
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex h-44 flex-col flex-wrap gap-x-12 gap-y-4 text-white">
            {(footerPageLinks || []).map(({ url, title }, id) => (
              <Link href={url} key={id}>
                <div className="hover:text-brightRed">{title}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 rounded-full px-4 focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            <h3>
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
