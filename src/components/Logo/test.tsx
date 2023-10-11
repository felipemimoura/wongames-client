import { screen } from '@testing-library/react'

import { renderWithTheme } from '../../utils/tests/helpers'
import Logo from '.'
import 'jest-styled-components'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // Element Render
    renderWithTheme(<Logo />)
    // Select Element
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
    // Expect
  })
  it('should render a black label by default', () => {
    // Element Render
    renderWithTheme(<Logo color="black" />)
    // Select Element
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
    // Expect
  })

  it('should render a normal by default ', () => {
    // Element Render
    renderWithTheme(<Logo />)
    // Select Element
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
    // Expect
  })

  it('should render a bigger logo ', () => {
    // Element Render
    renderWithTheme(<Logo size="large" />)
    // Select Element
    expect(screen.getByLabelText(/Won games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
    // Expect
  })
  // it('should render a bigger logo without text if hideOnMobile', () => {
  //   renderWithTheme(<Logo hideOnMobile />)

  //   expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
  //     'width',
  //     '5.8rem',
  //     {
  //       media: '(min-width: 768px)'
  //     }
  //   )
  // })
})
