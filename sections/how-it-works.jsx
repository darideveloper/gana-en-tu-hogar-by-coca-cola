import H2 from '@/components/h2'
import Separator from '@/components/separator'

export default function HowItWorks({ }) {
  return (
    <section
      className={`
        how-it-works
        container
        mx-auto
      `}
      id='how-it-works'
    >
      <H2
        className={`
          max-w-11/12
        `}
      >
        <p
          className={`
            text-center
            inline-block
            md:mr-2
          `}
        >
          ¿Cómo funciona
        </p>
        <img
          src="/images/gana-en-tu-hogar.webp"
          alt="Gana en tu hogar by Coca-Cola"
          className={`
            w-9/12 sm:w-80
            mx-auto
            inline-block
            md:-mt-1
          `}
        />
        <p
          className={`
            text-center
            inline-block
            md:mr-2
          `}
        >
          ?
        </p>
      </H2>

      <div
        className={`
          content
          flex
          flex-col-reverse lg:flex-row
          items-center
          justify-center
          w-11/12 md:w-full
          gap-6
          mx-auto
        `}
      >
        <div
          className={`
            texts
            flex
            flex-col
            items-center lg:items-start
            justify-center
            gap-4
            w-full lg:w-7/12
            text-center lg:text-left
          `}
        >
          <p
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Gana desde <strong>$100</strong> por cada nueva persona que recomiendes y siga comprando.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Como embajador, recibirás un cupón único que podrás compartir con tu familia, amigos y en redes sociales, brindándoles <strong>$60</strong> de descuento en sus <strong>3 primeras compras</strong> de $299 o más.
          </p>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Nosotros nos encargamos del cobro y la entrega; tú solo debes recomendar y recordar a tu red que continúe disfrutando los beneficios de En tu hogar by Coca-Cola®.
          </p>

        </div>

        <Separator />

        <video
          src="/videos/como-funciona-gana-en-tu-hogar-con-cocacola.mp4"
          controls
          autoPlay
          muted
          loop
          className={`
            mx-auto
            w-full lg:w-5/12
            mt-6 lg:mt-0
          `}
        >
        </video>

      </div>

    </section>
  )
}