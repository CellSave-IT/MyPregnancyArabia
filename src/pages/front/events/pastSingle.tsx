import { useLocation, useParams } from 'react-router-dom'
import {
  EmailFillPrimarySvg,
  LinkdinPrimarySvg,
  WhatsAppPrimarySvg,
} from '../../../assets'
import { Column, Container, Row, Image } from '../../../components'
import {
  StyleEventDetailsTitle,
  StyleEventInfoText,
  StyleShareText,
  StyleContentWrapper,
  StyleGalleryGrid,
  StyleGalleryGridItem,
} from './style'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { EventGallery, Event } from '../../../apis'
import moment from 'moment'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { removeHtmlTags } from '../../../utils/helpers'
const PastEventDetails = () => {
  const { state } = useLocation()
  const paramss: any = useParams()
  const navigate = useNavigate()
  const { data, pagination }: any = useSelector(Select.eventGalleries)
  const event: any = useSelector(Select.event)
  const [params, setParams] = useState({
    page: 1,
    pageSize: window.innerWidth > 767 ? 20 : 4,
  })
  const fetchGalleries = async (params) => {
    await EventGallery.get(params, paramss?.id).catch(() => {})
  }
  const handlePageClick = async (page) => {
    const updateParams = { ...params, page: page?.selected + 1 }

    fetchGalleries(params)
    setParams(updateParams)
  }
  const fetchById = async () => {
    await Event.find(paramss?.id).catch(() => {
      navigate('/')
    })
  }

  useEffect(() => {
    fetchGalleries({
      ...params,
    })
    fetchById()
  }, [])
  return (
    <Column
      styleColumn="
    margin:80px 0px;
    @media(max-width:1024px){
      margin:60px 0px;
      
    }
    @media(max-width:767px){
      margin:40px 0px;
    }
  "
    >
      <Helmet>
        <title>{event?.title}</title>
        <meta property="og:title" content={state?.title || event?.title} />
        <meta
          property="og:description"
          content={state?.description || event?.description}
        />
        <meta property="og:url" content={`${window.location}`} />
        <meta
          property="og:image"
          content={`${process.env.APP_IMAGE_URL}${state?.image || event?.image}`}
        />
      </Helmet>
      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={500}
          animateOnce={true}
        >
          <Row styleRow={{ justifyContent: 'space-between' }}>
            <Column styleColumn={`column-gap:20px`}>
              <StyleEventDetailsTitle type="primary">
                {state?.title || event?.title}
              </StyleEventDetailsTitle>
              <Column
                styleColumn={`
                margin-top:30px;
                @media(max-width:767px){
                  margin-top:15px;
                }
              `}
              >
                <StyleEventInfoText type="primary">
                  {moment(state?.date || event?.date).format('MMM DD, YYYY')}{' '}
                  {moment(state?.startTime || event?.startTime, 'HH:mm').format(
                    'h:mm a',
                  )}
                </StyleEventInfoText>
                <StyleEventInfoText type="primary">
                  at {state?.location || event?.location}
                </StyleEventInfoText>
              </Column>
            </Column>
            <Column>
              <Column
                className="share-info single-share-social"
                styleColumn={`
              row-gap:10px;
              
              @media(max-width:767px){
                  div{
                    width:30px;
                    height:30px;
                  }
                
                img{
                  width:15px;
                }
              }
            `}
              >
                <StyleShareText>Share</StyleShareText>
                <Row
                  styleRow={{
                    border: '1px solid #3AB8B7',
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
                    border: '1px solid #3AB8B7',
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
                    border: `1px solid #3AB8B7`,
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
          {!!event?.description &&
            removeHtmlTags(event?.description)?.length > 1 && (
              <Column>
                <Column styleColumn={{ marginTop: 30 }}>
                  <StyleContentWrapper
                    type="primary"
                    dangerouslySetInnerHTML={{
                      __html: state?.description || event?.description,
                    }}
                  />
                </Column>
              </Column>
            )}

          <PhotoProvider>
            {!!data?.length && (
              <Column
                styleColumn={`
                margin-top:60px;
                @media(max-width:1024px){
                  margin-top:40px;
                }
                @media(max-width:767px){
                  margin-top:30px;
                }
              `}
              >
                <StyleGalleryGrid>
                  {data?.map((item, index) => {
                    return (
                      <StyleGalleryGridItem key={item?._id}>
                        <ScrollAnimation
                          animateIn="fadeInUpBig"
                          animateOnce={true}
                          delay={500 + index * 5}
                        >
                          <PhotoView
                            src={`${process.env.APP_IMAGE_URL}${item.image}`}
                          >
                            <Image
                              src={`${process.env.APP_IMAGE_URL}${item.image}`}
                              styleImage={`
                            width: 100%;
                            height: 215px;
                            border-radius: 4px;
                            object-fit:cover;
                            
                            @media(max-width:767px){
                              height:180px;
                              object-fit:cover;

                            }
                          `}
                            />
                          </PhotoView>
                        </ScrollAnimation>
                      </StyleGalleryGridItem>
                    )
                  })}
                </StyleGalleryGrid>
              </Column>
            )}
          </PhotoProvider>
        </ScrollAnimation>
        {!!data?.length && pagination?.totalPages > 1 && (
          <Row
            styleRow="
            justify-content:center;margin-top:60px;
            @media(max-width:1024px){
              margin-top:40px;
            }
            @media(max-width:767px){
              margin-top:30px;
            }
        "
          >
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pagination?.totalPages}
              previousLabel="Prev"
              renderOnZeroPageCount={null}
              className="pagination-wrapper"
            />
          </Row>
        )}
      </Container>
    </Column>
  )
}

export default PastEventDetails
