import {
  StyleLiWrapper,
  StyleLink,
  StyleNavWrapper,
  StyleUlWrapper,
  StyleHeaderButtonsWrapper,
  StyleDropdownWrapper,
  StyleNavText,
  StyleDropdownItem,
  StyleMenuBarWrapper,
} from './style'
import Button, { ButtonShadow } from '../../../Button'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaChevronDown } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Column from '../../../Column'
import Row from '../../../Row'

const PublicMenu = () => {
  const navigate = useNavigate()
  const location: any = useLocation()
  const [bar, setBar] = useState<boolean>(false)
  const [dropdown, setDropdown] = useState(false)
  const [lang, setLang] = useState('Eng')
  const items = [
    {
      title: 'About Us',
      path: '/about',
    },

    {
      title: 'Events',
      path: '/events',
    },
    {
      title: 'Testimonials',
      path: '/testimonials',
    },
    {
      title: 'Gallery',
      path: '/gallery',
    },
    {
      title: 'FAQs',
      path: '/faqs',
    },
    {
      title: 'Resources',
      children: [
        {
          title: 'Community Hub',
          path: '/communities',
        },
        {
          title: 'Digital Diary',
          path: '/diaries',
        },
      ],
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ]
  const buttons: any = [
    {
      title: 'Join Community',
      onClick: () => {
        window.open(
          'https://chat.whatsapp.com/IBay9ErqcwrHL52C91nMis',
          '_blank',
        )
      },
      background: 'secondary',
      shadowBackground: 'secondary100',
      size: 'md',
      radius: 12,
      height: 50,
    },
    {
      title: 'Registration',
      onClick: () => {
        navigate(`/events`)
      },
      shadowBackground: 'primary100',
      size: 'md',
      radius: 12,
      height: 50,
    },
  ]
  useEffect(() => {
    setBar(false)
  }, [location.pathname])
  return (
    <>
      <Row
        styleRow={`
        align-items:center;
        column-gap:20px;
        display: none;
        @media(max-width:800px){
          display: flex;
        }
      `}
      >
        <ButtonShadow background={'secondary400'} radius={8}>
          <StyleLink
            style={{
              color: '#fff',
              fontSize: 14,
              background: '#C9A9D1',
              padding: '10px 15px',
              borderRadius: 8,
            }}
            to={'/events'}
          >
            Registration
          </StyleLink>
        </ButtonShadow>

        <StyleMenuBarWrapper
          onClick={() => {
            setBar(!bar)
          }}
        >
          <Button width={40} height={40}>
            <FaBars />
          </Button>
        </StyleMenuBarWrapper>
      </Row>

      <StyleNavWrapper active={bar.toString()}>
        <StyleUlWrapper>
          {items?.map((item, index) => {
            const otherActive =
              location?.pathname === '/communities' ||
              location?.pathname === '/diaries'
                ? true
                : false
            const active: boolean = item?.path === location?.pathname

            return (
              <StyleLiWrapper
                active={
                  !!otherActive && index === 5
                    ? otherActive.toString()
                    : active.toString()
                }
                key={item.title}
              >
                {!!item?.path ? (
                  <StyleLink active={active.toString()} to={item.path}>
                    {item.title}
                  </StyleLink>
                ) : (
                  <>
                    <StyleNavText
                      active={otherActive.toString()}
                      onClick={() => {
                        if (window.innerWidth <= 800) {
                          setDropdown(!dropdown)
                        }
                      }}
                    >
                      {item.title}
                      <FaChevronDown size={14} />
                    </StyleNavText>
                    {window.innerWidth <= 800 ? (
                      <>
                        {!!dropdown ? (
                          <StyleDropdownWrapper>
                            {item?.children?.map((child, j) => {
                              return (
                                <StyleDropdownItem key={j}>
                                  <StyleLink to={child.path}>
                                    {child.title}
                                  </StyleLink>
                                </StyleDropdownItem>
                              )
                            })}
                          </StyleDropdownWrapper>
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <StyleDropdownWrapper>
                        {item?.children?.map((child, j) => {
                          return (
                            <StyleDropdownItem key={j}>
                              <StyleLink to={child.path}>
                                {child.title}
                              </StyleLink>
                            </StyleDropdownItem>
                          )
                        })}
                      </StyleDropdownWrapper>
                    )}
                  </>
                )}
              </StyleLiWrapper>
            )
          })}
          <StyleLiWrapper className="mb-nav">
            <StyleLink
              to={'https://chat.whatsapp.com/IBay9ErqcwrHL52C91nMis'}
              target="_blank"
            >
              Join Community
            </StyleLink>
          </StyleLiWrapper>
        </StyleUlWrapper>
        <StyleHeaderButtonsWrapper className="nav-buttons">
          {buttons?.map((button: any) => {
            const { shadowBackground, ...restButtonProps } = button
            return (
              <ButtonShadow
                key={restButtonProps.title}
                background={shadowBackground}
                radius={restButtonProps.radius}
              >
                <Button
                  {...restButtonProps}
                  buttonStyle="
                  padding:0px 25px;
                  font-weight:500;
                  @media (max-width: 1300px) {
                    padding:0px 15px;
                    height:45px;
                  }
                  @media (max-width: 1024px) {
                    padding:0px 10px;
                    height:40px;
                    font-size:10px;
                  }
                "
                />
              </ButtonShadow>
            )
          })}
          <Column
            styleColumn={`
                position:relative;justify-content:center;
                  &:hover{
                    .lang-drop{
                      display:block;
                    }
                  }
                  @media(max-width:800px){
                    background:#3AB8B7 !important;
                    padding:10px 15px !important;
                    display:none;
                    ul{
                      position:static !important;
                    }
                  }
            `}
          >
            <StyleNavText style={{ fontSize: 14 }}>
              {lang} <FaChevronDown size={14} />
            </StyleNavText>
            <StyleDropdownWrapper
              className="lang-drop"
              dropStyle="width:100px;"
            >
              <StyleDropdownItem
                onClick={() => {
                  if (lang === 'Eng') {
                    setLang('Ar')
                  } else {
                    setLang('Eng')
                  }
                }}
                style={{ width: '100%', color: 'white' }}
              >
                <Row styleRow={'padding:10px 15px;cursor:pointer;'}>
                  {lang === 'Eng' ? 'Ar' : 'Eng'}
                </Row>
              </StyleDropdownItem>
            </StyleDropdownWrapper>
          </Column>
        </StyleHeaderButtonsWrapper>
      </StyleNavWrapper>
    </>
  )
}

export default PublicMenu
