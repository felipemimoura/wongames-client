import { render, screen } from '@testing-library/react'

import Main from '.'
describe('<Main />', () => {
  it('should render the heading', () => {
    // Passo 01 - Renderizar o component
    const { container } = render(<Main />)
    // Passo 02 - Buscar o elemento
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument()
    // Passo 03 - Verificar a existencia

    //Gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
