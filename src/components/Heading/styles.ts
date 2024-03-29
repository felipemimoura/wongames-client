import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HeadingProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

const wrapperModifier = {
  leftLine: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, $leftLine, $lineBottom }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};

    //Quando for maior do que 768px ele entra nesse media query
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${$leftLine && wrapperModifier.leftLine(theme)}
    ${$lineBottom && wrapperModifier.lineBottom(theme)}
  `}
`
