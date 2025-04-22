import styled from '@emotion/styled'

export const StyleSection = styled.div`
  padding: 80px 0px;
  background: ${(props: any) => props.theme.colors.secondary100};
  @media (max-width: 1024px) {
    padding: 60px 0px;
  }
  @media (max-width: 767px) {
    padding: 40px 0px;
  }
`
export const StyleSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
`
export const StyleSectionHeaderTitle = styled.h2`
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 700;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
