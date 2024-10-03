import H2 from '@/components/h2'
import Separator from '@/components/separator'

export default function Cities({ }) {

  const currentPhase = "phase-1"
  const citiesData = {
    "phase-1": {
      "map": "cuidades-participantes-coca-cola-en-tu-hogar-1.svg",
      "cities": [
        "Ciudad de México",
        "Puebla",
        "Querétaro",
        "Toluca",
      ],
    },
    "phase-2": {
      "map": "cuidades-participantes-coca-cola-en-tu-hogar-2.svg",
      "cities": [
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
      ],
    }
  }
  const currentCitiesData = citiesData[currentPhase]
  const currentCities = currentCitiesData.cities
  const currentMap = currentCitiesData.map

  // Split cities in 4 arrays
  let citiesGroup = []
  if (currentCities.length > 4) {
    const cities2 = currentCities.slice(Math.ceil(currentCities.length / 2))
    const cities1 = currentCities.slice(0, Math.ceil(currentCities.length / 2))
    citiesGroup = [cities1, cities2]
  } else {
    citiesGroup = [currentCities]
  }

  return (
    <section
      className={`
        how-it-works
        container
        mx-auto
        mt-20
        bg-grey-light
        py-12 lg:py-6
        px-8
        relative
        overflow-hidden
      `}
    >
      <img
        src="/images/map-decorator.svg"
        alt="Imagen decorativa de lineas"
        className={`
          decorator
          hidden lg:block
          absolute
          bottom-0 lg:-top-20
          right-0
          z-0
          w-96
          opacity-5
        `}
      />

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
          justify-start
          w-11/12 md:w-full
          gap-6
          mx-auto
          lg:gap-12
        `}
      >

        <img
          src={`/images/${currentMap}`}
          alt="Ciudades con cobertura de Coca-Cola en tu hogar"
          className={`
            w-11/12 lg:w-6/12
            mr-0 lg:mr-16
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
            justify-start
            max-w-sm
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