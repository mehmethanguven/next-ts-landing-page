import { Button } from '@/components/Button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse items-center space-y-0 px-6 md:flex-row md:space-y-0">
      {/* <!-- Left item --> */}
      <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
        <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <div className="flex justify-center md:justify-start">
          <Button
            href="#"
            className="baseline rounded-full bg-brightRed p-3 px-6 pt-2 text-white hover:bg-brightRedLight"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* <!-- Image --> */}
      <div className="md:w-1/2">
        <Image
          width={0}
          height={0}
          sizes="100vh"
          src="/images/illustration-intro.svg"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  )
}

export default Hero
