import {
  BabySize,
  BabySizeJpg,
  CalendarBlackSvg,
  WindowBlackSvg,
  BabySizeMobilePng,
} from '../../../assets'
import { Button, Column, Container, Image, Row } from '../../../components'
import { useEffect, useState } from 'react'
import { ButtonShadow } from '../../../components/Button'
import InnerPageHeader from '../../../section/InnerPageHeader'
import JourneySection from '../../../section/JourneySection'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { Blog } from '../../../apis'
import {
  StyleGrid,
  StyleGridInfo,
  StyleGridInfoText,
  StyleGridItem,
  StyleGridItemWrapper,
  StyleGridLink,
  StyleSectionHeaderWrapper,
  StyleSectionTitle,
  styleLeftItem,
  styleRow,
  styleRightItem,
  StyleBigBlogTitle,
  stylebadyInfoWrapper,
  StyleBabyInfoTitle,
} from './style'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Diaries = () => {
  const { data, pagination }: any = useSelector(Select.diaries)
  const { data: topBlogs }: any = useSelector(Select.topBlogs)
  const navigate = useNavigate()
  const [params, setParams] = useState<any>({
    pageSize: window?.innerWidth < 767 ? 5 : 11,
    page: 1,
  })
  const fetchData = async (params, action: 'set' | 'append' = 'set') => {
    await Blog.getFront(params, action).catch(() => {})
  }
  const fetchTopBlogs = async () => {
    await Blog.top().catch(() => {})
  }
  useEffect(() => {
    fetchData(params, 'set')
    fetchTopBlogs()
  }, [])

  return (
    <>
      <Helmet>
        <title>Diaries</title>
      </Helmet>
      <Column
        styleColumn="
        margin-top:80px;
        @media(max-width:1024px){
          margin-top:60px;
        }
        @media(max-width:767px){
          margin-top:40px;
        }
      "
      >
        <Container>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={400}
            animateOnce={true}
          >
            <InnerPageHeader
              type="primary"
              title="Digital Diary"
              description="Discover our weekly Pregnancy Blogs—a trusted resource for expert advice, personal stories, and essential tips on motherhood. Join our community, share experiences, and navigate this incredible journey with confidence. Let's nurture life, together with My Pregnancy Arabia."
            />
          </ScrollAnimation>
        </Container>
        <Container>
          <Row styleRow={styleRow}>
            {!!data[0] && (
              <Column styleColumn={styleLeftItem}>
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  delay={400}
                  animateOnce={true}
                >
                  <Image
                    src={`${process.env.APP_IMAGE_URL}${data[0].image}`}
                    height={350}
                    styleImage={`width:100%;object-fit:cover;border-radius:12px;`}
                  />
                  <Row
                    styleRow={`
                    column-gap: 30px;
                    margin-top: 20px;
                    margin-bottom: 10px;
                    @media(max-width:640px){
                      justify-content:space-between;
                    }
                    `}
                  >
                    <Row styleRow={{ columnGap: 5, alignItems: 'center' }}>
                      <Image src={CalendarBlackSvg} width={15} />
                      <StyleGridInfoText>
                        {moment(data[0]?.createdAt).format('MMM')} -{' '}
                        {moment(data[0]?.createdAt).format('YYYY')}
                      </StyleGridInfoText>
                    </Row>
                    <Row styleRow={{ columnGap: 5, alignItems: 'center' }}>
                      <Image src={WindowBlackSvg} width={15} />
                      <StyleGridInfoText>{data[0].tag}</StyleGridInfoText>
                    </Row>
                  </Row>
                  <StyleBigBlogTitle
                    onClick={() => {
                      navigate(`/diaries/${data[0]?._id}`, { state: data[0] })
                    }}
                  >
                    {data[0]?.title}
                  </StyleBigBlogTitle>
                </ScrollAnimation>
              </Column>
            )}

            <Column styleColumn={styleRightItem}>
              <ScrollAnimation
                animateIn="bounceInRight"
                delay={400}
                animateOnce={true}
              >
                <StyleSectionHeaderWrapper style={{ marginBottom: 30 }}>
                  <StyleSectionTitle>Top Reads</StyleSectionTitle>
                </StyleSectionHeaderWrapper>
                <Column
                  styleColumn={`row-gap: 30px;@media(max-width:767px){
                  row-gap:20px;
                }`}
                >
                  {topBlogs?.map((item: any) => {
                    return (
                      <StyleGridItemWrapper key={item?._id}>
                        <StyleGridInfo className="top-reads-grid-info">
                          <Row
                            styleRow={{ columnGap: 5, alignItems: 'center' }}
                          >
                            <Image src={CalendarBlackSvg} width={15} />
                            <StyleGridInfoText>
                              {moment(item.createdAt).format('MMM')} -{' '}
                              {moment(item.createdAt).format('YYYY')}
                            </StyleGridInfoText>
                          </Row>
                          <Row
                            styleRow={{ columnGap: 5, alignItems: 'center' }}
                          >
                            <Image src={WindowBlackSvg} width={15} />
                            <StyleGridInfoText>{item.tag}</StyleGridInfoText>
                          </Row>
                        </StyleGridInfo>
                        <StyleGridLink
                          onClick={() => {
                            navigate(`/diaries/${item?._id}`, { state: item })
                          }}
                        >
                          {item.title}
                        </StyleGridLink>
                      </StyleGridItemWrapper>
                    )
                  })}
                </Column>
              </ScrollAnimation>
            </Column>
          </Row>
        </Container>
        <Column
          styleColumn="
                margin-top: 60px; position: relative;
                cursor: pointer;
                @media(max-width:1024px){
                  margin-top:30px;
                  padding:0px 0px;
                }
             "
          onClick={() => {
            navigate(`/baby-size`)
          }}
        >
          <Container style={{ position: 'relative' }}>
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={400}
              animateOnce={true}
            >
              <Image
                src={BabySizeJpg}
                styleImage={`
                  width:100%;
                  cursor:pointer;
                  @media (max-width:1024px){
                      display: none;
                  }
                `}
              />
              {window?.innerWidth < 1024 && (
                <Image
                  src={BabySizeMobilePng}
                  styleImage={`
                        width:100%;
                        cursor:pointer;
                        
                      `}
                />
              )}
              <Column
                styleColumn={`
                width:50%;
                margin-left:auto;
                position:absolute;
                right:0px;
                bottom:80px;
                  @media(max-width:1300px){
                    bottom:60px;
                  }
                  @media(max-width:1024px){
                    width:100%;
                    align-items:center;
                  }
              `}
              >
                <Button
                  radius={30}
                  buttonStyle="
                    width:110px;
                    span{
                      width:100%;
                      display:flex;
                      justify-content:space-between;
                      margin-left:25px;
                    }
                  "
                  background={'pink'}
                  onClick={() => {
                    navigate(`/baby-size`)
                  }}
                >
                  Try{' '}
                  <IoIosArrowRoundForward
                    size={35}
                    style={{ marginLeft: 'auto' }}
                  />
                </Button>
              </Column>
            </ScrollAnimation>
          </Container>
        </Column>
      </Column>
      {!!data?.length && (
        <Column
          styleColumn={`padding:80px 0px; @media (max-width: 1024px) {
          padding: 60px 0px;
        }
        @media (max-width: 767px) {
          padding: 30px 0px;
  
        }`}
        >
          <Container>
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={600}
              animateOnce={true}
            >
              <StyleSectionHeaderWrapper>
                <StyleSectionTitle className="latest-title">
                  The Latest
                </StyleSectionTitle>
              </StyleSectionHeaderWrapper>
            </ScrollAnimation>
            <StyleGrid>
              {data?.map((item: any, index: number) => {
                return (
                  <ScrollAnimation
                    animateIn="fadeInUpBig"
                    animateOnce={true}
                    delay={500}
                    key={index}
                  >
                    <StyleGridItem
                      key={index}
                      styleGridItem={
                        index === 4
                          ? `grid-column: 1 / 3`
                          : index === 5
                            ? `grid-column: 3 / 5`
                            : ``
                      }
                    >
                      <StyleGridItemWrapper>
                        <Column
                          styleColumn={`overflow:hidden;  border-radius:10px;`}
                        >
                          <Image
                            className="blog-image"
                            onClick={() => {
                              navigate(`/diaries/${item?._id}`, { state: item })
                            }}
                            src={`${process.env.APP_IMAGE_URL}${item.image}`}
                            styleImage="
                            width: 100%;
                              height: 250px;
                              border-radius: 10px;
                              object-fit: cover;
                              transition: 0.5s;
                              @media(max-width:767px){
                                height:200px;
                              }
                            "
                          />
                        </Column>
                        <StyleGridInfo>
                          <Row
                            styleRow={{ columnGap: 5, alignItems: 'center' }}
                          >
                            <Image src={CalendarBlackSvg} width={15} />
                            <StyleGridInfoText>
                              {moment(item.createdAt).format('MMM')} -{' '}
                              {moment(item.createdAt).format('YYYY')}
                            </StyleGridInfoText>
                          </Row>
                          <Row
                            styleRow={{ columnGap: 5, alignItems: 'center' }}
                          >
                            <Image src={WindowBlackSvg} width={15} />
                            <StyleGridInfoText>{item.tag}</StyleGridInfoText>
                          </Row>
                        </StyleGridInfo>
                        <StyleGridLink
                          onClick={() => {
                            navigate(`/diaries/${item?._id}`, { state: item })
                          }}
                        >
                          {item.title}
                        </StyleGridLink>
                      </StyleGridItemWrapper>
                    </StyleGridItem>
                  </ScrollAnimation>
                )
              })}
            </StyleGrid>
            {params?.page < pagination?.totalPages && (
              <Row
                styleRow={`margin-top:60px;justify-content:center;@media(max-width:1024px){
                margin-top:40px;
              }`}
              >
                <ButtonShadow radius={12}>
                  <Button
                    buttonStyle="font-size:16px;@media(max-width:1024px){
                      font-size:14px;
                      height:45px;
                    }"
                    width={120}
                    height={45}
                    radius={12}
                    onClick={() => {
                      const updateParams = {
                        ...params,

                        page: params.page + 1,
                      }
                      fetchData({ ...updateParams, pageSize: 4 }, 'append')
                      setParams(updateParams)
                    }}
                  >
                    Load More
                  </Button>
                </ButtonShadow>
              </Row>
            )}
          </Container>
        </Column>
      )}
      <ScrollAnimation animateIn="bounceInRight" delay={400} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default Diaries
