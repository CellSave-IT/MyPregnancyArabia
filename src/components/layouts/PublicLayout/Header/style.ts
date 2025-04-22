import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
export const StyleHeader = styled.header`
  background: ${(props: any) => props.theme.colors.white};
  position: sticky;
  top: 0px;
  z-index: 111;
`
export const StyleHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  align-items: center;
  position: sticky;
  top: 0px;
  @media (max-width: 640px) {
    padding: 10px 15px;
  }
`
export const StyleLogoWrapper = styled.div``
export const StyleImage = styled.img`
  height: 80px;
  cursor: pointer;
  @media (max-width: 768px) {
    height: 50px;
  }
`

export const StyleHeaderButtonsWrapper = styled.div`
  display: flex;
  column-gap: 15px;

  @media (max-width: 800px) {
    flex-direction: column;
    div {
      background: none;
      padding: 0px;
    }
    button {
      border-radius: 0px;
    }
  }
`
export const StyleMenuBarWrapper = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`
export const StyleNavWrapper = styled.nav<any>`
  height: 100%;
  display: flex;
  flex-direction: row;
  .mb-nav {
    display: none;
  }
  @media (max-width: 800px) {
    display: ${(props: any) => (props.active === 'true' ? 'block' : 'none')};
    position: absolute;
    right: 0px;
    top: 76px;
    width: 300px;
    .nav-buttons {
      display: none;
    }
    .mb-nav {
      display: block;
    }
    ul {
      flex-direction: column;
      background-color: ${(props: any) => props.theme.colors.secondary};
      margin-right: 0px;
      li {
        color: white;
        text-align: left;
        width: 100%;
        a {
          padding: 10px 15px;
          display: block;
        }
        ul {
          position: static;
          width: 100%;
        }
        p {
          padding: 10px 14px;
        }
        &hover {
          color: white;
        }
      }
    }
    button {
      width: 100%;
    }
  }
  @media (max-width: 800px) {
    background-color: ${(props: any) => props.theme.colors.secondary};
    border-radius: 16px;
    height: auto;
    ul {
      background: none;
    }
    button {
      border-radius: 16px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
export const StyleUlWrapper = styled.ul`
  display: flex;
  column-gap: 30px;
  align-items: center;
  margin-right: 30px;
  @media (max-width: 1400px) {
    column-gap: 15px;
  }
`
export const StyleLiWrapper = styled.li<any>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  &:hover {
    ul {
      display: block;
    }
  }
  @media (max-width: 800px) {
    background: ${(props: any) =>
      props.active == 'true'
        ? props.theme.colors.primary
        : props.theme.colors.secondary};
    &:first-child {
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
    &:last-child {
      border-bottom-left-radius: 16px;
      border-bottom-right-radius: 16px;
    }
  }
`
export const StyleLink = styled(Link)<any>`
  font-size: ${(props: any) => props.theme.fontSizes.lg}px;
  color: ${(props: any) =>
    props?.active === 'true'
      ? props.theme.colors.primary
      : props.theme.colors.gray200};
  font-weight: 300;
  &:hover {
    color: ${(props: any) => props.theme.colors.primary};
  }
  @media (max-width: 800px) {
    color: ${(props: any) =>
      props.active === 'true'
        ? props.theme.colors.white
        : props.theme.colors.white};
  }
  @media (max-width: 1300px) {
    font-size: ${(props: any) => props.theme.fontSizes.md}px;
  }
  @media (max-width: 1024px) {
    font-size: ${(props: any) => props.theme.fontSizes.sm}px;
  }
`
export const StyleNavText = styled.p<any>`
  cursor: pointer;
  font-size: ${(props: any) => props.theme.fontSizes.lg}px;
  color: ${(props: any) =>
    props?.active === 'true'
      ? props.theme.colors.primary
      : props.theme.colors.gray200};
  font-weight: 300;
  display: flex;
  align-items: center;
  column-gap: 5px;
  &:hover {
    color: ${(props: any) => props.theme.colors.primary};
  }
  @media (max-width: 1300px) {
    font-size: ${(props: any) => props.theme.fontSizes.md}px;
  }
  @media (max-width: 800px) {
    justify-content: space-between;
    color: ${(props: any) =>
      props?.active === 'true'
        ? props.theme.colors.white
        : props.theme.colors.white};
    &:hover {
      color: ${(props: any) => props.theme.colors.white};
    }
  }
`
export const StyleDropdownWrapper = styled.ul<any>`
  position: absolute;
  background-color: ${(props: any) => props.theme.colors.secondary};
  border-radius: 4px;
  width: 200px;
  top: 60px;
  row-gap: 0px;
  display: none;
  a {
    color: white;
    padding: 7px 20px;
  }

  ${(props: any) => props.dropStyle}
`
export const StyleDropdownItem = styled.li`
  border-radius: 4px;
  &:hover {
    background: ${(props: any) => props.theme.colors.primary};
    a {
      color: white;
    }
  }
  @media (max-width: 800px) {
    padding-left: 20px;
  }
`
