import styled from '@emotion/styled'

interface TBodyProps {
  tbodyBackground?: any
}
export const StyleTableWrapper = styled.div`
  display: block;
  width: 100%;
`
export const StyleTable = styled.table<any>`
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.04);
  border-collapse: collapse;
  border-radius: 17px;
  max-width: 100%;
  overflow-x: auto;
  width: 100%;
  @media (max-width: 950px) {
    width: fix-content;
    display: block;
  }
`
export const StyleTableHead = styled.thead``
export const StyleTableRow = styled.tr<any>`
  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.colors.inputPlaceholderColor};
    transition: 0.5s;
  }
`
export const StyleTableHeader = styled.th<any>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSizes['md']}px;
  color: ${(props) => props.theme.colors.white};
  border-bottom: ${(props) => `1px solid ${props.theme.colors.blueGrey}`};
  font-weight: 800;
  text-align: left;
  height: 30px;
  padding-left: 15px;
  padding-right: 10px;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid rgba(255, 255, 255, 0.3);
`
export const StyleTableBody = styled.tbody<TBodyProps>``
export const StyleTableBodyText = styled.td<any>`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSizes['sm']}px;
  color: ${(props) => props.tdBackground || props.theme.colors.black};
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 10px;
  white-space: nowrap;
  border: 1px solid #f0f0f0;
`

export const StyleTableFooter = styled.tfoot<any>`
  height: 35px;
  background: ${(props) => props.theme.colors.blueGrey};
`
