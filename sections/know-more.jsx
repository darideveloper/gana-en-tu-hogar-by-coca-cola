import H2 from "@/components/h2"
import Cta from "@/components/cta"

export default function NewMore({}) {
  
  const ctaLink = "https://www.coca-colaentuhogar.com/"
 
  return (
    <section
      className={`
        new-more
        container
        mx-auto
        mt-20
      `}
    >
      <H2>
        Conoce más de En tu hogar by Coca-Cola®
      </H2>
      
      <p
        className={`
          text-center lg:text-left
        `}
      >
        Llevamos a la puerta de tu casa tus bebidas y productos favoritos, sin costo de envío.
      </p>

      <div 
        className={`
          cta-wrapper
          flex
          items-center
          justify-center
          flex-col
          w-full
          max-w-6xl
          mx-auto
        `}
      >
        <a 
          href={ctaLink}
          target="_blank"
          className={`
            my-4
            block
            w-full
            duration-300
            hover:scale-105
          `}
        >
          <img 
            src="/images/conoce-mas-sobre-en-tu-hogar-by-coca-cola.png"
            alt="Conoce más sobre En tu hogar by Coca-Cola®"
            className={`
              w-full
            `}
          />
        </a>

        <Cta
          onClick={e => {
            // Open link in new tab
            window.open(ctaLink, "_blank")
          }}
        >
          Descúbrela aquí
        </Cta>
      </div>

    </section>
  )
}