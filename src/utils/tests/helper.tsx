import { ThemeProvider } from 'styled-components'
import { RenderResult, render } from '@testing-library/react'

import theme from '@/styles/theme'
import { PropsWithChildren } from 'react'

//Componente para auxiliar nos teste.
// Esse compnente renderiza o componente já passando as informações do tema
export const renderWithTheme = ({
  children
}: PropsWithChildren): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
