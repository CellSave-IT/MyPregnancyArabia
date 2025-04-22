import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { CommunityCategory } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
const AdminCommunitiesCategories = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const categories: any[] = useSelector(Select.communityCategories)
  const navigate = useNavigate()
  const fetchData = async () => {
    setLoading(true)
    await CommunityCategory.get().catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await CommunityCategory.delete(id).catch(() => {})
  }
  useEffect(() => {
    if (!categories.length) {
      fetchData()
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
      title: 'Title',
      key: 'title',
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
              navigate(`/admin/community/categories/edit/${item._id}`, {
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
        title="Community Categories"
        buttonLink="/admin/community/categories/create"
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
        <DataTable columns={columns} data={categories} />
      </Column>
    </Column>
  )
}

export default AdminCommunitiesCategories
