import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  $leftLine?: boolean
  $lineBottom?: boolean
}
const Heading = ({
  children,
  color = 'white',
  $leftLine,
  $lineBottom
}: HeadingProps) => (
  <S.Wrapper color={color} $leftLine={$leftLine} $lineBottom={$lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading
