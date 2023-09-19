'use client'
import Image from "next/image";
import Link from "next/link";
import Instagram from "@/assets/svg/icons/instagram.svg"
import Linkedin from "@/assets/svg/icons/linkedin.svg"
import Git from "@/assets/svg/icons/github.svg"
import { Button } from "./button";
import MenuIcon from "@/assets/svg/icons/menu.svg"
import Retangle from '@/assets/svg/elements/retangle.svg'

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from 'next/navigation';

export default function Header () {
  const contact = {
    instagram: 'https://www.instagram.com/guiarievilo/',
    github: 'https://github.com/guilhermeArievilo',
    linkedin: 'https://linkedin.com/in/engguilhermeoliveira',
    email: 'guilherme_arievilo@outlook.com'
  }
  const [activeMenu, setActiveMenu] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  useEffect(() => {
    setActiveMenu(false)
  }, [pathname, searchParams])

  return (
    <div className={`${activeMenu ? 'fixed bg-[#070708] md:bg-opacity-0 h-screen z-30' : ''} w-full`}>
      <header className="container flex justify-between items-center py-8">
        <Link href='#'>
          <Image src={'/logo.svg'} alt="Eng Guilherme Arievilo" width={95} height={40}/>
        </Link>
        <nav className="md:block hidden">
          <ul className="flex justify-center">
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#about">Sobre mim</Link>
            </li>
            <li className="separator"/>
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#recent-works">Trabalhos recentes</Link>
            </li>
            <li className="separator"/>
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#skils">Habilidades</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button.root href={`mailto:${contact.email}`} size="sm">
            <Button.label label='Fale comigo' className="text-sm"/>
          </Button.root>
        </div>
        <button className="block md:hidden" onClick={() => toggleMenu()}>
          <MenuIcon className="h-6 w-6"/>
        </button>
      </header>

      <div className={`${activeMenu ? 'relative flex flex-col justify-around items-center h-full' : 'hidden'} flex md:hidden w-full pb-24`}>
        <Retangle className="retangle absolute -z-10 bottom-28"/>
        <nav className="basis-60">
          <ul className="flex flex-col items-center justify-between h-full">
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#about" className="text-4xl">Sobre mim</Link>
            </li>
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#recent-works" className="text-4xl">Trabalhos recentes</Link>
            </li>
            <li className="mx-8 hover:-translate-y-1 transition-all ease-in-out">
              <Link href="#skils" className="text-4xl">Habilidades</Link>
            </li>
          </ul>
        </nav>

        <div className="">
          <Button.root href={`mailto:${contact.email}`}>
            <Button.label label='Fale comigo' className=""/>
          </Button.root>
        </div>

        <ul className="flex justify-around items-center w-full">
          <li className="">
            <a href={contact.instagram} target="_blank">
              <Instagram />
            </a>
          </li>
          <li className="">
            <a href={contact.linkedin} target="_blank">
              <Linkedin />
            </a>
          </li>
          <li className="">
            <a href={contact.github} target="_blank">
              <Git />
            </a>
          </li>
        </ul>

        <button onClick={() => toggleMenu()}>
          <Button.icon name="close" />
        </button>
        
      </div>
    </div>
  )
}