import { Outlet } from 'react-router-dom'
import Column from '../../Column'

const AdminPublicLayout = () => {
  return (
    <Column>
      <Outlet />
    </Column>
  )
}

export default AdminPublicLayout
