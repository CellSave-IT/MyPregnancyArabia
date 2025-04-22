import { Column, Container, Row } from '../../../../components'
import GallerySection from '../../../../section/GallerySection'
import styled from '@emotion/styled'
import Button, { ButtonShadow } from '../../../../components/Button'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

export const StyleHeading = styled.h3`
  color: ${(props: any) => props.theme.colors.secondary};
  color: ${(props: any) => props.theme.colors.secondary};
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`

const Gallery = () => {
  const navigate = useNavigate()

  return (
    <Column
      styleColumn="margin-top:80px;
    @media(max-width:1024px){
      marging-top:60px;
    }
    @media(max-width:767px){
      margin-top:30px;
    }"
    >
      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={400}
          animateOnce={true}
        >
          <Row
            styleRow="
          justify-content:space-between;align-items:center;margin-bottom:60px;
          @media(max-width:767px){
            margin-bottom:30px;
          }
        "
          >
            <StyleHeading>Gallery</StyleHeading>
            <ButtonShadow background={`secondary100`} radius={12}>
              <Button
                onClick={() => {
                  navigate('/gallery')
                }}
                background={`secondary`}
                height={40}
                width={110}
                title="Load More"
                radius={12}
                buttonStyle="
                  @media(max-width:767px){
                    font-size:12px;
                  }
                "
              />
            </ButtonShadow>
          </Row>
        </ScrollAnimation>
        <GallerySection />
      </Container>
    </Column>
  )
}

export default Gallery
