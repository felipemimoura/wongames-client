import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { LogoProps } from '.'

const wrapperModifier = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,

  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideonmobile: () => css`
    ${media.lessThan('medium')` //Quando for menor que 768px

    width: 5.8rem;
    height: 4.5rem;

    svg {
      height: 4.5rem;
      pointer-events: none
    }

    .text {
      display: none;
    }

  `}
  `
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size, hideonmobile }) => css`
    color: ${theme.colors[color!]};

    ${!!size && wrapperModifier[size]}

    ${hideonmobile ? wrapperModifier.hideonmobile : undefined}
  `}
`
