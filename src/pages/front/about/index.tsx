import AboutSection from '../../../section/AboutSection'
import JourneySection from '../../../section/JourneySection'
import { Image, Row, Column, Container } from '../../../components'
import {
  MeditationSvg,
  AboutHeading,
  MeditationJpg,
  AboutHeadingPng,
} from '../../../assets'
import {
  StyleAboutCard,
  StyleAboutContentWrapper,
  StyleAboutHeader,
  StyleAboutTitle,
  StyleCardTitle,
  StyledCardDesc,
  styleAboutColumnWrapper,
  styleAboutRowWrapper,
} from './style'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-scroll-parallax'
import { Helmet } from 'react-helmet'
import OtherImageSection from '../../../section/OtherImageSection'
import { useEffect, useState } from 'react'
const About = () => {
  const width = window.innerWidth
  const opacity: any =
    width <= 640 ? [0, 1, 'easeInOut'] : [0.3, 1, 'easeInOut']
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const aboutSectionTwo = aboutInfos?.find(
    (item) => item?.key === 'aboutSectionTwo',
  )
  const aboutSectionThree = aboutInfos?.find(
    (item) => item?.key === 'aboutSectionThree',
  )
  const aboutSectionFour = aboutInfos?.find(
    (item) => item?.key === 'aboutSectionFour',
  )
  const [isVisible, setIsVisible] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  useEffect(() => {
    const checkVisibility = () => {
      const element = document.getElementById('parallax-element')
      if (element) {
        const rect = element.getBoundingClientRect()
        setIsVisible(rect.top >= 0 && rect.bottom <= window.innerHeight + 200)
      }
      const element2 = document.getElementById('parallax-element2')
      if (element2) {
        const rect = element2.getBoundingClientRect()
        setIsVisible2(rect.top >= 0 && rect.bottom <= window.innerHeight + 200)
      }
      const element3 = document.getElementById('parallax-element3')
      if (element3) {
        const rect = element3.getBoundingClientRect()
        setIsVisible3(rect.top >= 0 && rect.bottom <= window.innerHeight + 200)
      }
    }

    window.addEventListener('scroll', checkVisibility)
    checkVisibility()

    return () => {
      window.removeEventListener('scroll', checkVisibility)
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta property="og:title" content={'Home'} />
      </Helmet>
      <StyleAboutHeader>
        <Image
          src={AboutHeadingPng}
          styleImage="
            width:100%;height:100%;filter:brightness(0.7);height:394px;object-fit:cover;
            @media(max-width:1024px){
              height:300px;
            }
            @media (max-width: 767px) {
              height: 200px;
            }
          "
        />
        <StyleAboutContentWrapper>
          <Container>
            <Column
              styleColumn={`width:60%;justify-content:center;height:100%;
                @media(max-width:1024px){
                  width:100%;
                }
              `}
            >
              <ScrollAnimation
                animateIn="bounceInLeft"
                delay={500}
                animateOnce={true}
              >
                <StyleAboutTitle>
                  Welcome to <br></br> My Pregnancy Arabia!
                </StyleAboutTitle>
              </ScrollAnimation>
            </Column>
          </Container>
        </StyleAboutContentWrapper>
      </StyleAboutHeader>
      <ScrollAnimation animateIn="bounceInRight" delay={500} animateOnce={true}>
        <AboutSection />
      </ScrollAnimation>
      {!!aboutSectionTwo && (
        <Parallax
          id="parallax-element"
          opacity={isVisible ? 1 : opacity}
          translateY={[0, 0]}
        >
          <StyleAboutCard background="secondary500">
            <Container>
              <Row styleRow={styleAboutRowWrapper}>
                <Column styleColumn={styleAboutColumnWrapper}>
                  <StyleCardTitle titleColor="white">
                    {aboutSectionTwo?.title}
                  </StyleCardTitle>
                  <br></br>
                  <StyledCardDesc descColor="white">
                    {aboutSectionTwo?.value}
                  </StyledCardDesc>
                </Column>
                <Column
                  styleColumn={'width:25%;@media(max-width:767px){width:100%;}'}
                >
                  <Image
                    styleImage={`width:100%;height:350px;border-radius:8px;object-fit:cover;
                  `}
                    src={`${process.env.APP_IMAGE_URL}${aboutSectionTwo?.image}`}
                  />
                </Column>
              </Row>
            </Container>
          </StyleAboutCard>
        </Parallax>
      )}
      {!!aboutSectionThree && (
        <Parallax
          id="parallax-element2"
          opacity={isVisible2 ? 1 : opacity}
          translateY={[0, 0]}
        >
          <StyleAboutCard background="white">
            <Container>
              <Row styleRow={styleAboutRowWrapper}>
                <Column styleColumn={styleAboutColumnWrapper}>
                  <StyleCardTitle titleColor="primary">
                    {aboutSectionThree?.title}
                  </StyleCardTitle>
                  <br></br>
                  <StyledCardDesc descColor="primary">
                    {aboutSectionThree?.value}
                  </StyledCardDesc>
                </Column>
                <Column
                  styleColumn={'width:25%;@media(max-width:767px){width:100%;}'}
                >
                  <Image
                    styleImage={`width:100%;height:350px;border-radius:8px;object-fit:cover;
                   
                  `}
                    src={`${process.env.APP_IMAGE_URL}${aboutSectionThree?.image}`}
                  />
                </Column>
              </Row>
            </Container>
          </StyleAboutCard>
        </Parallax>
      )}
      {!!aboutSectionFour && (
        <Parallax
          id="parallax-element3"
          opacity={isVisible3 ? 1 : opacity}
          translateY={[0, 0]}
        >
          <StyleAboutCard background="secondary400">
            <Container>
              <Row styleRow={styleAboutRowWrapper}>
                <Column styleColumn={styleAboutColumnWrapper}>
                  <StyleCardTitle titleColor="secondary">
                    {aboutSectionFour?.title}
                  </StyleCardTitle>
                  <br></br>
                  <StyledCardDesc descColor="secondary">
                    {aboutSectionFour?.value}
                  </StyledCardDesc>
                </Column>
                <Column
                  styleColumn={'width:25%;@media(max-width:767px){width:100%;}'}
                >
                  <Image
                    styleImage={`width:100%;height:350px;border-radius:8px;object-fit:cover;`}
                    src={`${process.env.APP_IMAGE_URL}${aboutSectionFour?.image}`}
                  />
                </Column>
              </Row>
            </Container>
          </StyleAboutCard>
        </Parallax>
      )}
      <ScrollAnimation
        className="yoga-img-wrapper"
        animateIn="bounceInLeft"
        delay={500}
        animateOnce={true}
      >
        <OtherImageSection />
      </ScrollAnimation>
      <ScrollAnimation animateIn="bounceInLeft" delay={500} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default About
