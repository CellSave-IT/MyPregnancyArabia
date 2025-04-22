import styled from '@emotion/styled'
import { CSSProperties, ReactNode } from 'react'
interface RowProps {
  children?: ReactNode
  styleRow?: CSSProperties | string
  onClick?: () => void
  className?: string
}
const StyleRow = styled.div`
  display: flex;
  ${(props: any) => props.styleRow}
`

const Row = ({ children, ...restProps }: RowProps) => {
  return <StyleRow {...restProps}>{children}</StyleRow>
}

export default Row
