import styled from '@emotion/styled'
import { theme } from '../../utils/'
import Spinner from '../Spinner'
import { CSSProperties, ReactNode } from 'react'
interface StyleButtonProps {
  outline?: boolean
  background?: keyof typeof theme.colors
  size?: keyof typeof theme.fontSizes
  titleColor?: keyof typeof theme.colors
  borderColor?: keyof typeof theme.colors
  disabled?: boolean
  type?: 'submit' | 'button'
  width?: number | string
  height?: number | string
  radius?: number
  family?: keyof typeof theme.fontFamily
  buttonStyle?: string
}
interface ButtonProps extends StyleButtonProps {
  children?: ReactNode
  title?: string
  onClick?: () => void
  loading?: boolean
}

interface ButtonShadowProps {
  children?: ReactNode
  background?: keyof typeof theme.colors
  radius?: number
  buttonStyle?: string | CSSProperties
  buttonShadowStyle?: string | CSSProperties
}

const StyleButton = styled.button<StyleButtonProps>`
  border: ${(props: any) =>
    !!props.outline
      ? `1px solid ${props.theme.colors[props.borderColor || 'gray500']}`
      : `0px`};

  border-radius: ${(props) => props.radius || 4}px;
  font-size: ${(props: any) => props.theme.fontSizes[props.size || 'md']}px;
  color: ${(props: any) => props.theme.colors[props.titleColor || 'white']};
  height: ${(props: any) => props.height || 30}px;
  width: ${(props: any) => (!!props.width ? `${props.width}px` : 'auto')};
  font-family: ${(props: any) =>
    props.theme.fontFamily[props.family || 'primary']};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid
    ${(props: any) => props.theme.colors[props.background || 'primary']}
    ${(props: any) => props.buttonShadowStyle};
  position: relative;
  overflow: hidden;
  transition: 0.5s ease-out;
  &::after {
    transition: 0.5s ease-out;

    background: ${(props: any) =>
      !!props.outline
        ? 'transparent'
        : props.theme.colors[props.background || 'primary']};
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0px;
    left: 0px;
  }
  &:hover {
    background: white;
    color: ${(props: any) => props.theme.colors[props.background || 'primary']};
    &::after {
      transform: translateY(-100%);
    }
    span {
      img {
        filter: contrast(0.5);
      }
    }
  }
  span {
    z-index: 11;
    position: relative;
    display: flex;
    align-items: center;
  }

  ${(props) => props.buttonStyle};
`

const StyleButtonShadow = styled.div<ButtonShadowProps>`
  background: ${(props: any) =>
    !!props.outline
      ? 'transparent'
      : props.theme.colors[props.background || 'primary100']};
  border-radius: ${(props) => props.radius || 4}px;
  padding: 5px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonShadow = ({ children, ...restProps }: ButtonShadowProps) => {
  return <StyleButtonShadow {...restProps}>{children}</StyleButtonShadow>
}
const Button = ({ title, children, loading, ...restProps }: ButtonProps) => {
  return (
    <StyleButton {...restProps}>
      {!!loading ? (
        <Spinner color="white" size={12} />
      ) : (
        <span>{title || children}</span>
      )}
    </StyleButton>
  )
}

export default Button
