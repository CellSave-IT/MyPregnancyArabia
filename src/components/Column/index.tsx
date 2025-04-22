import styled from '@emotion/styled'
import { CSSProperties, ReactNode } from 'react'
interface ColumnProps {
  children?: ReactNode
  styleColumn?: CSSProperties | string
  onClick?: () => void
  className?: string
  id?: string
}
const StyleColumn = styled.div`
  display: flex;
  flex-direction: column;
  ${(props: any) => props.styleColumn}
`

const Column = ({ children, ...restProps }: ColumnProps) => {
  return <StyleColumn {...restProps}>{children}</StyleColumn>
}

export default Column
