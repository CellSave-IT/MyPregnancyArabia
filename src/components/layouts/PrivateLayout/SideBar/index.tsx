import Column from '../../../Column'
import Row from '../../../Row'
import { StyleLink, StyleSidBarWrapper, StyleTitle } from '../style'
import { useState } from 'react'
import { FaChevronDown, FaRegCircle } from 'react-icons/fa'
import { BiLogOutCircle } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
const path = window.location.pathname
const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState<any>(null)
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('fts-my-pregnancy-token')
    navigate('/admin')
  }
  const items = [
    {
      title: 'Dashboard',
      path: '/admin/dashboard',
    },
    {
      title: 'Community Categories',
      children: [
        {
          title: 'Add',
          path: '/admin/community/categories/create',
        },
        {
          title: 'List',
          path: '/admin/community/categories',
        },
      ],
    },
    {
      title: 'Communities',
      children: [
        {
          title: 'Add',
          path: '/admin/communities/create',
        },
        {
          title: 'List',
          path: '/admin/communities',
        },
      ],
    },
    {
      title: 'Diaries',
      children: [
        {
          title: 'Add',
          path: '/admin/diaries/create',
        },
        {
          title: 'List',
          path: '/admin/diaries',
        },
      ],
    },
    {
      title: 'Events',
      children: [
        {
          title: 'Add',
          path: '/admin/events/create',
        },
        {
          title: 'List',
          path: '/admin/events',
        },
        // {
        //   title: 'Registrations',
        //   path: '/admin/events/registrations',
        // },
      ],
    },
    // {
    //   title: 'Galleries',
    //   children: [
    //     {
    //       title: 'Add',
    //       path: '/admin/galleries/create',
    //     },
    //     {
    //       title: 'List',
    //       path: '/admin/galleries',
    //     },
    //   ],
    // },
    {
      title: 'Baby Size',
      children: [
        {
          title: 'Add',
          path: '/admin/babySizes/create',
        },
        {
          title: 'List',
          path: '/admin/babySizes',
        },
      ],
    },
    {
      title: 'Partners',
      children: [
        {
          title: 'Add',
          path: '/admin/partners/create',
        },
        {
          title: 'List',
          path: '/admin/partners',
        },
      ],
    },
    {
      title: 'Testimonials',
      children: [
        {
          title: 'Add',
          path: '/admin/testimonials/create',
        },
        {
          title: 'List',
          path: '/admin/testimonials',
        },
      ],
    },
    {
      title: 'Faqs',
      children: [
        {
          title: 'Add',
          path: '/admin/faqs/create',
        },
        {
          title: 'List',
          path: '/admin/faqs',
        },
      ],
    },

    {
      title: 'Enquiry',
      path: '/admin/enquiry',
    },
    {
      title: 'Downloads',
      path: '/admin/downloads',
    },
    {
      title: 'Subscribes',
      path: '/admin/subscribes',
    },
    {
      title: 'User',
      children: [
        {
          title: 'Add',
          path: '/admin/users/create',
        },
        {
          title: 'List',
          path: '/admin/users',
        },
      ],
    },
    {
      title: 'Settings',
      children: [
        {
          title: 'About Setting',
          path: '/admin/settings/about',
        },
        {
          title: 'Contact Setting',
          path: '/admin/settings/contact',
        },
        {
          title: 'Social Media Settings',
          path: '/admin/settings/social',
        },
        {
          title: 'Banner Settings',
          path: '/admin/settings/banner',
        },
        {
          title: 'Payment Settings',
          path: '/admin/settings/payment',
        },
        {
          title: 'Baby Size File',
          path: '/admin/settings/baby-file',
        },
      ],
    },
  ]
  const MenuItem = ({ item, parentIndex }: any) => {
    const isActive = path === item.path
    const handleSidebar = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(null)
      } else {
        setActiveIndex(index)
      }
    }
    return (
      <Column styleColumn={`padding:0px 20px;row-gap:10px;`}>
        <Row
          styleRow="align-items:center;column-gap:10px"
          onClick={() => {
            !item.path && handleSidebar(parentIndex)
          }}
        >
          <FaRegCircle size={14} color={`white`} />
          {!!item.path ? (
            <StyleLink to={item.path}>{item.title}</StyleLink>
          ) : (
            <>
              <StyleTitle
                style={{
                  cursor: 'pointer',
                }}
              >
                {item.title}
              </StyleTitle>
            </>
          )}
          {!!item?.children?.length && (
            <Column styleColumn="margin-left:auto">
              <FaChevronDown color="white" />
            </Column>
          )}
        </Row>
        {!!item?.children?.length && parentIndex === activeIndex && (
          <>
            {item.children.map((item: any, index: number) => (
              <MenuItem item={item} parentIndex={parentIndex} key={index} />
            ))}
          </>
        )}
      </Column>
    )
  }
  return (
    <StyleSidBarWrapper>
      <Row styleRow="justify-content:center;">
        <StyleTitle
          style={{
            textTransform: 'uppercase',
            fontSize: 30,
            marginTop: 30,
          }}
        >
          My Pregnancy
        </StyleTitle>
      </Row>
      <Column styleColumn="row-gap:10px;margin-top:60px;">
        {items?.map((item: any, index: number) => (
          <MenuItem item={item} key={index} parentIndex={index} />
        ))}
      </Column>
      <Row
        onClick={handleLogout}
        styleRow="align-items:center;column-gap:10px;margin-top:60px;margin-left:20px;"
      >
        <BiLogOutCircle size={28} color="#fff" />
        <StyleTitle style={{ cursor: 'pointer' }}>Logout</StyleTitle>
      </Row>
    </StyleSidBarWrapper>
  )
}

export default SideBar
