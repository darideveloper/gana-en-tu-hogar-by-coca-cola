import H2 from "@/components/h2"
import Link from "next/link"

export default function Footer ({}) {

  const links = [
    {
      "title": "Términos y condiciones",
      "url": "/terminos-y-condiciones"
    },
    {
      "title": "Avíso de privacidad",
      "url": "/aviso-de-privacidad"
    }
  ]

  return (
    <footer
      className={`
        footer
        bg-black
        pt-6
      `}
    >
      <div 
        className={`
          content
          container
          mx-auto
        `}
      >

        <section 
          className={`
            top
            flex
            flex-col md:flex-row
            items-center
            justify-center md:justify-between
            w-full
          `}
        >
          <img 
            src="/images/logo-inverted.webp"
            alt="Logo de Gana en tu hogar by Coca-Cola"
            className={`  
              w-11/12
              max-w-md
            `}
          />

          <div 
            className={`
              socials
              flex
              justify-center
              items-center
              flex-col
            `}
          >
            <H2
              className={`
                text-white
                text-center	
                mt-5
              `}
            >
              Contáctanos
            </H2>

            <a 
              href="#"
              className={`
                  social
                  p-2
                  w-20 
                  inline-block
                  mx-auto
              `}
            >
              <img 
                src="/images/whatsapp.svg"
                alt="Facebook"
                className={`
                  w-full
                `}
              />
            </a>
          </div>
        </section>

        <section
          className={`
            bottom
            text-white
            flex
            flex-col md:flex-row
            items-center
            justify-center
            mt-5
          `}
        >
          <p
            className={`
              p-2
              m-0 md:m-2
            `}
          >
            © Todos los derechos reservados 2024
          </p>

          {
            links.map((link, index) => {
              return (
                <Link 
                  key={index}
                  href={link.url}
                  className={`
                    link
                    p-2
                    m-0 md:m-2
                  `}
                >
                  {link.title}
                </Link>
              )
            })
          }
        </section>

      </div>


      <div 
        className={`
          decoraator
          h-3
          bg-red
        `}
      >

      </div>
    </footer> 
  )
}