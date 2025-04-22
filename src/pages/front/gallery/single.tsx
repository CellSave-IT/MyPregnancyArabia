import { useLocation, useParams } from 'react-router-dom'
import {
  EmailFillPrimarySvg,
  LinkdinPrimarySvg,
  WhatsAppPrimarySvg,
} from '../../../assets'
import { Column, Container, Row, Image } from '../../../components'
import {
  StyleEventDetailsTitle,
  StyleShareText,
  StyleContentWrapper,
  StyleGalleryGrid,
  StyleGalleryGridItem,
} from '../events/style'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { Gallery } from '../../../apis'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
const GalleryDetails = () => {
  const { state } = useLocation()
  const paramss: any = useParams()
  const navigate = useNavigate()
  const gallery: any = useSelector(Select.gallery)
  const [params, setParams] = useState({
    page: 1,
    pageSize: window.innerWidth < 767 ? 6 : 30,
  })
  const handlePageClick = async (page) => {
    const updateParams = { ...params, page: page?.selected + 1 }
    setParams(updateParams)
  }
  const fetchById = async () => {
    await Gallery.find(paramss?.id).catch(() => {
      navigate('/')
    })
  }

  useEffect(() => {
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
        <title>{gallery?.title}</title>
        <meta property="og:title" content={state?.title || gallery?.title} />
        <meta
          property="og:description"
          content={state?.description || gallery?.description}
        />
        <meta property="og:url" content={`${window.location}`} />
        <meta
          property="og:image"
          content={`${process.env.APP_IMAGE_URL}${state?.image || gallery?.image}`}
        />
      </Helmet>
      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={500}
          animateOnce={true}
        >
          <Row styleRow={{ justifyContent: 'space-between' }}>
            <StyleEventDetailsTitle type="primary">
              {state?.title || gallery?.title}
            </StyleEventDetailsTitle>
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
          <Column>
            <Column styleColumn={{ marginTop: 30 }}>
              <StyleContentWrapper
                type="primary"
                dangerouslySetInnerHTML={{
                  __html: state?.description || gallery?.description,
                }}
              />
            </Column>
          </Column>
          <PhotoProvider>
            {!!gallery?.images?.length && (
              <Column styleColumn={{ marginTop: 60 }}>
                <StyleGalleryGrid>
                  {(gallery?.images?.length > params?.pageSize
                    ? gallery?.images?.slice(
                        params?.page - 1 * params?.pageSize,
                        params?.pageSize,
                      )
                    : gallery?.images
                  )?.map((item, index) => {
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
                          height: 250px;
                          border-radius: 4px;
                          object-fit:cover;

                          @media(max-width:767px){
                            height:200px;
                            

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
        {!!gallery?.images?.length && (
          <Row styleRow="justify-content:center;margin-top:60px;">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={Math.ceil(gallery?.images?.length / params?.pageSize)}
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

export default GalleryDetails
