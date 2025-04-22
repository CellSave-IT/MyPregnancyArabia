import styled from '@emotion/styled'

export const StyleSectionHeaderWrapper = styled.div`
  border-bottom: 1px solid ${(props: any) => props.theme.colors.primary};
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    margin-bottom: 40px;
    border-bottom: 0px;
    border-top: 1px solid ${(props: any) => props.theme.colors.primary};
    margin-top: 0px;
  }
  @media (max-width: 767px) {
    margin-bottom: 15px !important;
  }
`
export const StyleSectionTitle = styled.h2`
  font-size: 28px;
  color: ${(props: any) => props.theme.colors.primary};
  line-height: 41px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  padding-bottom: 10px;
  @media (max-width: 1300px) {
    font-size: 28px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`

export const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    row-gap: 20px;
  }
`
export const StyleGridItem = styled.div<any>`
  &:hover {
    .blog-image {
      transform: scale(1.2);
    }
  }

  ${(props: any) => props.styleGridItem}
`
export const StyleGridItemWrapper = styled.div`
  @media (max-width: 767px) {
    .top-reads-grid-info {
      margin-top: 0px !important;
    }
  }
`
export const StyleGridInfo = styled.div`
  display: flex;
  column-gap: 30px;
  @media (max-width: 767px) {
    justify-content: space-between;
    margin-top: 15px;
  }
`
export const StyleGridInfoText = styled.p`
  font-size: 16px;
  line-height: 34px;
  color: ${(props: any) => props.theme.colors.gray500};
  @media (max-width: 1024px) {
    font-size: 10px;
    line-height: 13px;
  }
`
export const StyleGridLink = styled.h4<any>`
  font-size: 18px;
  line-height: 28px;
  text-decoration: underline;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #4c4d4d;
  }
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const styleRow = `
    justify-content: space-between;
    margin-top:60px;
    min-height:500px;
    @media(max-width:1024px){
      flex-direction: column;
      row-gap:20px;
      margin-top:40px;
    }
    @media(max-width:767px){
       margin-top:30px;
    }
`
export const styleLeftItem = `
    width:48%;
    @media(max-width:1024px){
      width:100%;
    }
`

export const styleRightItem = `
    width:48%;
    @media(max-width:1024px){
      width:100%;
    }
`

export const StyleBigBlogTitle = styled.h3`
  font-size: 22px;
  line-height: 36px;
  text-decoration: underline;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #4c4d4d;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`

export const stylebadyInfoWrapper = `
    position: absolute;
    left:0px;
    width:100%;
    height:100%;
    diaplay:flex;
    align-items:center;
    justify-content:flex-end;
    .compare-try{
      width:100%;
    }
    @media (max-width: 1024px) {
      position:static;
    
    }
   

`

export const StyleBabyInfoTitle = styled.p`
  font-size: 64px;
  font-weight: 700;
  line-height: 62px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) => props.theme.colors.secondary};
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 24px;
    color: white;
  }
`

export const styleDetailsHeadingWrapper = `
  justify-content:space-between;

`

export const styleDetailsLeftWrapper = `
  width:60%;
  @media(max-width: 767px) {
    width:81%
  }
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
}`

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
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`

export const StyleSuggestionGrid = styled.div`
  display: grid;
  column-gap: 15px;
  row-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
`

export const StyleSuggestionGridItem = styled.div``
export const StyleContentWrapper = styled.div<any>`
  color: ${(props: any) => props.theme.colors.primary};
  @media (max-width: 1024px) {
    p {
      font-size: 14px;
    }
  }
`
