import Image from 'next/image'
import React from 'react'
import { ITestimonial } from '.'

type Props = {}

const Testimonial = ({ description, fullName, imageUrl }: ITestimonial) => {
  return (
    <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
      {' '}
      <Image
        src={imageUrl}
        className="-mt-14 w-16"
        alt=""
        height={0}
        width={0}
        sizes="100vh"
      />
      <h5 className="text-lg font-bold">{fullName}</h5>
      <p className="text-sm text-darkGrayishBlue">{description}</p>
    </div>
  )
}

export default Testimonial
