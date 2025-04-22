import styled from '@emotion/styled'
export const StyleSection = styled.section`
  padding: 80px 0px;
  background: ${(props: any) => props.theme.colors.white100};
  position: relative;
  margin-top: 0px;
  @media (max-width: 1024px) {
    padding: 60px 0px;
    .test-image {
      display: none;
    }
  }
  @media (max-width: 767px) {
    padding: 40px 0px;
  }
`
export const StyleCard = styled.div`
  background: ${(props: any) => props.theme.colors.white};
  padding: 40px 30px;
  border-radius: 12px;
  min-height: 200px;
  width: 65%;
  position: relative;
  @media (max-width: 767px) {
    width: 92%;
    padding: 15px;
  }
`
export const StyleItem = styled.div`
  @media (max-width: 767px) {
    padding: 0px 5px;
  }
`
export const StyleInfoHeader = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 30px;
`
export const StyleTitle = styled.h4`
  font-size: ${(props: any) => props.theme.fontSizes['3x']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 20px;
  }
`
export const StyleDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
  }
`
export const StyleRow = styled.div`
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
`

export const StyleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  background: none;
  color: ${(props: any) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: ${(props: any) => props.theme.colors.primary};
    color: ${(props: any) => props.theme.colors.white};
  }
`
