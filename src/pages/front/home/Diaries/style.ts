import styled from '@emotion/styled'

export const StyleHeading = styled.h3`
  color: ${(props: any) => props.theme.colors.primary};
  color: ${(props: any) => props.theme.colors.primary};
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const StyleDesc = styled.p`
  color: ${(props: any) => props.theme.colors.primary};
  font-size: 22px;
  line-height: 33px;
  width: 90%;
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 22px;
    width: 100%;
  }
`

export const StyleFilterWrapper = styled.div`
  display: flex;
  background-color: ${(props: any) => props.theme.colors.footer};
  border-radius: 8px;
`

export const StyleFilterUl = styled.ul`
  display: flex;
  column-gap: 0px;
  align-items: center;
  height: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 10px;
    align-items: flex-start;
  }
`

export const StyleFilterLi = styled.li<any>`
  font-size: 14px;
  color: ${(props: any) =>
    !!props.active ? props.theme.colors.primary : '#89d4d2'};
  cursor: pointer;
  padding: 10px 30px;
  font-weight: ${(props: any) => (!!props.active ? `600` : `300`)};
  @media (max-width: 1024px) {
    font-size: 16px;
    flex-flow: row wrap;
    padding: 10px 10px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
