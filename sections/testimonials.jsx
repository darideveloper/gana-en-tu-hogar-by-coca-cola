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
      "client": "dari dev 1",
      "stars": 5,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla sit amet turpis ultricies."
    },
    {
      "client": "dari dev 2",
      "stars": 5,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla sit amet turpis ultricies."
    },
    {
      "client": "dari dev 3",
      "stars": 5,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla sit amet turpis ultricies."
    },
    {
      "client": "dari dev 4",
      "stars": 5,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla sit amet turpis ultricies."
    },
    {
      "client": "dari dev 5",
      "stars": 5,
      "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla sit amet turpis ultricies."
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


      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
        slidesPerView={perPage}
        navigation
        pagination={{ clickable: true }}
      >

        {
          testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <article
                className={`
                  flex
                  flex-col-reverse
                  mb-8
                  w-11/12
                  mx-auto
                `}
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
                    src={`/images/testimonials/${testimonial.client}.png`}
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
                        stars
                      `}
                    >

                      {
                        Array.from({ length: testimonial.stars }).map((_, index) => (
                          <span
                            key={index}
                          >
                            ⭐
                          </span>
                        ))
                      }

                    </p>


                  </div>

                </div>

                <p>{testimonial.comment}</p>

              </article>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </section>

  )
}