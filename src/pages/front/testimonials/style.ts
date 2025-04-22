import styled from '@emotion/styled'
export const StyleRow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`
export const StyleLeftWrapper = styled.div`
  width: 40%;
  postition: relative;
  @media (max-width: 767px) {
    width: 100%;
  }
`
export const StyleTitle = styled.h1`
  font-size: 70px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) => props.theme.colors.primary};
  line-height: 70px;
  @media (max-width: 1300px) {
    font-size: 60px;
    line-height: 60px;
  }
  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 767px) {
    font-size: 45px;
    line-height: 45px;
  }
  @media (max-width: 640px) {
    font-size: 30px;
    line-height: 30px;
  }
`
export const StyleDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors.primary};
  line-height: 30px;
  font-weight: 300;
  padding-top: 20px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 20px;
  }
`

export const StyleRigthWrapper = styled.div`
  width: 55%;
  @media (max-width: 767px) {
    width: 100%;
  }
`

export const StyleGrid = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  ${(props: any) => props.styleGrid}
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const StyleCard = styled.div<any>`
  background: ${(props: any) => props.theme.colors.white};
  &:hover {
    background: ${(props: any) => props.theme.colors.secondary};
    border-radius: 15px;
    p,
    h5 {
      color: white !important;
    }
  }
  ${(props: any) => props.styleCard}
`

export const StyleContentWrapper = styled.div`
  padding: 40px 30px;
  border: 1px solid ${(props: any) => props.theme.colors.primary100};
  border-radius: 12px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
`
export const StyleCardDesc = styled.p`
  font-size: 18px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 300;
  line-height: 26px;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 22px;
  }
`
export const StyleCardFooter = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  margin-top: 20px;
`
export const StyleCardTitle = styled.h5`
  font-size: 24px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`

export const StyleRowMessage = styled.div`
  display: flex;
  margin-top: 30px;
`
export const StyleMessageButton = styled.button`
  display: flex;
  column-gap: 15px;
  font-size: ${(props: any) => props.theme.fontSizes['lg']}px;
  width: auto;
  background: none;
  border: 0px;
  color: ${(props: any) => props.theme.colors.primary};
  text-decoration: underline;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  transition: 0.5s ease-out;
  cursor: pointer;
  &:hover {
    font-size: 18px;
    svg {
      fill: ${(props: any) => props.theme.colors.primary};
      stroke: white;
      font-size: 28px;
    }
  }
  @media (max-width: 768px) {
    padding: 0px;
  }
`
