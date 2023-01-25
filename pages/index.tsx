import React from 'react'
import CTA from '@/components/CTA'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/Hero'
import Testimonials from '@/components/testimonials'

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta" className="bg-brightRed">
        <CTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home
