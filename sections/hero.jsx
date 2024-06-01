import ContactForm from "@/components/contact-form"
import H2 from "@/components/h2"

export default function Hero({}) {
  return (

    <section 
      className={`
        hero
        w-full
        relative
      `}
    >

      <div 
        className={`
          container
          flex
          flex-col lg:flex-row
          items-center
          justify-between
          mx-auto
          py-12 lg:py-24
          gap-6
        `}
      >

        <div 
          className={`
            texts
            w-full lg:w-1/2
          `}
        >
          <h1
            className={`
              font-black
              text-2xl md:text-4xl
              text-center
            `}
          >
            Aumenta tus ganancias desde casa sin sacrificar tiempo con tu familia
          </h1>
          <H2
            className={`
              my-6
              lg:text-center
              text-xl
            `}
          >
            Conviértete en <strong>Embajador</strong> de <strong>En tu hogar by Coca-Cola®</strong> y gana por recomendarnos
          </H2>

          <ContactForm />
        </div>

        <div 
          className={`
            img-wrapper
            w-full lg:w-1/2
          `}
        >
          <img 
            src="/images/aumenta-tus-ganancias-en-casa-con-coca-cola.png"
            alt="Aumenta tus ganancias en casa con Coca-Cola"
            className={`
              w-full
              h-auto
            `}
          />
        </div>

      </div>
      
    </section>

  )
}