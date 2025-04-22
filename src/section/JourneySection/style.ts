import styled from '@emotion/styled'

export const StyleSection = styled.section`
  background: ${(props: any) => props.theme.colors.secondary500};
  min-height: 200px;
  padding: 80px 0px;
  position: relative;
  @media (max-width: 1024px) {
    img {
      height: 80%;
    }
    padding: 60px 0px;
  }
  @media (max-width: 760px) {
    padding: 40px 0px;
  }
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`
export const StyleColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const StyleContentWrapper = styled.div`
  text-align: center;
  width: 50%;
  margin: 0px auto;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`

export const StyleTitle = styled.h3`
  color: ${(props: any) => props.theme.colors.white};
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  line-height: 50px;
  text-transform: capitalize;
  @media (max-width: 1300px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
    line-height: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
  }
`

export const StyleDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors.white};
  line-height: 30px;
  text-align: center;
  font-weight: 300;
  @media (max-width: 1300px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
  }
`
