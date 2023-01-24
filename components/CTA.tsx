import React from 'react'

type Props = {}

const CTA = (props: Props) => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
      {/* <!-- Heading --> */}
      <h2 className="text-center text-5xl font-bold leading-tight text-white md:max-w-xl md:text-left md:text-4xl">
        Simplify how your team works today
      </h2>
      {/* <!-- Button --> */}
      <div>
        <a
          href="#"
          className="shadow-2xl baseline rounded-full bg-white p-3 px-6 pt-2 text-brightRed hover:bg-gray-900"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default CTA
