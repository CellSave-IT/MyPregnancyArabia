import { Column, Container } from '../../../components'
import InnerPageHeader from '../../../section/InnerPageHeader'
import JourneySection from '../../../section/JourneySection'
import CommunityHub from '../home/CommunityHub'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

const Communities = () => {
  return (
    <>
      <Helmet>
        <title>Communities</title>
      </Helmet>
      <Column styleColumn={`margin-top:80px`}>
        <Container>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={400}
            animateOnce={true}
          >
            <InnerPageHeader
              title="Community Hub"
              description="Welcome to our comprehensive Pregnancy Guides Hub, your ultimate destination for navigating every step of your incredible journey to motherhood. Explore our curated collection of expertly crafted guides, tailored to support and empower you through each trimester and beyond."
            />
          </ScrollAnimation>
        </Container>
        <CommunityHub background={'white'} heading={false} />
      </Column>
      <ScrollAnimation animateIn="bounceInRight" delay={400} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default Communities
