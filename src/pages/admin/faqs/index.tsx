import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Faqs } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
const AdminFaqs = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const faqs: any[] = useSelector(Select.faqs)
  const navigate = useNavigate()
  const fetchData = async () => {
    setLoading(true)
    await Faqs.get().catch(() => {})
    setLoading(false)
  }
  const deleteData = async (id: string) => {
    await Faqs.delete(id).catch(() => {})
  }
  useEffect(() => {
    if (!faqs.length) {
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
      title: 'Action',
      key: 'action',
      render: (item: any) => {
        return (
          <Actions
            onClickDelete={() => {
              deleteData(item._id)
            }}
            onClickEdit={() => {
              navigate(`/admin/faqs/edit/${item._id}`, {
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
        title="Faqs"
        buttonLink="/admin/faqs/create"
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
        <DataTable columns={columns} data={faqs} />
      </Column>
    </Column>
  )
}

export default AdminFaqs
