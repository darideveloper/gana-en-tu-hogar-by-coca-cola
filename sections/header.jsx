import { useState } from "react"
import Link from 'next/link'

export default function Header({}) {

  const [isOpened, setIsOpened] = useState(false)

  const links = [
    {
      "text": 'Beneficios',
      "link": '#profits',
    },
    {
      "text": 'Cómo funciona',
      "link": '#how-it-works',
    },
    {
      "text": 'Quiero ser embajador',
      "link": '#contact-us',
    }
  ]

  return (
    <header
      className={`
        flex
        items-center
        justify-evenly md:justify-center
        pt-4
        h-20
      `}
    >
    
      <div 
        className={`
          top-bar
          h-2
          gradiant
          absolute
          w-full
          top-0
          left-0
        `}
      >

      </div>
      <img
        src="/images/logo.png"
        alt="Logo Gana en tu Hohar by Coca-Cola"
        width={250}
        height={100}
        className={`
        `}
      />

      <button
        className={`
          duration-300
          hover:opacity-50
        `}
        onClick={() => setIsOpened(!isOpened)}
      >
        <svg 
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`
            w-12
            h-12
            fill-red
            md:hidden
          `}
        >
            <path 
              d="m21 4c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-4 11.25c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.248c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75zm0-3.252c0 .414-.336.75-.75.75h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75z" 
              fillRule="nonzero"  
            />
        </svg>
      </button>

      <nav
        className={`
          fixed md:static
          top-0
          ${isOpened ? 'left-0' : '-left-full'}
          duration-700
          h-screen md:h-auto
          w-80 md:w-full
          md:max-w-4xl
          bg-black md:bg-white
          z-10
          shadow-lg
          shadow-black md:shadow-none
          lg:ml-32
          md:mt-2
          md:debug
        `}
      >
        <ul
          className={`
            w-full
            flex
            flex-col md:flex-row
            text-center
            items-center
            md:justify-evenly
            mt-20 md:mt-0
          `}
        >
          {
            links.map((link, index) => (
              <li 
                key={index}
                className={`
                `}
              >
                <Link 
                  href={link.link}
                  className={`
                    py-4 md:py-0 
                    md:px-4
                    my-4 md:my-0
                    text-white md:text-black
                    inline-block
                    text-xl
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
    </header>
  )
}