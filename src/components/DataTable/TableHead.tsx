import { TableHeaderProps } from './interface'
import { StyleTableHead, StyleTableRow, StyleTableHeader } from './style'
interface TableHeadProps {
  items: TableHeaderProps[]
}
const TableHead = ({ items }: TableHeadProps) => {
  return (
    <StyleTableHead>
      <StyleTableRow>
        {items?.map((item: any) => (
          <StyleTableHeader key={item?.key}>{item?.title}</StyleTableHeader>
        ))}
      </StyleTableRow>
    </StyleTableHead>
  )
}

export default TableHead
