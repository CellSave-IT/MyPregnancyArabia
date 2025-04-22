import styled from '@emotion/styled'
import { ReactNode } from 'react'

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0px auto;
  height: 100%;
  @media only screen and (max-width: 1300px) {
    width: 90%;
  }
  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`
interface ContainerProps {
  children?: ReactNode
  className?: string
  style?: any
}

const Container = ({ children, ...restProps }: ContainerProps) => {
  return <StyleContainer {...restProps}>{children}</StyleContainer>
}

export default Container
