import {
  ArrowLeftLightSvg,
  CalendarSvg,
  ClockSvg,
  LocationPng,
} from '../../../../assets'
import { Button, Container, Image } from '../../../../components'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
  StyleSection,
  StyleSectionHeader,
  StyleLeftSectionHeader,
  StyleRightSectionHeader,
  StyleSectionHeaderTitle,
  StyleSectionHeaderDesc,
  StyleItems,
  StyleItem,
  StyleItemInfoWrapper,
  StyleItemImageWrapper,
  StyleItemTitle,
  StyleItemInfo,
  StyleItemDesc,
  StyleEventDateInfoWrapper,
  StyleEventDateInfoItem,
  StyleEventDateInfo,
  StyleRegisterButtonWrapper,
  StyleRegisterButton,
} from './style'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Select } from '../../../../store'
import { Event } from '../../../../apis'
import { useEffect } from 'react'
import { helpers } from '../../../../utils'
import moment from 'moment'
import ScrollAnimation from 'react-animate-on-scroll'
import { TbSquareRoundedPlus } from 'react-icons/tb'
const UpcomingEvents = () => {
  const navigate = useNavigate()
  const { data }: any = useSelector(Select.upcomingEvents)
  const fetchData = async () => {
    await Event.getUpcoming(
      {
        pageSize: 3,
        page: 1,
        type: 'Upcoming',
      },
      'set',
    ).catch(() => {})
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {!!data?.length && (
        <StyleSection>
          <Container>
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={500}
              animateOnce={true}
            >
              <StyleSectionHeader>
                <StyleLeftSectionHeader>
                  <StyleSectionHeaderTitle>
                    Upcoming Events
                  </StyleSectionHeaderTitle>
                  <StyleSectionHeaderDesc>
                    Be apart of our upcoming pregnancy events and join a
                    community dedicated to celebrating the beautiful journey of
                    motherhood.
                  </StyleSectionHeaderDesc>
                </StyleLeftSectionHeader>
                <StyleRightSectionHeader>
                  <Button
                    background="secondary"
                    height={50}
                    radius={10}
                    buttonStyle="
                    display:flex;align-items:center;justify-content:center;
                    @media(max-width:767px){
                      height:30px;
                      width:30px;
                      img{
                        width:20px;
                      }
                    }
                  "
                    onClick={() => {
                      navigate('/events')
                    }}
                  >
                    <Image src={ArrowLeftLightSvg} />
                  </Button>
                </StyleRightSectionHeader>
              </StyleSectionHeader>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="bounceInRight"
              delay={800}
              animateOnce={true}
            >
              <StyleItems>
                <Carousel
                  arrows={false}
                  showDots={!!data?.legnth && data?.length > 1 ? true : false}
                  autoPlay={!!data?.legnth && data?.length > 1 ? true : false}
                  autoPlaySpeed={8000}
                  infinite={!!data?.legnth && data?.length > 1 ? true : false}
                  responsive={responsive}
                >
                  {data?.map((item: any, index: number) => {
                    const itemInfos = [
                      {
                        title: `${moment(item?.startTime, 'HH:mm').format('h:mm a')} - ${moment(item?.endTime, 'HH:mm').format('h:mm a')}`,
                        image: ClockSvg,
                      },
                      {
                        title: item.location,
                        image: LocationPng,
                      },
                      {
                        title: moment(item.date).format('DD MMM - YYYY'),
                        image: CalendarSvg,
                      },
                    ]
                    return (
                      <StyleItem key={index}>
                        <StyleItemInfoWrapper>
                          <StyleItemInfo>
                            <StyleItemTitle
                              onClick={() => {
                                navigate(`/events/upcoming/${item._id}`, {
                                  state: item,
                                })
                              }}
                            >
                              {' '}
                              {item?.title}
                            </StyleItemTitle>
                            <StyleItemDesc>
                              {helpers
                                .removeHtmlTags(item.description)
                                .slice(0, 100)}
                              ...
                            </StyleItemDesc>
                            <StyleEventDateInfoWrapper>
                              {itemInfos?.map((itemInfo: any, i: number) => {
                                return (
                                  <StyleEventDateInfoItem key={itemInfo.title}>
                                    <Image
                                      src={itemInfo.image}
                                      styleImage={`
                                      height:20px;
                                      width:20px;
                                       @media(max-width:767px){
                                        width: 20px;
                                        height:20px;
                                       }
                                    `}
                                    />
                                    <StyleEventDateInfo>
                                      {itemInfo.title}
                                    </StyleEventDateInfo>
                                  </StyleEventDateInfoItem>
                                )
                              })}
                            </StyleEventDateInfoWrapper>
                            <StyleRegisterButtonWrapper>
                              <StyleRegisterButton
                                onClick={() => {
                                  navigate(`/events/upcoming/${item._id}`, {
                                    state: item,
                                  })
                                }}
                              >
                                Register Now
                                <TbSquareRoundedPlus size={45} />
                              </StyleRegisterButton>
                            </StyleRegisterButtonWrapper>
                          </StyleItemInfo>
                        </StyleItemInfoWrapper>
                        <StyleItemImageWrapper>
                          <Image
                            styleImage={`
                              width:100%;
                              height:100%;
                              border-radius:16px;
                              object-fit:cover;
                              @media(max-width:1024px){
                                height:auto;
                                object-fit:cover;
                                width:100%;
                                border-radius:16px !important;
                              }
                              @media(max-width:767px){
                                height:auto;
                              }
                            `}
                            src={`${process.env.APP_IMAGE_URL}${item.image}`}
                            alt={'Image'}
                          />
                        </StyleItemImageWrapper>
                      </StyleItem>
                    )
                  })}
                </Carousel>
              </StyleItems>
            </ScrollAnimation>
          </Container>
        </StyleSection>
      )}
    </>
  )
}

export default UpcomingEvents
