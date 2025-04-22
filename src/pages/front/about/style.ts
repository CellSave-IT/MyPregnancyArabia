import styled from '@emotion/styled'
export const StyleAboutCard = styled.div<any>`
  background: ${(props: any) =>
    props.theme.colors[props.background || 'primary']};
  padding: 60px 0px;
  @media (max-width: 1024px) {
    padding: 40px 0px;
  }
  @media (max-width: 767px) {
    padding: 30px 0px;
  }
`
export const StyleCardTitle = styled.h3<any>`
  font-size: 62px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) => props.theme.colors[props.titleColor || 'primary']};
  line-height: 62px;
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const StyledCardDesc = styled.p<any>`
  font-size: 20px;
  color: ${(props: any) => props.theme.colors[props.descColor || 'primary']};
  line-height: 30px;
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`

export const StyleAboutHeader = styled.div`
  position: relative;
  height: 394px;
  @media (max-width: 1024px) {
    height: 300px;
  }
  @media (max-width: 767px) {
    height: 200px;
  }
`

export const StyleAboutContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 11;
`
export const StyleAboutTitle = styled.h1`
  font-size: 70px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  line-height: 70px;
  color: ${(props: any) => props.theme.colors.white};
  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 30px;
  }
`

export const styleAboutRowWrapper = `
  justify-content:space-between;align-items:center;
  @media(max-width:768px){
    flex-direction:column;
    row-gap:20px;
  }
`
export const styleAboutColumnWrapper = `
  width:70%;
  @media(max-width:1024px){
    width:100%;
    
  }
`
