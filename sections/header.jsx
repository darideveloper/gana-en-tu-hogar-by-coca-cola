import { useState } from "react"
import Link from 'next/link'

export default function Header({}) {

  const [isOpened, setIsOpened] = useState(false)

  const links = [
    {
      "text": 'Beneficios',
      "link": '/#profits',
    },
    {
      "text": 'Cómo funciona',
      "link": '/#how-it-works',
    },
    {
      "text": 'Quiero ser embajador',
      "link": '/#contact-us',
    },
    {
      "text": 'Terminos y condiciones',
      "link": '/terminos-y-condiciones',
    },
    {
      "text": 'Avíso de privacidad',
      "link": '/aviso-de-privacidad',
    }
  ]

  return (
    <header
      className={`
        bg-black
      `}
    >
      <div 
        className={`
          content
          flex
          items-center
          justify-between lg:justify-evenly
          h-20
          container
          mx-auto
          py-12
        `}
      >
        <img
          src="/images/logo-inverted.webp"
          alt="Logo Gana en tu Hohar by Coca-Cola"
          width={250}
          height={100}
          className={`
          w-80 lg:w-60 xl:w-80
          `}
        />

        <button
          className={`
            duration-300
            hover:opacity-50
            p-4
            flex
            flex-col
            items-end
            justify-center
          `}
          onClick={() => setIsOpened(!isOpened)}
        >
          <div 
            className={`
              w-12
              h-2
              bg-blue
              my-1
            `}
          />

          <div 
            className={`
              w-8
              h-2
              bg-yellow
              my-1
            `}
          />

          <div 
            className={`
              w-6
              h-2
              bg-red
              my-1
            `}
          />

        </button>

        <nav
          className={`
            fixed lg:static
            top-0
            ${isOpened ? 'left-0' : '-left-full'}
            duration-700
            h-screen lg:h-auto
            w-80 lg:w-full
            lg:max-w-6xl
            bg-black
            z-10
            shadow-lg
            shadow-black lg:shadow-none
            lg:mt-2
          `}
        >
          <ul
            className={`
              w-full
              flex
              flex-col lg:flex-row
              text-center
              items-center
              lg:justify-end
              mt-20 lg:mt-0
            `}
          >
            {
              links.map((link, index) => (
                <li 
                  key={index}
                  className={`
                    inline-block
                  `}
                >
                  <Link 
                    href={link.link}
                    className={`
                      py-4 lg:py-0 lg:px-1 xl:px-5
                      my-4 lg:my-0
                      text-white
                      inline-block
                      text-md
                      font-bold
                    `}
                    onClick={() => setIsOpened(false)}
                  >
                    {link.text}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      <div 
        className={`
          bottom-bar
          h-2
          gradiant
          w-full
        `}
      />
    </header>
  )
}