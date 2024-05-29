import ContactForm from "@/components/contact-form"
import H2 from "@/components/h2"

export default function ContactUs ({}) {
  return (
    <section
      className={`
        contact-us
        container
        mx-auto
        mt-20
      `}
      id='contact-us'
    >
      <H2
        hidden={true}
      >
        Contáctanos
      </H2>

      <p
        className={`
          text-center
          max-w-5xl
          mx-auto
          font-bold
        `}
      >
        Lleva la magia de En tu hogar by Coca-Cola® a más personas y recibe recompensas por recomendarnos.
        <br />
        ¡Afíliate ya!
      </p>

      <div 
        className={`
          contact-form-wrapper
          max-w-4xl
          mx-auto
          my-8
        `}
      >
        <ContactForm />
      </div>
    </section>
  )
}