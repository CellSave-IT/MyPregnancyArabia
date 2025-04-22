import { ReactNode } from 'react'
import { TableHeaderProps } from './interface'
import TableHeader from './TableHead'
import TableData from './TableData'
import { StyleTableWrapper, StyleTable, StyleTableFooter } from './style'
import Pagination from './Pagination'
interface PaginationProps {
  activePage: number
  totalPages: number
  perPage?: number
  handleOnClick: (pageNumber: number) => void
}
interface TableProps {
  data?: any[]
  columns: TableHeaderProps[]
  tbodyBackground?: string
  footer?: ReactNode
  onClickRow?: (item: any, e: any) => void
  onContextMenu?: (item: any, event: any) => void
  loading?: boolean
  paginationProps?: PaginationProps
}

const DataTable = ({
  data = [],
  columns,
  tbodyBackground,
  footer,
  onClickRow,
  onContextMenu,
  loading,
  paginationProps,
}: TableProps) => {
  return (
    <>
      <StyleTableWrapper>
        <StyleTable>
          <TableHeader items={columns} />
          {!!loading ? (
            <></>
          ) : (
            <TableData
              tbodyBackground={tbodyBackground}
              items={data}
              columns={columns}
              onClickRow={onClickRow}
              onContextMenu={onContextMenu}
            />
          )}
          {footer && <StyleTableFooter>{footer}</StyleTableFooter>}
        </StyleTable>
      </StyleTableWrapper>
      {!!paginationProps && <Pagination {...paginationProps} />}
    </>
  )
}

export default DataTable
