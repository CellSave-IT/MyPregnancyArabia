import styled from '@emotion/styled'

export const StyleColumn = styled.div<any>`
  display: flex;
  flex-direction: column;
  ${(props) => props.styleColumn}
`

export const StyleHeading = styled.h1<any>`
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  color: ${(props: any) => props.theme.colors[props.type]};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1300px) {
    font-size: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
`
export const StyleDesc = styled.p<any>`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors[props.type]};
  font-weight: 300;
  width: 90%;
  ${(props) => props.styleDesc}
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    width: 100%;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
