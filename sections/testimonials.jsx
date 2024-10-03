import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import H2 from '@/components/h2'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default () => {

  const [perPage, setPerPage] = useState(1)

  // Calculate slides per view based on window width
  useEffect(() => {

    function updatePerPage() {
      const width = window.innerWidth
      if (width < 640) {
        setPerPage(1)
      }
      else if (width < 1024) {
        setPerPage(2)
      }
      else setPerPage(3)
    }
    updatePerPage()

    // Actualizar el estado cuando el tamaño de la ventana cambie
    window.addEventListener('resize', () => {
      updatePerPage()
    })

  }, [])

  const testimonialsData = [
    {
      "client": "lilyana",
      "stars": 5,
      "comment": "Este programa me ha permitido generar un dinerito extra sin salir de casa y poder disfrutar con mis hijos.",
      "location": "CDMX, México"
    },
    {
      "client": "ricardo",
      "stars": 5,
      "comment": "Me encanta que ellos se encarguen de la entrega y el cobro. Yo solo me preocupo de atraer nuevas personas y asegurarme de que sigan comprando.",
      "location": "CDMX, México"
    },
    {
      "client": "elena",
      "stars": 5,
      "comment": "¡Totalmente recomendado!, y lo mejor es que todos consumen los productos de Coca Cola.",
      "location": "CDMX, México"
    },
    {
      "client": "miguel",
      "stars": 5,
      "comment": "Es una gran ventaja recibir acompañamiento personalizado y no tener que pagar para afiliarte.",
      "location": "CDMX, México"
    },

  ]

  return (

    <section
      className={`
        testimonials
        container
        mx-auto
        my-20
      `}
    >
      <H2
        hidden={true}
      >
        Testimonios de nuestros embajadores
      </H2>


      <div
        className={`
          grid
          grid-cols-1 sm:grid-cols-2 xl:grid-cols-4
          gap-8
        `}
      >


        {
          testimonialsData.map((testimonial, index) => (
            <article
              className={`
                flex
                flex-col
                mb-8
                w-11/12
                mx-auto
              `}
              key={index}
            >

              <div
                className={`
                  profile
                  flex
                  items-center
                  justify-center
                  my-6
                `}
              >
                <img
                  src={`/images/testimonials/${testimonial.client}.svg`}
                  alt={`foto de embajador ${testimonial.client}`}
                  className={`
                    profile-pic
                    w-28 
                    h-28
                    rounded-full
                  `}
                />
                <div
                  className={`
                    texts
                    px-6
                  `}
                >
                  <h3
                    className={`
                      font-bold
                      text-xl
                      capitalize
                    `}
                  >
                    {testimonial.client}
                  </h3>

                  <p
                    className={`
                      mb-4
                    `}
                  >
                    <img
                      src="/images/icon-location.svg"
                      className={`
                        w-3
                        inline-block
                        mx-1
                        mb-1
                      `}
                    />
                    {testimonial.location}
                  </p>

                  <p
                    className={`
                      stars
                      flex
                    `}
                  >

                    {
                      Array.from({ length: testimonial.stars }).map((_, index) => (
                        <span
                          key={index}
                        >
                          <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`
                              fill-yellow
                              w-5
                            `}
                          >
                            <path
                              d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                              fillRule="nonzero"
                            />
                          </svg>
                        </span>
                      ))
                    }

                  </p>

                </div>

              </div>

              <p
                className={`
                  text-center md:text-left
                  flex
                  items-start
                  justify-center
                `}
              >
                <img
                  src="/images/icon-quote.svg"
                  className={`
                    w-16
                    mr-4
                  `}
                />
                {testimonial.comment}
              </p>

            </article>
          ))
        }
      </div>
    </section>

  )
}