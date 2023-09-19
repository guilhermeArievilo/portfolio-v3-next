'use client'
import { Button } from "@/components/button";
import Wave from '@/assets/svg/elements/wave.svg'
import ChevronDown from '@/assets/svg/icons/chevron-down.svg'
import Retangle from '@/assets/svg/elements/retangle.svg'
import DarkLogo from '@/assets/svg/elements/dark-logo.svg'

import { useLayoutEffect, useRef } from 'react';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from "@/components/project-card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  const skilsSection = useRef(null)
  const controlNavigationMainSwiper = useRef<any>(null)

  const contact = {
    github: 'https://github.com/guilhermeArievilo',
    linkedin: 'www.linkedin.com/in/engguilhermeoliveira',
    email: 'guilherme_arievilo@outlook.com'
  }

  const handlerNextSlider = () => {
    controlNavigationMainSwiper?.current?.swiper.slideNext()
  }

  const handlerPrevSlider = () => {
    controlNavigationMainSwiper?.current?.swiper.slidePrev()
  }

  const pagination = {
    clickable: true,
    el: '.custom-swiper-pagination'
  }

  useLayoutEffect(() => {
    const skilsSectionContext = gsap.context(() => {
      const wheel = document.querySelectorAll('.wheel')
      const items = gsap.utils.toArray('.wheel li')
      
      const numLines = items.length
      const radius = numLines * 15
      const angle = 360 / numLines
      const origin = `50% 50% -${radius}px`

      gsap.set(wheel, {
        transformOrigin: "50% 50%"
      })

      gsap.set(items, {
        z: radius,
        rotationX: (index) => angle * index,
        transformOrigin: origin
      })

      gsap.to(wheel, {
        rotationX: -360,
        ease: 'none',
        transformOrigin: '50% 50%',
        scrollTrigger: {
          trigger: '#skils',
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
          snap: .5
        }
      })
    })

    return () => {
      skilsSectionContext.revert()
    }
  }, [])

  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen relative overflow-clip">
        <Wave className="absolute -z-10 rotate-[15deg] opacity-30 w-[700%] md:w-[500%] lg:w-[200%] wave-animation"/>
        <h1 className="text-7xl lg:text-8xl text-center gradient-text">Oi, Sou o <strong>Guilherme</strong></h1>
        <div className="flex flex-col lg:flex-row justify-center items-center my-14">
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
        <Button.root href="#about">
          <Button.label label="Saiba mais !" className="text-xl"/>
          <Button.icon name="chevron-down" className="w-6 h-6 ms-4 slide-in-top"/>
        </Button.root>
        <span className="absolute w-[32px] h-[2px] bg-primary-400 bottom-8" />
      </main>

      <section id="about" className="relative py-12 mb-80 overflow-x-clip">
        <div className="container grid grid-cols-12 gap-6">
          <div className="col-start-2 col-span-10">
            <h1 className="text-7xl text-center mb-8 gradient-text">Sobre mim</h1>
            <p className="text-xl text-center text-grey-200">Sou um <strong>Engenheiro de Computação</strong> e desenvolvedor de aplicações web altamente qualificado, apaixonado por criar <strong>experiências excepcionais</strong>, e solucionar problemas de forma criativa. Minha expertise abrange tanto o <strong>front-end</strong> quanto o <strong>back-end</strong>.</p>
          </div>
        </div>

        <div className="container grid grid-cols-12 gap-6 mt-20 relative">
          <span className="spot absolute top-0 -z-20 w-[2000px] h-[2000px] opacity-5"/>
          <div className="info col-span-1 text-sm hidden lg:flex flex-col items-center">
            <span className="h-full w-[2px] bg-primary-600"/>
            <span className="vertial-text mt-6">Clique para mais detalhes</span>
          </div>

          <div className="col-span-12 mx-4 lg:col-span-11">
            <details>
              <summary className="w-full cursor-pointer flex justify-between items-center">
                <div className="flex flex-col">  
                  <span className="w-[32px] h-[2px] bg-primary-400 mb-6"/>
                  <h1 className="text-4xl text-primary-200 font-semibold mb-4">EDUCAÇÃO</h1>
                  <p className="text-grey-200"><strong>Engenharia da Computação</strong> ‧ 2016 - 2021</p>
                </div>
                <ChevronDown width="48px" className="icon-chevron"/>
              </summary>
              <ul className="ms-4 mt-8 text-grey-300">
                <li>Area1 - Faculdade de Ciência e Tecnologia</li>
                <li>Salvador, BA</li>
              </ul>
            </details>

            <details className="mt-24">
              <summary className="w-full cursor-pointer flex justify-between items-center">
                <div className="flex flex-col shrink">
                  <span className="w-[32px] h-[2px] bg-primary-400 mb-6"/>
                  <h1 className="text-4xl text-primary-200 font-semibold mb-4 uppercase">Experiência Profissional</h1>
                  <p className="text-grey-200"><strong>TAG TECH - Desenvolvimento e Tecnologia</strong> ‧  Remoto ‧ 2021 - atualmente</p>
                </div>
                <ChevronDown width="48px" className="icon-chevron shrink-0"/>
              </summary>
              <ul className="ms-4 mt-8 text-grey-300">
                <li>Manutenção de sites e testes</li>
                <li>Desenvolvimento de CMS e micro serviços para sites</li>
                <li>Desenvolvimento de frontend e integração com o backend</li>
                <li>Desenvolvimento de backend e micro-serviços</li>
              </ul>
            </details>
          </div>
        </div>

        <div className="container mt-32 flex flex-col items-center">
          <Button.root href={`mailto:${contact.email}`}>
            <Button.label label="Entre em contato !" className="text-xl" />
            <Button.icon name="send" className="w-6 h-6 ms-4 send"/>
          </Button.root>
        </div>

        <Retangle className="retangle absolute -bottom-96 left-1/2 -translate-x-1/2 -z-10"/>
      </section>

      <section ref={skilsSection} id="skils" className="pt-32 pb-12 relative flex flex-col items-center overflow-x-clip">
        <DarkLogo className="absolute -z-10 opacity-20 stroke-primary-300"/>
        <span className="spot absolute top-[500px] -right-[1500px] -z-20 w-[2000px] h-[2000px] opacity-5"/>
        <div className="container grid grid-cols-12 gap-6 mb-6 items-center mx-4">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="skils-title text-7xl text-center lg:text-left gradient-text mb-6">Habilidades</h1>
            <div className="flex items-center justify-between rounded-full mx-4 lg:mx-0 px-8 py-6 card-cta backdrop-blur-sm">
              <span className="me-8 shrink">Vamos fazer algo incrível juntos !</span>
              <div className="shrink-0">
                <Button.root size="sm" fill={true} href={`mailto:${contact.email}`}>
                  <Button.label label="Fale comigo" className="text-grey-700"/>
                </Button.root>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="wheel-container">
              <ul className="wheel">
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">VueJS</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">Motion</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">React</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">NuxtJS</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">NodeJs</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">NestJs</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">NextJs</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">Prisma</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">MongoDB</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">Postgresql</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">RestApi</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">GraphQl</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">Git</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">TypeScript</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl text-grey-100">OpenAI</li>
                <li className="text-6xl lg:text-7xl xl:text-8xl gradient-2-text">AWS</li>
              </ul>
            </div>
          </div>
          <div className="info lg:col-span-1 text-sm hidden lg:flex flex-col items-center">
            <span className="h-56 w-[2px] bg-primary-600"/>
            <span className="vertial-text mt-6">Faça uma rolagem</span>
          </div>
        </div>
      </section>

      <section id="recent-works" className="py-44">
        <div className="relative container flex flex-col items-center col-span-12">
          <div className="flex justify-between items-center mb-8 w-full">
            <button className="hidden md:block" onClick={() => handlerPrevSlider()}>
              <Button.icon name="btn-chevron-right" />
            </button>
            <h1 className="text-7xl text-center gradient-text">Trabalhos recentes</h1>
            <button className="hidden md:block" onClick={() => handlerNextSlider()}>
              <Button.icon name="btn-chevron-right" className="rotate-180"/>
            </button>
          </div>
          <span className="w-[32px] h-[2px] bg-primary-400 mt-5" />
        </div>
        <div className="py-20">
          <Swiper
            ref={controlNavigationMainSwiper}
            slidesPerView={1.1}
            centeredSlides={true}
            pagination={pagination}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1.4,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
                centeredSlides: false
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
                centeredSlides: false
              },
              1280: {
                slidesPerView: 4.2,
                spaceBetween: 32,
                centeredSlides: false
              },
            }}
            >
            <SwiperSlide className="px-4">
              <ProjectCard image="/projects/bn.png" projectName="Site Corporativo - BN House" projectType="Website"/>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProjectCard image="/projects/dammar.png" projectName="Site Corporativo - Dammar Engenharia" projectType="Website"/>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProjectCard image="/projects/fb.png" projectName="Site Corporativo - FB Consultoria e treinamentos" projectType="Website"/>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProjectCard image="/projects/cineapp.png" projectName="Cine app" projectType="Conceito de aplicativo mobile "/>
            </SwiperSlide>
            <SwiperSlide className="px-4">
              <ProjectCard image="/projects/poliana.png" projectName="Landing page - Dra. Poliana Rios" projectType="Website"/>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="">
          <div className="custom-swiper-pagination"/>
        </div>
      </section>
    </>
  )
}
