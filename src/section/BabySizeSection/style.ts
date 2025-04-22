import styled from '@emotion/styled'

export const StyleSection = styled.section`
  background: ${(props: any) => props.theme.colors.secondary400};
  min-height: 200px;
  padding: 30px 0px;
  @media (max-width: 768px) {
    padding-bottom: 0px;
  }
`
export const StyleRowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 20px;
    flex-flow: column-reverse;
    text-align: center;
  }
`

export const StyleLeftWrapper = styled.div`
  width: 48%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const StyleRightWrapper = styled.div`
  width: 48%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const StyleTitle = styled.h3`
  font-size: ${(props: any) => props.theme.fontSizes['4x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 600;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1300px) {
    font-size: ${(props: any) => props.theme.fontSizes['3x']}px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const StyleDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['2x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  margin-top: 20px;
  font-weight: 300;
  @media (max-width: 1300px) {
    font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
