import styled from '@emotion/styled'

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const StyleTitle = styled.h4`
  font-size: 30px;
  color: ${(props: any) => props.theme.colors.primary};
  line-heightl: 34px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 26px;
  }
  @media (max-width: 767px) {
    font-size: 18px;
    line-height: 22px;
  }
`
export const StyleDesc = styled.p`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.primary};
  line-heightl: 26px;
  @media (max-width: 767px) {
    font-size: 10px;
    line-height: 14px;
  }
`
