import React from 'react'

type Props = {
  children: React.ReactNode
}

const CardContainer = ({ children }: Props) => {
  return (
    <div className="min-w-1/2 flex h-40 items-center rounded-lg border border-gray-100 p-5">
      {children}
    </div>
  )
}

export default CardContainer
