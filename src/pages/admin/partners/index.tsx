import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Partner } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
const AdminPartners = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const partners: any[] = useSelector(Select.partners)
  const navigate = useNavigate()
  const fetchData = async () => {
    setLoading(true)
    await Partner.get().catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await Partner.delete(id).catch(() => {})
  }
  useEffect(() => {
    if (!partners.length) {
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
      title: 'Logo',
      key: 'image',
      render: (item) => {
        return (
          <img width={100} src={`${process.env.APP_IMAGE_URL}${item.image}`} />
        )
      },
    },
    {
      title: 'Link',
      key: 'link',
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
              navigate(`/admin/partners/edit/${item._id}`, {
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
        title="Partners"
        buttonLink="/admin/partners/create"
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
        <DataTable columns={columns} data={partners} />
      </Column>
    </Column>
  )
}

export default AdminPartners
