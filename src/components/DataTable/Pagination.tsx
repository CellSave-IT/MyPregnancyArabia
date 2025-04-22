import { Button, Column, Row } from '../../components'
import { theme } from '../../utils'
interface PaginationProps {
  totalPages: number
  perPage?: number
  handleOnClick: (pageNumber: number) => void
  activePage: number
}
const Pagination = ({
  totalPages,
  handleOnClick,
  activePage,
}: PaginationProps) => {
  return (
    <Column styleColumn={{ marginBottom: '15', marginTop: '15px' }}>
      {totalPages > 1 && (
        <Row styleRow={{ columnGap: 10, marginLeft: 'auto' }}>
          {activePage > 1 && (
            <Button
              title="Prev"
              onClick={() => {
                handleOnClick(activePage - 1)
              }}
              height={40}
            />
          )}
          {Array.from(
            { length: totalPages > 5 ? 5 : totalPages },
            (_, index) => index + 1,
          ).map((item: any, index: number) => {
            return (
              <Column
                key={index}
                styleColumn={{
                  width: '40px',
                  cursor: 'pointer',
                  color: 'white',
                  background:
                    activePage === index + 1
                      ? theme.colors.primary
                      : theme.colors.primary400,
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 10,
                  paddingBottom: 10,
                  height: 20,
                  borderRadius: 4,
                }}
                onClick={() => {
                  handleOnClick(index + 1)
                }}
              >
                {index + 1}
              </Column>
            )
          })}
          {activePage > 5 && (
            <Column
              styleColumn={{
                width: '40px',
                cursor: 'pointer',
                color: 'white',
                background: theme.colors.primary,
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                height: 20,
                borderRadius: 4,
              }}
            >
              {activePage}
            </Column>
          )}
          {totalPages > 5 && (
            <Column styleColumn={{ width: 80, height: 80 }}>
              <select
                style={{
                  height: 40,
                  borderRadius: 4,
                  border: '1px solid #ddd',
                }}
                onChange={(e) => {
                  handleOnClick(Number(e.target.value))
                }}
              >
                <option value="">Select</option>
                {Array.from(
                  { length: totalPages - 5 },
                  (_, index) => index + 1,
                ).map((item, index) => (
                  <option key={index} value={index + 6}>
                    {index + 6}
                  </option>
                ))}
              </select>
            </Column>
          )}
          {activePage < totalPages && (
            <Button
              height={40}
              title="Next"
              onClick={() => {
                handleOnClick(activePage + 1)
              }}
            />
          )}
        </Row>
      )}
    </Column>
  )
}

export default Pagination
