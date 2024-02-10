import { screen } from '@testing-library/react'
import 'jest-styled-components'

import Logo from '.'
import { renderWithTheme } from '../../utils/tests/helper'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })
  it('should render a black label', () => {
    renderWithTheme(<Logo color="black" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
  it('should render a normal size by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem',
      height: '3.3rem'
    })
  })
  it('should render a large logo when is passed', () => {
    renderWithTheme(<Logo size="large" />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem',
      height: '5.9rem'
    })
  })
  it('should render a big logo when in mobile', () => {
    renderWithTheme(<Logo hideonmobile />)

    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width:  768px)'
      }
    )
  })
})
