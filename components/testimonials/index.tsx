import React from 'react'
import Testimonial from './Testimonial'

export interface ITestimonial {
  fullName: string
  description: string
  imageUrl: string
}

const testimonials: ITestimonial[] = [
  {
    fullName: 'Anisha Li',
    description:
      'Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
    imageUrl: '/images/avatar-anisha.png',
  },
  {
    fullName: 'Alia Bravo',
    description:
      'We have been able to cancel so many other subscriptions since using  Manage. There is no more cross-channel confusion and everyone is  much more focused.',
    imageUrl: '/images/avatar-ali.png',
  },
  {
    fullName: 'Richard Watts',
    description:
      '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.',
    imageUrl: '/images/avatar-richard.png',
  },
]

const Testimonials = () => {
  return (
    <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
      {/* <!-- Heading --> */}
      <h2 className="text-center text-4xl font-bold">
        What&apos;s Different About Manage?
      </h2>
      {/* <!-- Testimonials Container --> */}
      <div className="mt-24 flex flex-col md:flex-row md:space-x-6">
        {/* <!-- Testimonial 1 --> */}

        {(testimonials || []).map((item, id) => (
          <Testimonial key={id} {...item} />
        ))}
      </div>
      {/* <!-- Button --> */}
      <div className="my-16">
        <a
          href="#"
          className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Testimonials
