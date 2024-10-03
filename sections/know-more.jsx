import H2 from "@/components/h2"
import Cta from "@/components/cta"

export default function NewMore({ }) {

  const ctaLink = "https://www.coca-colaentuhogar.com/"

  return (
    <section
      className={`
        new-more
        mt-20
      `}
    >
      <div
        className={`
          container
          mx-auto
        `}
      >
        <H2
          className={`
            w-11/12 lg:w-full
            mx-auto
            lg:text-center
            mb-2
          `}
        >
          Conoce más de En tu hogar by Coca-Cola®
        </H2>

        <p
          className={`
            text-center
            w-11/12 lg:w-full
            mx-auto
            text-xs
          `}
        >
          Llevamos a la puerta de tu casa tus bebidas y productos favoritos, sin costo de envío.
        </p>

        <img
            src="/images/logo-2.svg"
            alt="Conoce más sobre En tu hogar by Coca-Cola®"
            className={`
              w-48
              my-8
              mx-auto md:mx-0
            `}
          />
      </div>

      <div
        className={`
          cta-wrapper
          flex
          items-center
          justify-center
          flex-col
          w-full
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
            src="/images/conoce-mas-sobre-en-tu-hogar-by-coca-cola.webp"
            alt="Conoce más sobre En tu hogar by Coca-Cola®"
            className={`
              w-full
            `}
          />
        </a>
      </div>

    </section>
  )
}