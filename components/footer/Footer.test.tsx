import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

describe('Footer test', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
