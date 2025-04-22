import { useEffect, useState } from 'react'

import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Button, Column, Row } from '../../../components'
import { Gallery } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'

const AdminGalleries = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.galleries)
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination?.currentPage) : 1,
  })
  const navigate = useNavigate()
  const fetchData = async (params: any) => {
    setLoading(true)
    await Gallery.get(params).catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await Gallery.delete(id).catch(() => {})
  }

  useEffect(() => {
    if (!data.length) {
      fetchData(params)
    }
  }, [])

  const columns: any[] = [
    {
      title: 'S.No',
      key: 'sno',
      render: (item: any, index: number) => {
        return index + (pagination.currentPage - 1) * params.pageSize
      },
    },
    {
      title: 'Title',
      key: 'title',
      render: (item) => {
        return (
          <Column
            styleColumn={`
          width:150px;
          white-space:break-spaces;
          `}
          >
            {item?.title}
          </Column>
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: any) => {
        return (
          <Row styleRow={`column-gap:10px`}>
            <Actions
              onClickDelete={() => {
                deleteData(item._id)
              }}
              onClickEdit={() => {
                navigate(`/admin/galleries/edit/${item._id}`, {
                  state: item,
                })
              }}
            />
          </Row>
        )
      },
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader
        title="Galleries"
        buttonLink="/admin/galleries/create"
        buttonTitle="Create"
      />
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

export default AdminGalleries
