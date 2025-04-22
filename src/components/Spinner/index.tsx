import styled from '@emotion/styled'
import { theme } from '../../utils'
interface SpinnerProps {
  size?: number
  color?: keyof typeof theme.colors
}
const LoadingIndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 111;
`
const LoadingIndicator = styled.div<any>`
  border-radius: 50%;
  width: 0;
  height: 0;
  box-sizing: border-box;
  border: ${({ size }) => (!!size ? size : 26)}px solid #333;
  border-color: ${({ color, theme }: any) =>
    `${theme.colors[color || 'primary']} transparent ${theme.colors[color || 'primary']} transparent`};
  animation: spinner 1.2s infinite;
  @keyframes spinner {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
`

const Spinner = (props: SpinnerProps) => {
  return (
    <LoadingIndicatorWrapper>
      <LoadingIndicator {...props} />
    </LoadingIndicatorWrapper>
  )
}

export default Spinner
