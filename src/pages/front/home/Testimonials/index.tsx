import {
  StyleCard,
  StyleItem,
  StyleSection,
  StyleInfoHeader,
  StyleTitle,
  StyleDesc,
  StyleMessageButton,
  StyleRow,
  StyleButton,
} from './style'
import SectionHeader from '../../../../section/SectionHeader'
import { Container, Image, Row } from '../../../../components'
import { CoupleSvg, LeafSvg } from '../../../../assets'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { useSelector } from 'react-redux'
import { Testimonial } from '../../../../apis'
import { Select } from '../../../../store'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ScrollAnimation from 'react-animate-on-scroll'
import { TbSquareRoundedPlus } from 'react-icons/tb'

const Testimonials = () => {
  const { data }: any = useSelector(Select.testimonials)

  const navigate = useNavigate()
  const fetchData = async () => {
    await Testimonial.get({
      pageSize: 10,
      page: 1,
    }).catch(() => {})
  }
  useEffect(() => {
    fetchData()
  }, [])
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
  }
  const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
    const {
      carouselState: { currentSlide },
    } = rest
    return (
      <Row
        styleRow={`
        column-gap:10px;position:absolute;bottom:-90px;right:0px;
        @media(max-width:1024px){
          right:15px;
        }
      `}
      >
        <StyleButton
          disabled={currentSlide === 0 ? true : false}
          onClick={() => previous()}
        >
          <FaArrowLeft />
        </StyleButton>
        <StyleButton onClick={() => next()}>
          <FaArrowRight />
        </StyleButton>
      </Row>
    )
  }

  return (
    <StyleSection>
      <ScrollAnimation animateIn="bounceInLeft" delay={500} animateOnce={true}>
        <SectionHeader
          title="Testimonials"
          subTitle="Testimonial From Attendees During The Event"
          isButton
          onClick={() => {
            navigate('/testimonials')
          }}
        />
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInRight" delay={500} animateOnce={true}>
        <Container>
          <StyleCard>
            {!!data?.length && (
              <Carousel
                arrows={false}
                showDots={false}
                autoPlay={false}
                autoPlaySpeed={8000}
                infinite={true}
                responsive={responsive}
                renderButtonGroupOutside={true}
                customButtonGroup={<ButtonGroup />}
              >
                {data?.map((item) => {
                  return (
                    <StyleItem key={item?._id}>
                      <StyleInfoHeader>
                        {/* <Image
                          src={`${process.env.APP_IMAGE_URL}${item.image}`}
                          styleImage={{
                            borderRadius: '50%',
                            width: 50,
                            height: 50,
                          }}
                        /> */}
                        <StyleTitle>{item.name}</StyleTitle>
                      </StyleInfoHeader>
                      <StyleDesc>{item.description}</StyleDesc>
                    </StyleItem>
                  )
                })}
              </Carousel>
            )}
          </StyleCard>
          <StyleRow>
            <StyleMessageButton
              onClick={() => {
                navigate('/contact')
              }}
            >
              Leave us a review
              <TbSquareRoundedPlus size={24} />
            </StyleMessageButton>
          </StyleRow>
        </Container>
      </ScrollAnimation>
      <Image
        className="test-image"
        src={LeafSvg}
        styleImage={
          'position:absolute;top:0px;left:0px;width:250px;-webkit-animation: moverY 3s infinite alternate;animation: moverY 3s infinite alternate;'
        }
      />
      <Image
        className="test-image"
        src={CoupleSvg}
        styleImage={`position:absolute;bottom:80px;right:0px;height:90%; -webkit-animation: moverX 3s infinite alternate;
        animation: moverX 3s infinite alternate;`}
      />
    </StyleSection>
  )
}
export default Testimonials
