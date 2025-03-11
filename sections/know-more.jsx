import H2 from "@/components/h2"
import Cta from "@/components/cta"

export default function NewMore({ }) {

  const ctaLink = "https://www.coca-colaentuhogar.com/"

  return (
    <section
      className={`
        new-more
        mt-20
        container
        mx-auto
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
          overflow-hidden
        `}
      >
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            my-4
            block
            w-full
          `}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img
            src="/images/conoce-mas-sobre-en-tu-hogar-by-coca-cola-desktop.webp"
            alt="Conoce más sobre En tu hogar by Coca-Cola®"
            className={`
              w-full
              hidden md:block
              hover:scale-105
              duration-300
            `}
          />
          <img
            src="/images/conoce-mas-sobre-en-tu-hogar-by-coca-cola-mobile.webp"
            alt="Conoce más sobre En tu hogar by Coca-Cola®"
            className={`
              w-full
              md:hidden
            `}
          />
        </a>
      </div>

    </section>
  )
}