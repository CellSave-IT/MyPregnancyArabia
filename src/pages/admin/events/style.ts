import styled from '@emotion/styled'
export const StyleInfoTitle = styled.h3`
  font-size: 21px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors.primary};
`

export const StyleImageItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
  column-gap: 20px;
`
export const StyleImageItem = styled.div`
  position: relative;
`

export const StyleBrowseLabel = styled.label<any>`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 16px;
  padding: 7px 25px;
  border-radius: 4px;
`
export const StyleBrowseInput = styled.input<any>`
  display: none;
`

export const StyleActiveCard = styled.div`
  background: ${(props: any) => props.theme.colors.primary};
  padding: 5px 7px;
  font-size: 12px;
  color: ${(props: any) => props.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 50px;
`
export const StyleMakeActiveButton = styled.button<any>`
  background: ${(props: any) => props.theme.colors.primary400};
  font-size: 12px;
  height: 25px;
  border-radius: 4px;
  border: none;
  color: white;
`
