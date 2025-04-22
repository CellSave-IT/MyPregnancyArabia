import { Column, Container, Image, Row } from '../../../components'
import InnerPageHeader from '../../../section/InnerPageHeader'
import { MeditationJpg } from '../../../assets'
import JourneySection from '../../../section/JourneySection'
import EventSection from '../../../section/EventSection'
import Button, { ButtonShadow } from '../../../components/Button'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { Event } from '../../../apis'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

const Events = () => {
  const [upcomingParams, setUcomingParams] = useState<any>({
    page: 1,
    pageSize: window.innerWidth <= 640 ? 2 : 3,
    type: 'Upcoming',
  })
  const [pastParams, setPastParams] = useState({
    page: 1,
    pageSize: window.innerWidth <= 640 ? 2 : 3,
    type: 'Past',
  })
  const navigate = useNavigate()

  const { data: pastEvents, pagination: pastPagination }: any = useSelector(
    Select.pastEvents,
  )
  const { data: upcomingEvents, pagination: upcomingPagination }: any =
    useSelector(Select.upcomingEvents)
  const fetchPastEvents = async (params, action: 'set' | 'append') => {
    await Event.getPast(params, action).catch(() => {})
  }
  const fetchUpcomingEvents = async (params, action: 'set' | 'append') => {
    await Event.getUpcoming(params, action).catch(() => {})
  }
  useEffect(() => {
    if (!pastEvents.length) {
      fetchPastEvents(pastParams, 'set')
    }
    if (!upcomingEvents.length) {
      fetchUpcomingEvents(upcomingParams, 'set')
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <Column
        styleColumn="
        padding:80px 0px;
        @media(max-width:1024px){
          padding:60px 0px;
        }
        @media(max-width:767px){
          padding:30px 0px;
        }
      "
      >
        <Container>
          {!!upcomingEvents?.length && (
            <>
              <ScrollAnimation
                animateIn="bounceInLeft"
                delay={500}
                animateOnce={true}
              >
                <InnerPageHeader
                  styleDesc="width:60%;"
                  title="Upcoming Events"
                  description="Join us for our upcoming pregnancy events and become a part of a community committed to honoring the remarkable journey of motherhood."
                />
              </ScrollAnimation>
              <Column
                styleColumn={`margin-top:60px;
            @media(max-width:1024px){
              margin-top:40px;
            }
            @media(max-width:767px){
              margin-top:30px;
            }
          `}
              >
                <EventSection
                  theme={'secondary'}
                  buttonText="Register"
                  items={upcomingEvents}
                  handleRead={(item) => {
                    navigate(`/events/upcoming/${item?._id}`, { state: item })
                  }}
                />
                {upcomingParams?.page < upcomingPagination?.totalPages && (
                  <Row
                    styleRow="margin-top:60px;justify-content:center;
              @media(max-width:1024px){
                margin-top:40px;
              }
              @media(max-width:767px){
                margin-top:30px;
              }"
                  >
                    <ButtonShadow background={`secondary100`} radius={10}>
                      <Button
                        background={`secondary`}
                        radius={10}
                        height={50}
                        width={120}
                        onClick={() => {
                          const updateParams = {
                            ...upcomingParams,
                            page: upcomingParams?.page + 1,
                          }
                          fetchUpcomingEvents(updateParams, 'append')
                          setUcomingParams(updateParams)
                        }}
                        buttonStyle="
                    @media(max-width:767px){
                     height:40px;
                     font-size:12px;
                    }
                 "
                      >
                        Load More
                      </Button>
                    </ButtonShadow>
                  </Row>
                )}
              </Column>
            </>
          )}
          <Column
            styleColumn={
              !!upcomingEvents?.length
                ? `
            margin-top:80px;
           @media(max-width:1024px){
            margin-top:40px;
          }
          @media(max-width:767px){
            margin-top:30px;
          }`
                : ``
            }
          >
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={500}
              animateOnce={true}
            >
              <InnerPageHeader
                styleDesc="width:60%;"
                title="Past Events"
                type="primary"
                description="Have you attended one of our past events and wished to preserve the memories? Immerse yourself in the heartwarming moments, enlightening discussions, and nurturing experiences that made each gathering truly unforgettable."
              />
            </ScrollAnimation>
            <Column
              styleColumn={
                'margin-top:60px;@media(max-width:1024px){margin-top:40px;}@media(max-width:767px){margin-top:30px;}'
              }
            >
              <EventSection
                theme={'primary'}
                buttonText="Read More"
                items={pastEvents}
                handleRead={(item) => {
                  navigate(`/events/past/${item?._id}`, { state: item })
                }}
              />
            </Column>
            {pastParams?.page < pastPagination?.totalPages && (
              <Row
                styleRow="
                margin-top:60px;justify-content:center;
                @media(max-width:1024px){
                  margin-top:40px;
                }
                @media(max-width:767px){
                  margin-top:30px;
                }
              "
              >
                <ButtonShadow background={`secondary100`} radius={10}>
                  <Button
                    background={`primary`}
                    radius={10}
                    height={50}
                    width={120}
                    onClick={() => {
                      const updateParams = {
                        ...pastParams,
                        page: pastParams?.page + 1,
                      }
                      fetchPastEvents(updateParams, 'append')
                      setPastParams(updateParams)
                    }}
                    buttonStyle="
                       @media(max-width:767px){
                        height:40px;
                        font-size:12px;
                       }
                    "
                  >
                    Load More
                  </Button>
                </ButtonShadow>
              </Row>
            )}
          </Column>
        </Container>
      </Column>
      <ScrollAnimation
        animateIn="bounceInLeft"
        delay={500}
        animateOnce={true}
        className="yoga-img-wrapper"
      >
        <Image
          src={MeditationJpg}
          styleImage={`width:100%;height:394px;object-fit:cover;`}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" delay={500} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default Events
