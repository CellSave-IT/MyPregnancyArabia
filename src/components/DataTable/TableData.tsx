import { TableHeaderProps } from './interface'
import { StyleTableBody, StyleTableRow, StyleTableBodyText } from './style'
interface TableDataProps {
  items?: any[]
  columns?: TableHeaderProps[]
  tbodyBackground?: string
  onClickRow?: (item: any, event: any) => void
  onContextMenu?: (item: any, event: any) => void
}
const TableData = ({
  items = [],
  columns = [],
  tbodyBackground,
  onClickRow,
  onContextMenu,
}: TableDataProps) => {
  return (
    <>
      <StyleTableBody tbodyBackground={tbodyBackground}>
        {!!items.length ? (
          <>
            {items?.map((item: any, index: number) => (
              <StyleTableRow
                key={index}
                onClick={(e: any) => {
                  onClickRow && onClickRow(item, e)
                }}
                onContextMenu={(e: any) => {
                  onContextMenu && onContextMenu(item, e)
                }}
              >
                {columns?.map((column: any, i: number) => (
                  <StyleTableBodyText key={i + 5}>
                    {column.render
                      ? column.render(item, index + 1 || 1)
                      : item[column.key]}
                  </StyleTableBodyText>
                ))}
              </StyleTableRow>
            ))}
          </>
        ) : (
          <StyleTableRow>
            <StyleTableBodyText
              colSpan={columns.length}
              style={{
                fontSize: 24,
                padding: '60px 0px',
                color: '#ddd',
                textAlign: 'center',
              }}
            >
              No data found
            </StyleTableBodyText>
          </StyleTableRow>
        )}
      </StyleTableBody>
    </>
  )
}

export default TableData
