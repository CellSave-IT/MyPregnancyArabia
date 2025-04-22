import styled from '@emotion/styled'
import { CSSProperties } from 'react'
interface StyleImageProps {
  src: string
  alt?: string
  styleImage?: string | CSSProperties
  width?: number
  height?: number
  onClick?: (event?: MouseEvent) => void
  className?: string
}
const StyleImage = styled.img<any>`
  ${(props: any) => props.styleImage}
`
const Image = (props: StyleImageProps) => {
  return <StyleImage {...props} />
}
export default Image
