import styled from '@emotion/styled'

export const StyleSection = styled.section`
  position: relative;
  background: ${(props: any) => props.theme.colors.primary400};
  height: 600px;
  @media (max-width: 1024px) {
    height: auto;
    padding: 30px 0px;
    img {
      display: none;
    }
  }
`
export const StyleWomanImage = styled.img`
  position: absolute;
  right: 0px;
  height: 80%;
  bottom: 10px;
  -webkit-animation: moverX 3s infinite alternate;
  animation: moverX 3s infinite alternate;
`
export const StyleAboutImage = styled.img`
  position: absolute;
  left: 0px;
  height: 40%;
  bottom: 10px;
  -webkit-animation: moverX 3s infinite alternate;
  animation: moverX 3s infinite alternate;
`
export const StyleAboutInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 90%;
  margin: 0px auto;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
export const StyleAboutTitle = styled.h3`
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  text-align: center;
  font-size: ${(props: any) => props.theme.fontSizes['7x']}px;
  color: ${(props: any) => props.theme.colors.white};
  font-weight: 300;
  line-height: 60px;
  @media (max-width: 1300px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const StyleAboutDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['lg']}px;
  color: ${(props: any) => props.theme.colors.white};
  width: 58%;
  text-align: justify;
  margin: 0px auto;
  margin-top: 40px;
  line-height: 26px;
  font-weigth: 400;
  @media (max-width: 1024px) {
    font-size: ${(props: any) => props.theme.fontSizes['md']}px;
    line-height: 22px;
    width: 100%;
    text-align: center;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    margin-top: 20px;
  }
`
