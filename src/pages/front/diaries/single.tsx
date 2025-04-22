import { useLocation, useNavigate, useParams } from 'react-router-dom'
import {
  CalendarPrimarySvg,
  EmailFillPrimarySvg,
  LinkdinPrimarySvg,
  WhatsAppPrimarySvg,
  WindowSvg,
} from '../../../assets'
import { Column, Container, Row, Image } from '../../../components'
import { Blog } from '../../../apis'
import { Select } from '../../../store'
import BlogSection from '../../../section/BlogSection'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

import {
  StyleDetailsHeadingTitle,
  styleDetailsHeadingWrapper,
  styleDetailsLeftWrapper,
  styleDetailsRightWrapper,
  StyleDetailsHeadingInfoTitle,
  StyleShareText,
  StyleSuggestionHeadingTitle,
  StyleContentWrapper,
} from './style'
const DiaryDetails = () => {
  const { state } = useLocation()
  const params: any = useParams()
  const { data }: any = useSelector(Select.diarySuggestions)
  const diary: any = useSelector(Select.diary)
  const navigate = useNavigate()

  const fetchData = async () => {
    await Blog.getSuggested({
      page: 1,
      pageSize: 3,
      id: params?.id,
    }).catch(() => {})
  }
  const fetchById = async () => {
    await Blog.find(params?.id).catch(() => {
      navigate('/')
    })
  }
  const updateCount = async () => {
    await Blog.updateCount(params?.id).catch(() => {
      navigate('/')
    })
  }
  useEffect(() => {
    fetchById()
    fetchData()
    updateCount()
  }, [params._id])
  return (
    <Column
      styleColumn={`margin:80px 0px;
    @media (max-width: 1024px) {
      margin: 60px 0px;
    }
    @media (max-width: 767px) {
      margin: 40px 0px;
    }`}
    >
      <Helmet>
        <title>{diary?.title}</title>
        <meta property="og:title" content={state?.title || diary?.title} />
        <meta
          property="og:description"
          content={state?.description || diary?.description}
        />
        <meta property="og:url" content={`${window.location}`} />
        <meta
          property="og:image"
          content={`${process.env.APP_IMAGE_URL}${state?.image || diary?.image}`}
        />
      </Helmet>

      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={400}
          animateOnce={true}
        >
          <Row styleRow={styleDetailsHeadingWrapper}>
            <Column styleColumn={styleDetailsLeftWrapper}>
              <StyleDetailsHeadingTitle>
                {state?.title || diary?.title}
              </StyleDetailsHeadingTitle>
              <Row styleRow={{ columnGap: 30, marginTop: 10 }}>
                <Row styleRow={{ alignItems: 'center', columnGap: 5 }}>
                  <Image src={CalendarPrimarySvg} width={15} />
                  <StyleDetailsHeadingInfoTitle>
                    {moment(state?.createAt || diary?.createAt).format('MMM')} -
                    {moment(state?.createAt || diary?.createAt).format('YYYY')}
                  </StyleDetailsHeadingInfoTitle>
                </Row>
                <Row styleRow={{ alignItems: 'center', columnGap: 5 }}>
                  <Image src={WindowSvg} width={15} />
                  <StyleDetailsHeadingInfoTitle>
                    {state?.tag || diary?.tag}
                  </StyleDetailsHeadingInfoTitle>
                </Row>
              </Row>
            </Column>
            <Column styleColumn={styleDetailsRightWrapper}>
              <Column
                className="single-share-social"
                styleColumn={{ rowGap: 10 }}
              >
                <StyleShareText>Share</StyleShareText>
                <Row
                  styleRow={{
                    background: '#EDF7F5',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={EmailFillPrimarySvg} width={20} />
                </Row>
                <Row
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(
                      `${window.location}`,
                    )
                    const link = `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodedMessage}`
                    window.open(link, '_blank')
                  }}
                  styleRow={{
                    background: '#EDF7F5',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={LinkdinPrimarySvg} />
                </Row>
                <Row
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(
                      `${window.location}`,
                    )
                    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
                    window.open(whatsappUrl, '_blank')
                  }}
                  styleRow={{
                    background: '#EDF7F5',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={WhatsAppPrimarySvg} />
                </Row>
              </Column>
            </Column>
          </Row>
        </ScrollAnimation>
        <Column
          styleColumn={`margin:60px 0px;media(max-width:1024px){
          margin:40px 0px;
        }@media(max-width:767px){
          margin:30px 0px;
        }`}
        >
          <ScrollAnimation
            animateIn="bounceInRight"
            delay={400}
            animateOnce={true}
          >
            <Image
              src={`${process.env.APP_IMAGE_URL}${state?.image || diary?.image}`}
              styleImage={`
                width: 100%;
                border-radius: 12px;
                height: 550px;
                object-fit: cover;
                @media(max-width:1024px){
                  height:400px;
                }
              `}
            />
          </ScrollAnimation>
        </Column>
        <Column>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={400}
            animateOnce={true}
          >
            <StyleContentWrapper
              dangerouslySetInnerHTML={{
                __html: state?.description || diary?.description,
              }}
            />
          </ScrollAnimation>
        </Column>
        {!!data?.length && (
          <Column
            styleColumn={`margin-top:60px;
          @media (max-width: 1024px) {
            margin-top: 40px;
          }
          @media (max-width: 767px) {
            margin-top: 30px;
          }`}
          >
            <StyleSuggestionHeadingTitle>
              More from our Digital Diary
            </StyleSuggestionHeadingTitle>
            <BlogSection
              items={data}
              handleRead={(item) => {
                navigate(`/diaries/${item?._id}`, { state: item })
              }}
            />
          </Column>
        )}
      </Container>
    </Column>
  )
}

export default DiaryDetails
