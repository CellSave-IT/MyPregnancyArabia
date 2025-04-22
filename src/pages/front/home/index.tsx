import Banner from './Banner'
import AboutSection from '../../../section/AboutSection'
import BabySize from '../../../section/BabySizeSection'
import UpcomingEvents from './UpcomingEvents'
import CommunityHub from './CommunityHub'
import Testimonials from './Testimonials'
import Partners from './Partners'
import Faqs from './Faqs'
import { Image } from '../../../components'
import JourneySection from '../../../section/JourneySection'
import { MeditationJpg } from '../../../assets'
import Diaries from './Diaries'
import Gallery from './Gallery'
import ScrollAnimation from 'react-animate-on-scroll'
import { Helmet } from 'react-helmet'
import Modal from '../../../components/Modal'
import BabySizeForm from '../babySize/form'
import { useEffect, useState } from 'react'
import OtherImageSection from '../../../section/OtherImageSection'

const Home = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const isVisible = localStorage.getItem('fts-pregnancy-modal-visible')
    if (!isVisible) {
      setVisible(true)
      localStorage.setItem('fts-pregnancy-modal-visible', 'true')
    } else {
      setVisible(false)
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta property="og:title" content={'Home'} />
      </Helmet>
      <Banner />
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <AboutSection hasSpin />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <BabySize />
      </ScrollAnimation>
      <UpcomingEvents />
      <CommunityHub background={`secondary100`} />
      <Testimonials />
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <Partners />
      </ScrollAnimation>
      <Faqs />
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <Gallery />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <Diaries />
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="fadeInUpBig"
        animateOnce={true}
        className="yoga-img-wrapper"
      >
        <OtherImageSection />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInUpBig" animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
      <Modal
        onClose={() => {
          setVisible(false)
        }}
        visible={visible}
      >
        <BabySizeForm
          isModal
          onClose={() => {
            setVisible(false)
          }}
        />
      </Modal>
    </>
  )
}

export default Home
