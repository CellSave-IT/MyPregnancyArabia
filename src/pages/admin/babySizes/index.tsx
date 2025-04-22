import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { BabySize } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
const AdminBabySizes = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const babySizes: any[] = useSelector(Select.babySizes)
  const navigate = useNavigate()
  const fetchData = async () => {
    setLoading(true)
    await BabySize.get().catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await BabySize.delete(id).catch(() => {})
  }
  useEffect(() => {
    if (!babySizes.length) {
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
      title: 'Image',
      key: 'image',
      render: (item) => {
        return (
          <img width={100} src={`${process.env.APP_IMAGE_URL}${item.image}`} />
        )
      },
    },
    {
      title: 'Week',
      key: 'week',
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
              navigate(`/admin/babySizes/edit/${item._id}`, {
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
        title="Baby Sizes"
        buttonLink="/admin/babySizes/create"
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
        <DataTable columns={columns} data={babySizes} />
      </Column>
    </Column>
  )
}

export default AdminBabySizes
