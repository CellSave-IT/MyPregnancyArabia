import styled from '@emotion/styled'
export const styleWrapper = `
    justify-content:space-between;
    align-items:center;
    height:100%;
    @media(max-width:1024px){
      flex-direction:column;
      row-gap:20px;
    }
`
export const styleLeftWrapper = `
    width:50%;
    @media(max-width:1024px){
      width:100%;
    }
%`
export const styleRightWrapper = `
    width:40%;
    @media(max-width:1024px){
      width:100%;
    }
`

export const StyleTitle = styled.h1`
  font-size: 70px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  line-height: 80px;
  color: #fff;
  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1024px) {
    font-size: 40px;
    color: #000;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 30px;
    line-height: 34px;
  }
`
export const StyleDesc = styled.p`
  font-size: 30px;
  color: #fff;
  font-weight: 400;
  @media (max-width: 1300px) {
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 21px;
    color: #000;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const StyleSliderTitle = styled.p<any>`
  font-size: 16px;
  color: #fff;
  background: ${(props: any) =>
    props?.isActive ? props.theme.colors.secondary : 'none'};
  border-radius: 50%;
  display: inline-block;
  float: left;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    padding-left: 7px;
  }
`

export const StyleSizeBg = styled.div`
  display: inline-block;
  background: rgba(201, 169, 209, 0.7);
  width: 68%;
  padding: 8px 0px;
  padding-left: 35px;
  border-radius: 10px;
  margin-top: 30px;
  @media (max-width: 1024px) {
    width: 91%;
  }
  .react-multi-carousel-list.baby-size-slider {
    display: flex;
    width: 75%;
    ul {
      display: flex;
      column-gap: 10px;
      width: 90%;
      margin-left: 10px;
      li {
        width: auto !important;
        font-size: 16px;
        font-weight: 700;
      }
    }
    .react-multiple-carousel__arrow--left {
      left: calc(1% + 1px);
    }
    .react-multiple-carousel__arrow--right {
      right: calc(0% + 1px);
    }
    .react-multiple-carousel__arrow {
      position: absolute;
      border-radius: 6px;
      border: 1px solid white;
      background: none;
      min-width: 25px;
      min-height: 25px;
      opacity: 1;
      cursor: pointer;
      background: ${(props: any) => props.theme.colors.secondary};
      &::before {
        font-size: 14px;
      }
    }
  }
  @media (max-width: 400px) {
    width: 100%;
    padding-left: 0px;
  }
`

export const styleFormBg = `
    background: rgba(201, 169, 209, 0.7);
    padding:40px 30px;
    border-radius:16px;
    @media(max-width:1024px){
      padding:20px 20px;
      margin-bottom:30px;
    }

`
export const StyleFormTitle = styled.p`
  font-size: 28px;
  color: white;
  line-height: 38px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  text-transform: capitalize;
  margin-bottom: 30px;
  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`

export const StyleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
    row-gap: 20px;
  }
`
export const styleFormItemWrapper = `
  width:48.5%;
  @media (max-width: 767px) {
    width:100%;
  }
`
export const styleContactForm = `
  height:60px;
  text-indent:30px;
  border:1px solid #E9DDED;
  border-radius:10px;
  background:white;
  padding:0px;
  font-size:16px;
  &::placeholder{
    color:#828282;
    font-size:16px;
  }
  &[type="date"]{
    text-indent:10px; 
    
  }
  @media (max-width:767px){
    height:50px;
  }
  @media (max-width: 1024px) {
   
    &::placeholder{
      font-size:14px;
    }
  }
`

export const styleContactMessageForm = `
    border:1px solid #E9DDED;
    border-radius:10px;
    padding:25px 30px;
      &::placeholder{
      color:#828282;
      font-size:16px;
    }
    @media (max-width: 1024px) {
      &::placeholder{
        font-size:14px;
      }
    }
`
