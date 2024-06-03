import Hero from '@/sections/hero'
import Profits from '@/sections/profits'
import Testimonials from '@/sections/testimonials'
import HowItWorks from '@/sections/how-it-works'
import Cities from '@/sections/cities'
import KnowMore from '@/sections/know-more'
import ContactUs from '@/sections/contact-us'

export default function Index() {
  return (
    <main> 
      <Hero />
      <Profits />
      <Testimonials />
      <HowItWorks />
      <Cities />
      <KnowMore />
      <ContactUs />
    </main>
  )
}
