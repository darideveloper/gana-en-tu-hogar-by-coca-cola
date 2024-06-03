import H2 from '@/components/h2'
import Separator from '@/components/separator'

export default function Cities({ }) {

  const cities = [
    "Acapulco",
    "Celaya",
    "Ciudad de México",
    "Ciudad Victoria",
    "Córdoba",
    "Cuernavaca",
    "Irapuato",
    "Leon",
    "Minatitlán",
    "Morelia",
    "Oaxaca",
    "Poza Rica",
    "Puebla",
    "Querétaro",
    "Salamanca",
    "San Juan del Río",
    "San Miguel de Allende",
    "Silao",
    "Tampico",
    "Toluca",
    "Tuxtla Gutierrez",
    "Veracruz",
    "Villahermosa",
    "Xalapa"
  ]

  // Split cities in 4 arrays
  const cities1 = cities.slice(0, Math.ceil(cities.length / 2))
  const cities2 = cities.slice(Math.ceil(cities.length / 2))
  const citiesGroup = [cities1, cities2]

  return (
    <section
      className={`
        how-it-works
        container
        mx-auto
        mt-20
      `}
    >
      <H2
        className={`
          w-11/12 sm:w-full
          mx-auto
        `}
      >
        Ciudades con cobertura
      </H2>

      <div
        className={`
          content
          flex
          flex-col lg:flex-row
          items-center
          justify-center
          w-11/12 md:w-full
          gap-6
          mx-auto
          lg:gap-12
        `}
      >

        <img
          src="/images/cuidades-participantes-coca-cola-en-tu-hogar.webp"
          alt="Ciudades con cobertura de Coca-Cola en tu hogar"
          className={`
            w-11/12 lg:w-6/12
          `}
        />

        <Separator />

        <div
          className={`
            cities
            w-11/12 lg:w-7/12
            flex
            flex-row
            items-center
            justify-center
          `}>

          {
            citiesGroup.map((cities, index_ul) => (
              <ul
                key={index_ul}
                className={`
                  text-center
                  w-full lg:w-1/2
                  mx-2             
                `}
              >
                {
                  cities.map((city, index_li) => (
                    <li
                      key={index_li}
                      className={`
                        lg:text-left
                        my-2 sm:my-1 md:my-0
                      `}
                    >
                      {city}
                    </li>
                  ))
                }
              </ul>
            ))
          }

          

        </div>

      </div>

    </section>
  )
}