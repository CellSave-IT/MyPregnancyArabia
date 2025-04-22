import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
export const StyleSection = styled.footer`
  background: ${(props: any) => props.theme.colors.footer};
  padding-top: 60px;
  @media (max-width: 767px) {
    padding-top: 30px;
  }
`
export const StyleRow = styled.div<any>`
  display: flex;
  width: 100%;
  ${(props) => props.styleRow}
`
export const StyleColumn = styled.div<any>`
  display: flex;
  flex-direction: column;
  ${(props) => props.styleColumn}
`
export const StyleFooterDesc = styled.p`
  color: ${(props: any) => props.theme.colors.primary};
  font-size: ${(props: any) => props.theme.fontSizes['lg']}px;
  font-weight: 300;
  @media (max-width: 767px) {
    text-align: center;
  }
`
export const StyleSubscribeTitle = styled.h3`
  color: ${(props: any) => props.theme.colors.primary};
  font-size: ${(props: any) => props.theme.fontSizes['2x']}px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 767px) {
    text-align: center;
  }
`
export const StyleSubscribeInputWrapper = styled.h3`
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  height: 48px;
  border-radius: 10px;
  padding: 7px 0px;
  margin-top: 20px;
  background-color: #3ab8b70d;
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 10px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`
export const StyleInput = styled.input`
  border:0px;
  font-size: ${(props: any) => props.theme.fontSizes.lg}px;
  color::${(props: any) => props.theme.colors.primary};
  height:48px;
  background:none;
  outline:none;
  width:100%;
  text-indent:27px;
  &::placeholder{
    color:${(props: any) => props.theme.colors.primary};
    font-size:14px;
  }
`

export const StyleBottomFooter = styled.div`
  border-top: 1px solid #a6d6cc33;
  margin-top: 40px;
  display: flex;
  align-items: center;
  padding: 15px 0px;
  @media (max-width: 767px) {
    margin-top: 10px;
  }
`
export const StyleCopyRightTitle = styled.p`
  font-size: ${(props: any) => props.theme.fontSizes['md']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 300;
  @media (max-width: 800px) {
    font-size: 12px;
    text-align: center;
  }
`
export const StyleLink = styled(Link)`
  font-size: ${(props: any) => props.theme.fontSizes['md']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 300;
  transition: all 0.5s;
  &:hover {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: ${(props: any) => props.theme.fontSizes['sm']}px;
  }
`

export const StyleFooterContactTitle = styled.h5`
  font-size: ${(props: any) => props.theme.fontSizes['1x']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  font-weight: 600;
`

export const StyleFooterContactDesc = styled.h5`
  font-size: ${(props: any) => props.theme.fontSizes.lg}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-weight: 400;
`

export const styleRowWrapper = `
  justify-content: space-between;
  @media (max-width:1024px){
    flex-direction: column;
    row-gap:10px;
    .foot-left{
      width:100%;
      justify-content: flex-start !important;
     
    }
    .foot-right{
      width:100%;
      
      a{
        transition: all 0.5s;
        &:hover{
          font-size:15px;
        }
      }
    
    }
    @media(max-width:767px){
      .last-foot-right{
        display:block !important;
        text-align:center !important;
      }
    }
  }
  @media(max-width:767px){
    h3{
      padding:5px;
      width:97%;
      font-size:20px;
    }
    p{
      font-size:14px;
    }
    .foot-left{
      width:100%;
      flex-direction: column;
      row-gap:10px;
      align-items:center;
    }
    
   
  }
`

export const styleSecondRowWrapper = `
  justify-content: space-between;
  margin-top:20px;
  column-gap:10px;
  @media (max-width:1024px){
    flex-direction: column;
    row-gap:10px;
  margin-top:10px;

    .foot-left{
      width:100%;
      
    }
    .foot-right{
      width:100% !important;
      flex-flow:wrap;
      row-gap:10px;
      justify-content: flex-start !important;
    }
  }
  @media(max-width:767px){
   
    .foot-left{
      flex-direction: column;
      align-items: center;
      row-gap:10px;
      h5{
        font-size:16px;
        text-align: center;
      }
    }   
  }
`

export const StyleContactLink = styled.a`
  color: ${(props: any) => props.theme.colors.primary};
  transition: 0.5s;
  &:hover {
    font-size: 17px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`
