import { useState } from 'react'

import Input from '@/components/input'
import Checkbox from '@/components/checkbox'
import Cta from '@/components/cta'

export default function ContactForm({ }) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <form
      action={""}
      onSubmit={e => { }}
      className={`
        flex
        flex-col
        gap-4
        w-11/12
        mx-auto
      `}
    >

      <div
        className={`
          inputs
          flex
          flex-col md:flex-row
          gap-4
        `}
      >
        <Input
          type="text"
          placeholder="Nombre*"
          name="name"
          required={true}
          setValue={setName}
          value={name}
        />

        <Input
          type="email"
          placeholder="Email*"
          name="email"
          required={true}
          setValue={setEmail}
          value={email}
        />

        <Input
          type="tel"
          placeholder="Teléfono*"
          name="phone"
          required={true}
          setValue={setPhone}
          value={phone}
        />
      </div>

      <Checkbox
        name="terms"
        required={true}
        className={`
          mx-auto
          inline-block
        `}
      >
        Acepto el &#160;
          <a 
            href="/aviso-de-privacidad"
            className={`
              font-bold
            `}
          >
            Aviso de Privacidad
          </a>
          &#160; y los &#160;
          <a
            href="/terminos-y-condiciones"
            className={`
              font-bold
            `}
          >
            Términos y Condiciones
          </a>
      </Checkbox>

      <Cta
        onClick={e => {
          // TODO: Submit form
        }}
      >
        Quiero más información GRATIS
      </Cta>

      <p
        className={`
          text-center
          text-sm
        `}
      >
        No vamos a compartir tus datos con nadie
      </p>

    </form>

  )
}