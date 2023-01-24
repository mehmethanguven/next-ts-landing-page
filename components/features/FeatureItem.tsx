import React from 'react'

export interface IFeatureItem {
  order: string
  title: string
  description: string
}

const FeatureItem = ({ order, title, description }: IFeatureItem) => {
  return (
    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-6">
      {/* <!-- Heading --> */}
      <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-brightRed px-4 py-2 text-white md:py-1">
            {order}
          </div>
          <h3 className="text-base font-bold md:mb-4 md:hidden">{title}</h3>
        </div>
      </div>

      <div>
        <h3 className="mb-4 hidden text-lg font-bold md:block">{title}</h3>
        <p className="text-darkGrayishBlue">{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem
