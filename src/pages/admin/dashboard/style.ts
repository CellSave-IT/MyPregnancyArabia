import styled from '@emotion/styled'

export const StyleGrid = styled.div`
  display: grid;
  row-gap: 20px;
  column-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`
export const StyleGridItem = styled.div`
  background: ${(props: any) => props.theme.colors.primary100};
  border-radius: 8px;
`

export const StyleGridItemWrapper = styled.div`
  padding: 15px 20px;
`
