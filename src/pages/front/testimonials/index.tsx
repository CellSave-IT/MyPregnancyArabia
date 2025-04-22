import { Container, Column, Image, Row } from '../../../components'
import Button, { ButtonShadow } from '../../../components/Button'
import JourneySection from '../../../section/JourneySection'
import {
  StyleLeftWrapper,
  StyleRigthWrapper,
  StyleRow,
  StyleTitle,
  StyleDesc,
  StyleGrid,
  StyleCard,
  StyleContentWrapper,
  StyleCardDesc,
  StyleCardTitle,
  StyleCardFooter,
  StyleRowMessage,
  StyleMessageButton,
} from './style'
import { useSelector } from 'react-redux'
import { Testimonial } from '../../../apis'
import { Select } from '../../../store'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import { useNavigate } from 'react-router-dom'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { useState } from 'react'
const Testimonials = () => {
  const navigate = useNavigate()
  const { data, pagination }: any = useSelector(Select.testimonials)
  const [params, setParams] = useState({
    pageSize: window.innerWidth < 767 ? 3 : 6,
    page: 1,
  })
  const fetchData = async (params: any, action: 'set' | 'append' = 'set') => {
    await Testimonial.get(params, action).catch(() => {})
  }
  useEffect(() => {
    fetchData(params)
  }, [])

  return (
    <>
      <Helmet>
        <title>Testinomial</title>
      </Helmet>
      <Column
        styleColumn="
        padding-bottom:80px;padding-top:80px;
        @media(max-width:1024px){
          padding:60px 0px;
        }
        @media(max-width:767px){
          padding:40px 0px;
        }
      "
      >
        <Container>
          <StyleRow>
            <StyleLeftWrapper>
              <ScrollAnimation
                animateIn="bounceInLeft"
                delay={400}
                animateOnce={true}
                style={{ position: 'sticky', top: 150 }}
              >
                <StyleTitle>What do our attendees say about us?</StyleTitle>
                <StyleDesc>
                  Curious about what other expecting parents thought of our My
                  Pregnancy Arabia events? Whether it's heartfelt testimonials
                  or practical advice, these authentic testimonials offer
                  invaluable perspectives to help you make the most of your
                  pregnancy experience.
                </StyleDesc>
                <StyleRowMessage>
                  <StyleMessageButton
                    onClick={() => {
                      navigate('/contact')
                    }}
                  >
                    Leave us a review
                    <TbSquareRoundedPlus size={24} />
                  </StyleMessageButton>
                </StyleRowMessage>
              </ScrollAnimation>
            </StyleLeftWrapper>
            <StyleRigthWrapper>
              <StyleGrid>
                {data?.map((item: any, index: number) => {
                  return (
                    <ScrollAnimation
                      animateIn={
                        index % 2 === 0 ? 'fadeInDownBig' : 'fadeInUpBig'
                      }
                      animateOnce={true}
                      delay={500}
                      key={index}
                    >
                      <StyleCard key={item?._id}>
                        <StyleContentWrapper>
                          <StyleCardDesc>{item.description}</StyleCardDesc>
                          <StyleCardFooter>
                            {/* <Image
                              src={`${process.env.APP_IMAGE_URL}${item.image}`}
                              styleImage={{
                                borderRadius: '50%',
                                width: 50,
                                height: 50,
                              }}
                            /> */}
                            <StyleCardTitle>{item.name}</StyleCardTitle>
                          </StyleCardFooter>
                        </StyleContentWrapper>
                      </StyleCard>
                    </ScrollAnimation>
                  )
                })}
              </StyleGrid>
              {params?.page < pagination?.totalPages && (
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
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
                            ...params,
                            pageSize: 2,
                            page: params?.page + 1,
                          }
                          fetchData(updateParams, 'append')
                          setParams(updateParams)
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
                </ScrollAnimation>
              )}
            </StyleRigthWrapper>
          </StyleRow>
        </Container>
      </Column>
      <ScrollAnimation animateIn="bounceInRight" delay={500} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default Testimonials
