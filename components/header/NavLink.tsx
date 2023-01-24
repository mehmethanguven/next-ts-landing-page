import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

type Props = {
  url: string
  title: string
}

const NavLink = ({ title, url }: Props) => {
  const router = useRouter()
  return (
    <Link href={url}>
      <div
        className={clsx('hover:text-darkGrayishBlue', {
          'font-bold': router.asPath && router.asPath == url,
        })}
      >
        {title}
      </div>
    </Link>
  )
}

export default NavLink
