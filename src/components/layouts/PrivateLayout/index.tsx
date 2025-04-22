import { Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../../hooks'
import { Navigate } from 'react-router-dom'
import AdminHeader from './Header'
import { useEffect } from 'react'
import SideBar from './SideBar'
import {
  StyleCard,
  StyleContainer,
  StyleContentWrapper,
  StyleSidBarWrapper,
  StyleWrapper,
} from './style'
const PrivateLayout = () => {
  const auth = useAuth()
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <>
      {!auth ? (
        <Navigate to="/admin" />
      ) : (
        <StyleWrapper>
          <StyleSidBarWrapper>
            <SideBar />
          </StyleSidBarWrapper>
          <StyleContentWrapper>
            <AdminHeader />
            <StyleContainer>
              <StyleCard>
                <Outlet />
              </StyleCard>
            </StyleContainer>
          </StyleContentWrapper>
        </StyleWrapper>
      )}
    </>
  )
}

export default PrivateLayout
