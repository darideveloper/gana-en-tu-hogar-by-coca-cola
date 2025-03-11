import H2 from "@/components/h2"
import Link from "next/link"

export default function Footer ({}) {

  const links = [
    {
      "title": "Términos y condiciones",
      "url": "/terminos-y-condiciones"
    },
    {
      "title": "Aviso de privacidad",
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
            data-aos="fade-down"
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
              href="https://api.whatsapp.com/send?phone=5215554143346"
              className={`
                  social
                  p-2
                  w-20 
                  inline-block
                  mx-auto
              `}
              data-aos="fade-down"
              data-aos-delay="400"
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
            text-sm
          `}
        >
          <p
            className={`
              p-2
              m-0 md:m-2
              text-center
            `}
          >
            © Todos los derechos reservados 2025
            <br />
            Powered by &nbsp;
            <Link
              href={`https://api.whatsapp.com/send?phone=5214493402622`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dari Developer
            </Link>
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
          gradiant
        `}
      >

      </div>
    </footer> 
  )
}