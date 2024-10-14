import Hero from '@/sections/hero'
import Profits from '@/sections/profits'
import Testimonials from '@/sections/testimonials'
import HowItWorks from '@/sections/how-it-works'
import Cities from '@/sections/cities'
import KnowMore from '@/sections/know-more'
import ContactUs from '@/sections/contact-us'
import RootLayout from '@/layouts/root-layout'

import AOS from "aos"
import { useEffect } from "react"

import "aos/dist/aos.css"

export default function Index() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])

  return (
    <RootLayout>
      <main
        className={`
          w-full
          relative
          overflow-hidden
        `}
      >
        <Hero />
        <Profits />
        <Testimonials />
        <HowItWorks />
        <Cities />
        <KnowMore />
        <ContactUs />
      </main>
    </RootLayout> 
  )
}
