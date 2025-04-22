import { Container } from '../../../components'
import JourneySection from '../../../section/JourneySection'
import GallerySection from '../../../section/GallerySection'
import { Column } from '../../../components'
import InnerPageHeader from '../../../section/InnerPageHeader'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <Column
        styleColumn="
        padding:80px 0px;
        @media(max-width:1024px){
          padding:60px 0px;
        }
        @media(max-width:767px){
          padding:40px 0px;
        }
        "
      >
        <Container>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={500}
            animateOnce={true}
          >
            <InnerPageHeader
              title="Our Gallery"
              description="From captured moments of laughter and learning to snapshots of cherished memories, explore the essence of our events and classes through vibrant images that reflect the beauty of pregnancy and parenthood."
            />
          </ScrollAnimation>
          <Column
            styleColumn={`
                  margin-top:60px;
                  @media(max-width:767px){
                    margin-top:30px;
                  }
          `}
          >
            <GallerySection />
          </Column>
        </Container>
      </Column>
      <JourneySection />
    </>
  )
}

export default Gallery
