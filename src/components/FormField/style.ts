import styled from '@emotion/styled'
export const StyleLabel = styled.label`
  font-size: 16px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.primary};
`
export const StyleInput = styled.input<any>`
  height: 40px;
  border-radius: 4px;
  border: 1px solid ${(props: any) => props.theme.colors.primary400};
  font-size: 14px;
  text-indent: 5px;
  outline: none;
  font-family: ${(props: any) => props.theme.fontFamily.primary};

  &::placeholder {
    font-size: 14px;
    color: ${(props: any) => props.theme.colors.primary400};
    font-weight: 300;
  }
  ${(props) => props.styleForm}
`
export const StyleTextArea = styled.textarea<any>`
  border: 1px solid ${(props: any) => props.theme.colors.primary400};
  border-radius: 4px;
  outline: none;
  padding: 10px;
  font-family: ${(props: any) => props.theme.fontFamily.primary};

  &::placeholder {
    font-size: 14px;
    color: ${(props: any) => props.theme.colors.primary400};
    font-weight: 300;
  }
  ${(props) => props.styleForm}
`
export const StyleSelect = styled.select<any>`
  border: 1px solid ${(props: any) => props.theme.colors.primary400};
  border-radius: 4px;
  outline: none;
  font-size: 14px;
  height: 41px;
  font-family: ${(props: any) => props.theme.fontFamily.primary};

  ${(props) => props.styleForm}
`
export const StyleOption = styled.option``
export const StyleError = styled.p`
  color: ${(props: any) => props.theme.colors.danger};
  font-size: 14px;
`
