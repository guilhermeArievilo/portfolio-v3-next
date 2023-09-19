import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonRootProps {
  children: ReactNode,
  href?: string,
  size?: string,
  fill?: boolean
}

export default function ButtonRoot ({ children, href, size, fill }: ButtonRootProps) {
  const className = `flex justify-center items-center ${size == 'sm' ? 'px-6 py-2' : 'px-8 py-6'} ${fill ? 'bg-grey-100' : ''} rounded-full border-grey-100 border hover:scale-105 transition-all ease-in-out`
   if (!href) return (
    <button className={className}>
      {children}
    </button>
   )

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  )
}
