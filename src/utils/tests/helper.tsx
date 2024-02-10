import { RenderResult, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import React from 'react'

//Componente para auxiliar nos teste.
// Esse compnente renderiza o componente já passando as informações do tema
export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
