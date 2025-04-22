import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Subscribe } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
const AdminSubscribes = () => {
  const { data, pagination }: any = useSelector(Select.subscribes)
  const [loading, setLoading] = useState<boolean>(false)
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination?.currentPage) : 1,
  })

  const fetchData = async (params: any) => {
    setLoading(true)
    await Subscribe.get(params).catch(() => {})
    setLoading(false)
  }

  useEffect(() => {
    if (!data?.length) {
      fetchData(params)
    }
  }, [])
  const columns: any[] = [
    {
      title: 'S.No',
      key: 'sno',
      render: (item: any, index: number) => {
        return index
      },
    },
    {
      title: 'Email',
      key: 'email',
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader title="Subscribes" />
      <Column
        styleColumn={{
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <DataTable
          columns={columns}
          data={data}
          paginationProps={{
            totalPages: pagination.totalPages,
            perPage: params.pageSize,
            activePage: params.page,
            handleOnClick: (pageNumber: number) => {
              const updateParams = { ...params, page: pageNumber }
              setParams(updateParams)
              fetchData(updateParams)
            },
          }}
        />
      </Column>
    </Column>
  )
}

export default AdminSubscribes
