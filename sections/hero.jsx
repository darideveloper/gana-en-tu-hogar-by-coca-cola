import ContactForm from "@/components/contact-form"

export default function Hero({}) {
  return (

    <div 
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
          <h2
            className={`
              my-6
              text-center
            `}
          >
            Conviértete en <b>Embajador</b> de <b>En tu hogar by Coca-Cola®</b> y gana por recomendarnos
          </h2>

          <ContactForm />
        </div>

        <div 
          className={`
            img-wrapper
            w-full lg:w-1/2
          `}
        >
          <img 
            src="/images/hero.png"
            alt="Hero"
            className={`
              w-full
              h-auto
            `}
          />
        </div>

      </div>
      
    </div>

  )
}