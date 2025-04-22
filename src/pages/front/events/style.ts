import styled from '@emotion/styled'

export const StyleEventDetailsTitle = styled.h1<any>`
  font-size: 50px;
  line-height: 60px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  color: ${(props: any) =>
    props.type == 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 28px;
  }
`

export const StyleShareText = styled.p<any>`
  font-size: 16px;
  color: ${(props: any) =>
    props.type === 'secondary'
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
`
export const StyleEventInfoText = styled.p<any>`
  font-size: 30px;
  color: ${(props: any) =>
    props.type == 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  font-weight: 400;
  @media (max-width: 1024px) {
    font-size: 24px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
export const StyleEventParagraph = styled.p<any>`
  font-size: 20px;
  color: ${(props: any) =>
    props.type == 'primary'
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
  line-height: 30px;
  font-weight: 300;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`

export const StyleContentWrapper = styled.div<any>`
  color: ${(props: any) => props.theme.colors[props.type]};
  p {
    line-height: 26px;
  }
  @media (max-width: 1024px) {
    p {
      font-size: 14px;
      line-height: 22px;
    }
  }
`
export const StyleGalleryGrid = styled.div<any>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const StyleGalleryGridItem = styled.div<any>``

export const StyleContactFormBg = styled.div`
  background: #faf7fb;
  padding: 60px 60px;
  border-radius: 12px;
  @media (max-width: 1024px) {
    padding: 40px 40px;
  }
  @media (max-width: 767px) {
    padding: 20px 20px;
  }
`
export const StyleContactFormTitle = styled.div`
  font-size: 30px;
  color: ${(props: any) => props.theme.colors.secondary};
  font-weight: 500;
  margi-bottom: 30px;
  @media (max-width: 1300px) {
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`
export const StyleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  select {
    color: #828282;
    font-weight: 300;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 20px;
  }
`
export const styleWrapper = `
  width:48.5%;
  @media (max-width: 1024px) {
    width:100%;
  }
`
export const styleContactForm = `
  height:60px;
  text-indent:30px;
  border:1px solid #E9DDED;
  border-radius:10px;
  background:white;
  width:100%;
  font-size:16px;
  padding:0px;
  
  &::placeholder{
    color:#828282;
    font-size:16px;
  }
  &[type="date"]{
    text-indent:10px; 
    
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
`

export const StyleRadioLabel = styled.p`
  font-size: 18px;
  color: #828282;
`

export const StyleRadioInput = styled.input`
  appearance: none;
  outline: #828282 1px solid;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  transition: 0.1s;
  padding: 2px;
  &:checked {
    padding: 2px;
    background-color: ${(props: any) => props.theme.colors.secondary};
  }
`
