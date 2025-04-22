import { useEffect, useState } from 'react'

import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Column } from '../../../components'
import { Community } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'

const AdminCommunities = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.communities)
  const [params, setParams] = useState({
    pageSize: 10,
    page: !!pagination?.currentPage ? parseInt(pagination.currentPage) : 1,
  })
  const navigate = useNavigate()
  const fetchData = async (params: any) => {
    setLoading(true)
    await Community.get(params).catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await Community.delete(id).catch(() => {})
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
    },
    {
      title: 'Category',
      key: 'category',
      render: (item: any) => {
        return item?.categoryId?.title
      },
    },
    {
      title: 'Image',
      key: 'image',
      render: (item) => {
        return (
          <img width={100} src={`${process.env.APP_IMAGE_URL}${item.image}`} />
        )
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: any) => {
        return (
          <Actions
            onClickDelete={() => {
              deleteData(item._id)
            }}
            onClickEdit={() => {
              navigate(`/admin/communities/edit/${item._id}`, {
                state: item,
              })
            }}
          />
        )
      },
    },
  ]
  return (
    <Column>
      <AdminInnerPageHeader
        title="Communities"
        buttonLink="/admin/communities/create"
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

export default AdminCommunities
