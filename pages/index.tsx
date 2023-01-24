import React from 'react'
import CTA from '@/components/CTA'
import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/Hero'
import Header from '@/components/header/Header'
import Testimonials from '@/components/testimonials'

const Home = () => {
  return (
    <div>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        {/* <!-- Flex Container --> */}
        <Hero />
      </section>
      <section id="features">
        {/* <!-- Flex container --> */}
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="cta" className="bg-brightRed">
        {/* <!-- Flex Container --> */}
        <CTA />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home
