import Link from "next/link";
import { Button } from "./button";
import Wave from '@/assets/svg/elements/wave-2.svg'

export default function Footer () {
  const contact = {
    instagram: 'https://www.instagram.com/guiarievilo/',
    github: 'https://github.com/guilhermeArievilo',
    linkedin: 'https://linkedin.com/in/engguilhermeoliveira',
    email: 'guilherme_arievilo@outlook.com'
  }
  return (
    <footer className="relative overflow-clip flex flex-col items-center">
      <div className="container grid grid-cols-12 gap-6 py-16 border-b border-grey-600">
        <div className="col-span-12 md:col-span-6 lg:col-span-7 flex flex-col items-center md:items-start">
          <h1 className="mb-2 text-5xl text-center md:text-left">Vamos conversar</h1>
          <h2 className="mb-8 text-xl text-grey-200 text-center md:text-left">Ficaria feliz em fazer parte do seu projeto !</h2>
          <Button.root href={`mailto:${contact.email}`}>
            <Button.label label="Entre em contato"/>
            <Button.icon name="send" className="ms-4"/>
          </Button.root>
        </div>
        <div className="col-span-12 md:col-span-3 lg:col-span-4">
          <h1 className="text-2xl">Contato</h1>
          <ul className="flex flex-row justify-between md:flex-col md:justify-normal">
            <li className="my-2">
              <a href={contact.instagram} target="_blank" className="text-grey-300 hover:text-grey-100 transition-all ease-in-out text-base">Instagram</a>
            </li>
            <li className="my-2">
              <a href={contact.linkedin} target="_blank" className="text-grey-300 hover:text-grey-100 transition-all ease-in-out text-base">Linkedin</a>
            </li>
            <li className="my-2">
              <a href={contact.github} target="_blank" className="text-grey-300 hover:text-grey-100 transition-all ease-in-out text-base">GitHub</a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 lg:col-span-1 hidden md:block">
          <Link href="#" className="border border-grey-100 flex items-center justify-center rounded-full h-16 w-16">
            <Button.icon name="chevrons-up"/>
          </Link>
        </div>
      </div>
      <div className="container mt-16 pb-4 flex justify-center md:justify-normal">
        <span className="text-grey-400">2023 - todos os direitos reservados - desenvolvido por<strong className="text-primary-200"> Guilherme Arievilo</strong></span>
      </div>
      <Wave className="absolute top-0 h-[1000px] -z-20"/>
    </footer>
  )
}