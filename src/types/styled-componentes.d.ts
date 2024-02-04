'use client'
import 'styled-components'

import theme from '@/styles/theme'

// Types inferências
type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
