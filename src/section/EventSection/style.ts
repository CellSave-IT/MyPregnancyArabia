import styled from '@emotion/styled'
export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    column-gap: 10px;
  }
  @media (max-width: 767px) {
  }
`

export const StyleGridContentWrapper = styled.div<any>`
  padding: 20px 20px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
  @media (max-width: 1024px) {
    padding: 15px 10px;
    height: -webkit-fit-content;
  }
`
export const StyleGridTitle = styled.h3<any>`
  color: ${(props: any) => props.theme.colors[props.type]};
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  cursor: pointer;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
    line-height: 22px;
    padding-top: 15px;
    padding-right: 10px;
    padding-left: 10px;
  }
`
export const StyleGridDesc = styled.p<any>`
  color: ${(props: any) => props.theme.colors[props.type]};
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 24px;
    margin-bottom: 10px;
    margin-top: 0px;
    line-height: 18px;
  }
`
export const StyleGridItemWrapper = styled.div<any>`
  background: ${(props: any) => props.theme.colors[props.background]};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    background: ${(props: any) => props.theme.colors[props.type]};
    color: white;
    .event-image {
      transform: scale(1.2);
    }
    h3 {
      color: white !important;
    }
    p {
      color: white !important;
    }
    a {
      color: white !important;
    }
    .event-info img,
    .event-button img {
      filter: brightness(0) invert(1);
    }
  }
`
export const StyleInfoText = styled.p<any>`
  color: ${(props: any) => props.theme.colors[props.type]};
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    line-height: 13px;
  }
`

export const StyleLink = styled.h3<any>`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors[props.type]};
  display: flex;
  align-items: center;
  column-gap: 20px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    font-size: 17px;
  }
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
