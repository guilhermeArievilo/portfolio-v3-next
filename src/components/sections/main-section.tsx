import Wave from '@/assets/svg/elements/wave.svg'
import { Button } from '../button'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MainSection () {
  const main = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context((self: any) => {
      const title = self.selector('h1')
      const subtitle = self.selector('h2')
      const items = self.selector('ul li')
      const cta = self.selector('#cta')
      const wave = self.selector('.wave-animation')

      const tl = gsap.timeline()

      tl
        .from(title, {
          delay: 1.5,
          opacity: 0,
          yPercent: 30,
          duration: 1,
          ease: "power3.easeIn"
        })
        .from(subtitle, {
          opacity: 0,
          xPercent: -30,
          duration: .4,
          ease: "power3.easeInOut"
        })
        .from(items, {
          opacity: 0,
          scale: .6,
          xPercent: -10,
          duration: .3,
          ease: "power3.easeOut",
          stagger: .1
        })
        .from(cta, {
          opacity: 0,
          yPercent: 50,
          duration: .4,
          ease: "power3.easeOut"
        })
        .from(wave, {
          opacity: 0,
          scale: .1,
          ease: "power3.easeInOut"
        })


      return () => ctx.revert()
    }, main)
  },[])
  return (
    <main ref={main} className="flex flex-col items-center justify-center h-screen relative overflow-clip pb-24">
      <Wave className="absolute -z-10 rotate-[15deg] opacity-30 w-[700%] md:w-[500%] lg:w-[200%] wave-animation"/>
      <h1 className="text-6xl lg:text-8xl text-center gradient-text">Oi, Sou o <strong>Guilherme</strong></h1>
      <div className="flex flex-col lg:flex-row justify-center items-center my-5 lg:my-14">
        <h2 className="text-2xl text-primary-100 font-semibold flex-grow-0 shrink">Engenheiro da Computação</h2>
        <ul className="flex justify-center items-center ms-8 flex-grow shrink-0">
          <li className="separator px-3">
            <span className="font-light text-sm">Desenvolvedor Full-Stack</span>
          </li>
          <li className="px-3">
            <span className="font-light text-sm">UI Developer</span>
          </li>
        </ul>
      </div>
      <div id="cta">
        <Button.root href="#about">
          <Button.label label="Saiba mais !" className="text-base lg:text-xl"/>
          <Button.icon name="chevron-down" className="w-6 h-6 ms-4 slide-in-top text-sm lg:text-base"/>
        </Button.root>
      </div>
      <span className="absolute w-[32px] h-[2px] bg-primary-400 bottom-8" />
    </main>
  )
}