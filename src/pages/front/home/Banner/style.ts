import styled from '@emotion/styled'

export const StyleBannerWrapper = styled.div`
  width: 100%;
  height: 750px;
  background: ${(props: any) => props.theme.colors.white500};
  position: relative;
  @media (max-width: 767px) {
    height: 300px;
  }
`

export const StyleVideo = styled.video<any>`
  width: 100%;
  height: auto;
  filter: brightness(0.7);
  height: 750px;
  object-fit: cover;
  @media (max-width: 767px) {
    object-fit: cover;
    height: 300px;
  }
`
export const StyleBannerTextWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 0px;
  width: 100%;
  @media (max-width: 767px) {
    top: 35%;
  }
`
export const StyleBannerText = styled.h3`
  font-size: 70px;
  color: #fff;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 50px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 24px;
  }
`
export const StyleVideoActionButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  height: 80px;
  border-radius: 40px;
  padding: 10px 10px;
  border: 0px;
  outline: none;
  display: flex;
  align-items: center;
  width: 150px;
  column-gap: 10px;
  @media (max-width: 1024px) {
    height: 60px;
    font-size: 14px;
  }
`
export const StyleVideoActionIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props: any) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyleVideoActionText = styled.p`
  font-size: 14px;
  color: #e0e0e0;
`
