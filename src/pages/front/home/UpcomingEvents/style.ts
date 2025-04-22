import styled from '@emotion/styled'

export const StyleSection = styled.div`
  margin: 80px 0px;
  @media (max-width: 1200px) {
    margin: 40px 0px;
  }
  @media (max-width: 1024px) {
    margin: 30px 0px;
  }
`
export const StyleSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const StyleLeftSectionHeader = styled.div``
export const StyleRightSectionHeader = styled.div``
export const StyleSectionHeaderTitle = styled.h2`
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 700;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1300px) {
    font-size: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

export const StyleSectionHeaderDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['lg']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 300;
  margin-top: 30px;
  width: 55%;
  @media (max-width: 1024px) {
    width: 100%;
    font-size: ${(props: any) => props.theme.fontSizes['md']}px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`
export const StyleItems = styled.div`
  margin-top: 40px;
  position: relative;
  @media (max-width: 767px) {
    margin-top: 0px;
  }
  li.react-multi-carousel-item.react-multi-carousel-item--active {
    padding-bottom: 60px;
    @media (max-width: 767px) {
      padding-bottom: 20px;
    }
  }
  ul.react-multi-carousel-dot-list {
    bottom: 0px;
    z-index: 111;
    .react-multi-carousel-dot button {
      width: 70px;
      border-radius: 0px;
      border: 0px;
      height: 4px;
      background: ${(props: any) => props.theme.colors.pink};
    }

    .react-multi-carousel-dot--active button {
      background: ${(props: any) => props.theme.colors.secondary};
    }
  }
`

export const StyleItem = styled.div`
  background-color: ${(props: any) => props.theme.colors.secondary400};
  min-height: 500px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
  }
`
export const StyleItemInfoWrapper = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const StyleItemInfo = styled.div`
  text-align: center;
  padding: 20px;
`
export const StyleItemTitle = styled.h4`
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  font-size: ${(props: any) => props.theme.fontSizes['4x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const StyleItemDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 300;
  line-height: 30px;
  width: 66%;
  margin: 0px auto;
  margin-top: 60px;
  @media (max-width: 1024px) {
    font-size: 16px;
    margin-top: 30px;
    width: 100%;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    line-height: 20px;
    width: 100%;
    margin-top: 10px;
  }
`
export const StyleEventDateInfoWrapper = styled.div`
  display: flex;
  column-gap: 40px;
  justify-content: center;
  padding-top: 40px;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 10px;
  }
  @media (max-width: 767px) {
    padding-top: 10px;
  }
`
export const StyleEventDateInfoItem = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`
export const StyleEventDateInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${(props: any) => props.theme.colors.secondary};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
`
export const StyleItemImageWrapper = styled.div`
  width: 39%;
  @media (max-width: 1024px) {
    width: 100%;
    img {
      border-radius: 0px;
    }
  }
`

export const StyleRegisterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;
  width: 100%;
  margin-top: 80px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`

export const StyleRegisterButton = styled.div`
  display: flex;
  column-gap: 20px;
  font-size: ${(props: any) => props.theme.fontSizes['2x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 400;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  svg {
    stroke-width: 1px;
  }
  &:hover {
    font-size: 26px;
    svg {
      fill: ${(props: any) => props.theme.colors.secondary};
      color: white;
    }
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    &:hover {
      font-size: 18px;
    }
  }
  @media (max-width: 767px) {
    font-size: 14px;
    svg {
      width: 30px;
      height: 30px;
    }
  }
`
