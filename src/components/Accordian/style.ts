import styled from '@emotion/styled'

export const StyleAccordianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
export const StyleAccordianItem = styled.div`
  transition: all 0.5s;
  border: 1px solid #c9a9d166;
  border-radius: 20px;
`
export const StyleAccordianItemWrapper = styled.div`
  transition: all 0.5s;
  padding: 40px 50px;
  @media (max-width: 768px) {
    padding: 15px 10px;
  }
`
export const StyleAccordianHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
  svg {
    cursor: pointer;
    transistion: 0.5s ease-in-out;
    stroke: ${(props: any) => props.theme.colors.secondary};

    &:hover {
      stroke: #9b60aa;
    }
  }
`
export const StyleAccordianTitle = styled.h4`
  font-size: 26px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) => props.theme.colors.secondary};
  @media (max-width: 1024px) {
    font-size: 22px;
    width: 90%;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
`
export const StyleAccordianContentWrapper = styled.div<any>`
  display: ${(props: any) => (!!props.active ? 'block' : 'none')};
  margin-top: 20px;
`
export const StyleAccordianDesc = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes.lg}px;
  color: ${(props: any) => props.theme.colors.secondary};
  line-height: 30px;
  font-weigth: 300;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
  }
`
