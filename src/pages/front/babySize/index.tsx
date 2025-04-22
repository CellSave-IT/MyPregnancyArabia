import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { BabySize } from '../../../apis'
import { useEffect, useState } from 'react'
import { Column, Container, Row, Image, Button } from '../../../components'
import BabySizeForm from './form'
import {
  StyleDesc,
  StyleTitle,
  styleLeftWrapper,
  styleRightWrapper,
  styleWrapper,
  StyleSizeBg,
  StyleSliderTitle,
} from './style'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

const BabySizes = () => {
  const babySizes: any[] = useSelector(Select.babySizes)
  const [activeItem, setActiveItem] = useState<any>({})
  const [tempActiveItem, setActiveTempItem] = useState<any>({})
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 300 },
      items: 4,
      slidesToSlide: 1,
    },
  }
  const fetchData = async () => {
    await BabySize.get()
      .then((res) => {
        if (res?.data?.length) {
          setActiveItem(res?.data[0])
          setActiveTempItem(res?.data[0])
        }
      })
      .catch(() => {})
  }
  useEffect(() => {
    if (!babySizes?.length) {
      fetchData()
    } else {
      setActiveItem(babySizes[0])
      setActiveTempItem(babySizes[0])
    }
  }, [])
  return (
    <Column>
      <Helmet>
        <title>Compare Baby Size</title>
      </Helmet>
      <Column
        styleColumn={`
        width: 100%;
        position: relative;
        overflow: hidden;
        height: 850px;
        @media(max-width:1024px){
          height:auto;
        }
      `}
      >
        <Image
          src={`${process.env.APP_IMAGE_URL}${activeItem?.image}`}
          styleImage="
            height:850px;object-fit:cover;
            @media(max-width:1024px){
                height:auto;
            }
          "
        />
        <Column
          styleColumn={`
            background: rgba(0,0,0,0.5);
            height: 100%;
            width: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 100;
            @media(max-width:1024px){
              position: static;
              background:none;
            }
          `}
        >
          <Container>
            <Row styleRow={styleWrapper}>
              <Column styleColumn={styleLeftWrapper}>
                <ScrollAnimation
                  animateIn="bounceInLeft"
                  delay={400}
                  animateOnce={true}
                >
                  <StyleTitle>Week {activeItem?.week}</StyleTitle>
                  <StyleDesc>{activeItem?.description}</StyleDesc>
                  <Row
                    styleRow={`
                    align-items:center;
                    column-gap:10px;
                    @media(max-width:1024px){
                      flex-direction:column;
                      row-gap:10px;
                      align-items:flex-start;
                    }
                  `}
                  >
                    <StyleSizeBg>
                      <StyleSliderTitle>
                        It's Week&nbsp;&nbsp; |
                      </StyleSliderTitle>
                      {!!babySizes?.length && (
                        <Carousel
                          arrows={true}
                          showDots={false}
                          autoPlay={false}
                          autoPlaySpeed={8000}
                          infinite={false}
                          responsive={responsive}
                          className="baby-size-slider"
                        >
                          {babySizes.map((item) => (
                            <StyleSliderTitle
                              style={{ cursor: 'pointer', padding: '0px 10px' }}
                              key={item._id}
                              isActive={tempActiveItem?.week === item?.week}
                              onClick={() => {
                                setActiveTempItem(item)
                              }}
                            >
                              {item.week}
                            </StyleSliderTitle>
                          ))}
                        </Carousel>
                      )}
                    </StyleSizeBg>
                    <Button
                      width={200}
                      height={50}
                      radius={12}
                      onClick={() => {
                        setActiveItem(tempActiveItem)
                      }}
                      buttonStyle="margin-top:30px;
                    @media (max-width:1024px){
                      margin-top:20px;
                      height:40px;
                      font-size:12px;
                      width:150px;
                      border-radius:8px;
                    }
                  ;"
                    >
                      How big is my baby?
                    </Button>
                  </Row>
                </ScrollAnimation>
              </Column>

              <Column styleColumn={styleRightWrapper}>
                <ScrollAnimation
                  animateIn="bounceInRight"
                  delay={400}
                  animateOnce={true}
                >
                  <BabySizeForm />
                </ScrollAnimation>
              </Column>
            </Row>
          </Container>
        </Column>
      </Column>
    </Column>
  )
}

export default BabySizes
