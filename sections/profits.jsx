import H2 from '@/components/h2'

export default function Profits({}) {

  const profitsTitles = [
    (<p><strong>sin costo</strong> de afiliación</p>),
    (<p><strong>incentivos</strong> exclusivos</p>),
    (<p>desde la <strong>comodidad de tu hogar</strong></p>),
    (<p>gestiona <strong>tu tiempo</strong></p>),
  ]

  return (
    <section 
      className={`
        profits
      `}
      id="profits"
    >
      <H2
        hidden={true}
      >
        Beneficios
      </H2>

      <p
        className={`
          upper-text
          text-center
          text-lg
          my-6
          w-11/12
          max-w-7xl
          mx-auto
        `}
      >
        <strong>Gana En tu hogar</strong> es la plataforma que te permite acceder a nuestro programa de Embajadores En tu hogar by Coca-Cola® y disfrutar de sus múltiples beneficios
      </p>

      <section 
        className={`
          cards-wrapper
          mx-auto
          bg-black
          text-white

        `}
      >

      <div
        className={`
          cards
          grid
          grid-cols-1 sm:grid-cols-2 md:grid-cols-4
          py-12 md:py-8
          container
          mx-auto
          gap-0
        `}
      >
        {
          profitsTitles.map((title, index) => (
            <article
              key={index}
              className={`
                card
              `}
            >
              <div 
                className={`
                  img-wrapper
                  rounded-full
                  w-24 h-24
                  mx-auto
                  flex
                  items-center
                  justify-center
                `}
              >
                <img 
                  src={`/images/profits/${index + 1}.svg`} 
                  alt={`Beneficio de Gana En tu hogar: ${title}`}
                  className={`
                    w-9/12
                  `}
                />
              </div>
              <h3
                className={`
                  text-center
                  text-md
                  my-4
                  capitalize
                `}
              >
                {title}
              </h3>
            </article>
          ))
        }
      </div>
      


      </section>
    </section>
  )
}