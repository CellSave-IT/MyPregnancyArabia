import styled from '@emotion/styled'

export const StyleContactHeader = styled.div`
  position: relative;
`

export const StyleContactContactWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 11;
  @media (max-width: 767px) {
    height: 160px;
  }
`

export const StyleContactTitle = styled.h1`
  font-size: 70px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  line-height: 70px;
  color: ${(props: any) => props.theme.colors.white};
  @media (max-width: 1300px) {
    font-size: 60px;
  }
  @media (max-width: 1024px) {
    font-size: 50px;
    line-height: 60px;
  }
  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 50px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    line-height: 50px;
  }
`

export const StyleContactDesc = styled.p`
  font-size: 22px;
  line-height: 33px;
  color: ${(props: any) => props.theme.colors.white};
  @media (max-width: 1300px) {
    font-size: 18px;
    line-height: 38px;
  }
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 20px;
  }
`

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

export const StyleContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  margin-bottom: 80px;
  .css-1k6q9xa:last-child {
    border: 0px;
  }
  .css-1k6q9xa:first-child {
    p.css-3ycebp,
    p.css-1corzgh {
      color: ${(props: any) => props.theme.colors.secondary};
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 20px;
    margin-bottom: 30px;
    .contact-info-item {
      border: 0px;
    }
    .contact-info-item:last-child {
      display: none;
    }
  }
`
export const StyleContactInfoGridTitle = styled.p`
  color: ${(props: any) => props.theme.colors.primary};
  font-size: 30px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  line-height: 70px;

  @media (max-width: 1300px) {
    font-size: 24px;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
`
export const StyleContactInfoGridDesc = styled.p`
  color: ${(props: any) => props.theme.colors.primary};
  font-size: 16px;
  cursor: pointer;
  transition: font-size 0.3s ease;
  &:hover {
    font-size: 17px;
  }
  @media (max-width: 1300px) {
    font-size: 14px;
  }
  @media (max-width: 1024px) {
    font-size: 12px;
  }
`
export const StyleContactInfoLink = styled.a`
  border: 1px solid ${(props: any) => props.theme.colors.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 10px;
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
  &::placeholder{
    color:#828282;
    font-size:16px;
  }
  @media (max-width: 1024px) {
    height:50px;
    &::placeholder{
      font-size:14px;
    }
    text-indent:10px;
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
    @media(max-width:767px){
      padding:15px 10px;
    }
`
