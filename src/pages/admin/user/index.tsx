import { Column } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { Faqs } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import DataTable from '../../../components/DataTable'
import Actions from '../../../components/Actions'
import { useNavigate } from 'react-router-dom'
import { Auth } from '../../../apis'
const AdminUser = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const users: any[] = useSelector(Select.users)
  const navigate = useNavigate()
  const fetchData = async () => {
    setLoading(true)
    await Auth.get().catch(() => {})
    setLoading(false)
  }

  useEffect(() => {
    if (!users.length) {
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
      title: 'Name',
      key: 'name',
    },
    {
      title: 'Username',
      key: 'username',
    },
    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: any) => {
        return (
          <Actions
            isDelete={false}
            onClickEdit={() => {
              navigate(`/admin/users/edit/${item._id}`, {
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
        title="Users"
        buttonLink="/admin/users/create"
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
        <DataTable columns={columns} data={users} />
      </Column>
    </Column>
  )
}

export default AdminUser
