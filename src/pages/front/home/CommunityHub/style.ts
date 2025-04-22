import styled from '@emotion/styled'
export const StyleSection = styled.section<any>`
  padding: 80px 0px;
  background: ${(props: any) => props.theme.colors[props.background]};
  @media (max-width: 1024px) {
    padding: 60px 0px;
  }
  @media (max-width: 767px) {
    padding: 30px 0px;
  }
`
export const StyleGrid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    .main-item-hub:first-child {
      grid-column: span 2;
      div {
        height: 350px;
        .hub-info-wrapper {
          margin-top: 40%;
        }
      }
    }
  }
  &.sub-grid {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
    }
  }
`
export const StyleCard = styled.div<any>`
  width: 100%;
  border-radius: 8px;
  position: relative;
  background: ${(props: any) => props.theme.colors.secondary};
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    background: ${(props: any) => props.theme.colors.secondary};
    height: 100%;
    width: 100%;
    left: 0px;
    z-index: 1;
    transform: translateY(100%);
    transition: transform 0.5s;
  }
  &:hover::before {
    transform: translateY(0);
  }
  ${(props: any) => props.styleCard}
`
export const StyleTitle = styled.h4`
  color: ${(props: any) => props.theme.colors.white};
  font-size: ${(props: any) => props.theme.fontSizes['3x']}px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const StyleDesc = styled.div`
  color: ${(props: any) => props.theme.colors.white};
  font-size: ${(props: any) => props.theme.fontSizes['lg']}px;
  margin-top: 15px;
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const StyleInfoWrapper = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 11;
  @media (max-width: 767px) {
    margin-top: 35%;
  }
`
export const StyleInfoContent = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  margin-bottom: 80px;
  margin-top: 55%;
  @media (max-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`
