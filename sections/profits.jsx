export default function Profits({}) {

  const profitsTitles = [
    'sin costo de afiliación',
    'incentivos exclusivos',
    'desde la comodidad de tu hogar',
    'gestiona tu tiempo'
  ]

  return (
    <section 
      className={`
        profits
      `}
      id="profits"
    >
      <h2
        className={`
          title-hidden
        `}
      >
        Beneficios
      </h2>

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
        <b>Gana En tu hogar</b> es la plataforma que te permite acceder a nuestro programa de Embajadores En tu hogar by Coca-Cola® y disfrutar de sus múltiples beneficios
      </p>

      <section 
        className={`
          cards-wrapper
          mx-auto
          bg-grey-light

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
          gap-6
        `}
      >
        {
          profitsTitles.map((title, index) => (
            <article
              key={index}
              className={`card`}
            >
              <div 
                className={`
                  img-wrapper
                  bg-brown
                  rounded-full
                  w-24 h-24
                  mx-auto
                  flex
                  items-center
                  justify-center
                `}
              >
                <img 
                  src={`/images/profits/${title}.svg`} 
                  alt={`Beneficio de Gana En tu hogar: ${title}`}
                  className={`
                    w-9/12
                  `}
                />
              </div>
              <h3
                className={`
                  text-center
                  text-lg
                  font-bold
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