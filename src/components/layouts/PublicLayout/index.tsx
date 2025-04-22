import { Outlet, useLocation } from 'react-router-dom'
import Column from '../../Column'
import PublicHeader from './Header'
import PublicFooter from './Footer'
import { useEffect } from 'react'
import { GeneralSetting } from '../../../apis'
import { store, Actions, Select } from '../../../store'
import { useSelector } from 'react-redux'

const PublicLayout = () => {
  const activeEvent: any = useSelector(Select.activeEvent)
  const contactInfos: any[] = useSelector(Select.contactInfos)
  const socialInfos: any[] = useSelector(Select.socialInfos)
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const { pathname } = useLocation()
  const fetchActiveEvents = async () => {
    await GeneralSetting.getByKey('activeEvent')
      .then((res: any) => {
        if (!!res?.data?.key) {
          store.dispatch(Actions.set('activeEvent', res))
        }
      })
      .catch(() => {})
  }
  const fetchContactInfos = async () => {
    await GeneralSetting.getByGroup('contactInfo')
      .then((res) => {
        if (!!res?.data?.length) {
          store.dispatch(Actions.set('contactInfos', res))
        }
      })
      .catch(() => {})
  }
  const fetchSocialInfos = async () => {
    await GeneralSetting.getByGroup('social')
      .then((res) => {
        if (!!res?.data?.length) {
          store.dispatch(Actions.set('socialInfos', res))
        }
      })
      .catch(() => {})
  }
  const fetchAboutInfos = async () => {
    await GeneralSetting.getByGroup('about')
      .then((res) => {
        if (!!res?.data?.length) {
          store.dispatch(Actions.set('aboutInfos', res))
        }
      })
      .catch(() => {})
  }
  useEffect(() => {
    if (!activeEvent?.key) {
      fetchActiveEvents()
    }
    if (!contactInfos.length) {
      fetchContactInfos()
    }
    if (!socialInfos.length) {
      fetchSocialInfos()
    }
    if (!aboutInfos?.length) {
      fetchAboutInfos()
    }
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <PublicHeader />
      <Column>
        <Outlet />
      </Column>
      <PublicFooter />
    </>
  )
}

export default PublicLayout
