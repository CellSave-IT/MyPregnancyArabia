import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
export const StyleSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.colors.primary};
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`
export const StyleSectionTitle = styled.h2`
  font-size: 32px;
  color: ${(props: any) => props.theme.colors.primary};
  line-height: 41px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  padding-bottom: 10px;
`

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const StyleGridItem = styled.div<any>`
  ${(props: any) => props.styleGridItem}
`
export const StyleGridItemWrapper = styled.div``
export const StyleGridInfo = styled.div`
  display: flex;
  column-gap: 30px;
`
export const StyleGridInfoText = styled.p`
  font-size: 16px;
  line-height: 34px;
  color: ${(props: any) => props.theme.colors.gray500};
`
export const StyleGridLink = styled(Link)`
  font-size: 20px;
  line-height: 28px;
  text-decoration: underline;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
`

export const styleRow = `
    justify-content: space-between;
    margin-top:60px;
`
export const styleLeftItem = `
    width:48%;
`

export const styleRightItem = `
    width:48%;
`

export const StyleBigBlogTitle = styled(Link)`
  font-size: 26px;
  line-height: 36px;
  text-decoration: underline;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
`

export const stylebadyInfoWrapper = `
    position: absolute;
    left:0px;
    width:100%;
    height:100%;
    diaplay:flex;
    align-items:center;
    justify-content:flex-end;
`

export const StyleBabyInfoTitle = styled.p`
  font-size: 30px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) => props.theme.colors.secondary};
`

export const styleDetailsHeadingWrapper = `
  justify-content:space-between;

`

export const styleDetailsLeftWrapper = `
  width:60%;
`
export const styleDetailsRightWrapper = `
  @media(max-width:1024px){
    img{
      width:15px;
    }
    div{
      div{
        width:30px;
        height:30px;
    }
  }
`

export const StyleDetailsHeadingTitle = styled.div`
  font-size: 50px;
  color: ${(props: any) => props.theme.colors.primary};
  line-height: 60px;
  font-weight: 600;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`
export const StyleDetailsHeadingInfoTitle = styled.p`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.primary};
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`

export const StyleShareText = styled.p`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
`

export const StyleSuggestionHeadingTitle = styled.h3`
  font-size: 50px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  font-weight: 600;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 768px) {
    font-size: 30px;
    line-height: 30px;
  }
`

export const StyleContentWrapper = styled.div<any>`
  color: ${(props: any) => props.theme.colors.primary};
  @media (max-width: 1024px) {
    p {
      font-size: 14px;
    }
  }
`
