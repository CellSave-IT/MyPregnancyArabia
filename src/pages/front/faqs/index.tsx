import { Container } from '../../../components'
import JourneySection from '../../../section/JourneySection'
import { Accordian, Column } from '../../../components'
import InnerPageHeader from '../../../section/InnerPageHeader'
import { useSelector } from 'react-redux'
import { Faqs as FaqApi } from '../../../apis'
import { Select } from '../../../store'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'

const Faqs = () => {
  const faqs: any[] = useSelector(Select.faqs)
  const fetchData = async () => {
    await FaqApi.get().catch(() => {})
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Helmet>
        <title>Faqs</title>
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
              title="Frequently Asked Questions"
              description="Find answers to common inquiries about our events and workshops. Whether you're curious about registration, schedules, or what to expect, we've got you covered. Browse through our frequently asked questions to gain clarity and confidence as you embark on your journey with My Pregnancy Arabia."
            />
          </ScrollAnimation>
          <Column
            styleColumn={`margin-top:60px;
            @media(max-width:1024px){
              margin-top:40px;
            }
            @media(max-width:767px){
              margin-top:30px;
            }
          `}
          >
            <Accordian data={faqs} titleAsKey="title" descAsKey="description" />
          </Column>
        </Container>
      </Column>
      <JourneySection />
    </>
  )
}

export default Faqs
