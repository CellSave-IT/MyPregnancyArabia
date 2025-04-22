import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
export const StyleWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #fafafa;
`

export const StyleSidBarWrapper = styled.div`
  width: 300px;
  background: ${(props: any) => props.theme.colors.primary};
  min-height: 100vh;
`

export const StyleContentWrapper = styled.div`
  width: calc(100% - 300px);
`
export const StyleHeaderWrapper = styled.div`
  background: ${(props: any) => props.theme.colors.white};
  height: 50px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`

export const StyleContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const StyleCard = styled.div`
  background: white;
  min-height: 60vh;
  border-radius: 20px;
  margin: 40px 0px;
`

export const StyleLink = styled(Link)`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.white};
`

export const StyleTitle = styled.p`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.white};
`
