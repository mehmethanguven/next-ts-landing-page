import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home test', () => {
  it('should to match snapshot', () => {
    const { asFragment } = render(<Home />)
    expect(asFragment()).toMatchSnapshot()
  })
})
