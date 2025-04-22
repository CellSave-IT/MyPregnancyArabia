import { StyleCard, StyleGrid, StyleOverlay, StyleOverlayText } from './style'
import { Image, Row, Column, Button } from '../../components'
import { useEffect, useState } from 'react'
import { Event } from '../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../store'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import { ArrowLeftLightSvg } from '../../assets'
import ScrollAnimation from 'react-animate-on-scroll'

const GallerySection = () => {
  const { data, pagination }: any = useSelector(Select.pastEvents)
  const location = useLocation()

  const [params, setParams] = useState({
    page: 1,
    pageSize: location.pathname === '/gallery' ? 30 : 8,
  })
  const navigate = useNavigate()
  const fetchData = async (params) => {
    await Event.getPast({
      page: 1,
      pageSize: location.pathname === '/gallery' ? 30 : 8,
      type: 'Past',
    })
  }
  const handlePageClick = async (page) => {
    const updateParams = { ...params, page: params.page + 1 }
    fetchData(params)
    setParams(updateParams)
  }

  useEffect(() => {
    fetchData(params)
  }, [])

  return (
    <>
      <StyleGrid>
        {data.map((item, index) => {
          const styleCard =
            index === 0
              ? 'grid-column: 1/ span 2;grid-row:1 / span 2;'
              : index === 5
                ? 'grid-column: 1/ span 2'
                : ''
          const height = index == 0 ? 525 : 250

          return (
            <StyleCard
              key={item?._id}
              styleCard={window.innerWidth > 767 ? styleCard : ''}
              onClick={() => {
                navigate(`/events/past/${item?._id}`, { state: item })
              }}
            >
              <ScrollAnimation
                animateIn="fadeInUpBig"
                animateOnce={true}
                delay={100}
                className="gallery-section"
                style={{ overflow: 'hidden', height: height, borderRadius: 8 }}
              >
                <Image
                  key={index}
                  src={`${process.env.APP_IMAGE_URL}${item.image}`}
                  styleImage={`
                  width:100%;height:${height}px;aspect-ratio: 4 /5;border-radius:8px;object-fit:cover;filter:brightness(70%);transition:all 0.5s;
                  @media(max-width:1024px){
                    height:300px;
                  }
                  @media(max-width:767px){
                    height:200px;
                  }
                `}
                />
                <StyleOverlay
                  className="card-overlay"
                  style={{ height: '100%', borderRadius: 8 }}
                >
                  <Column
                    styleColumn={{
                      padding: 20,
                      height: '100%',
                      position: 'relative',
                      width: '100%',
                    }}
                  >
                    <StyleOverlayText>{item?.title}</StyleOverlayText>
                    <Row
                      styleRow={{ position: 'absolute', top: 20, right: 20 }}
                    >
                      <Button
                        background="secondary"
                        height={50}
                        radius={10}
                        buttonStyle="
                        display:flex;align-items:center;justify-content:center;
                        @media(max-width:767px){
                          height:40px;
                          width:40px;
                          img{
                            width:30px;
                          }
                        }
                      "
                        onClick={() => {
                          navigate(`/events/past/${item?._id}`, { state: item })
                        }}
                      >
                        <Image src={ArrowLeftLightSvg} />
                      </Button>
                    </Row>
                  </Column>
                </StyleOverlay>
              </ScrollAnimation>
            </StyleCard>
          )
        })}
      </StyleGrid>
      {location?.pathname === '/gallery' && pagination?.totalPage > 1 && (
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
            className="pagination-wrapper secondary"
          />
        </Row>
      )}
    </>
  )
}

export default GallerySection
