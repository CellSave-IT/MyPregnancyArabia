import {
  StyleSection,
  StyleSectionHeader,
  StyleSectionHeaderTitle,
} from './style'
import { Container, Button, Image, Accordian } from '../../../../components'
import { ArrowLeftLightSvg } from '../../../../assets'
import { Faqs as FaqApi } from '../../../../apis'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { Select } from '../../../../store'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

const Faqs = () => {
  const faqs: any[] = useSelector(Select.faqs)
  const navigate = useNavigate()
  const fetchData = async () => {
    await FaqApi.get().catch(() => {})
  }
  useEffect(() => {
    if (!faqs.length) {
      fetchData()
    }
  }, [])

  return (
    <StyleSection>
      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={400}
          animateOnce={true}
        >
          <StyleSectionHeader>
            <StyleSectionHeaderTitle>
              Frequently Asked Questions
            </StyleSectionHeaderTitle>
            <Button
              background="secondary"
              height={50}
              radius={10}
              buttonStyle="display:flex;align-items:center;justify-content:center; @media(max-width:767px){
              height:40px;
              width:40px;
              img{
                width:30px;
              }
              @media(max-width:767px){
                width:30px;
                height:30px;
                img{
                  width:20px;
                }
              }
            }"
              onClick={() => {
                navigate('/faqs')
              }}
            >
              <Image src={ArrowLeftLightSvg} />
            </Button>
          </StyleSectionHeader>
        </ScrollAnimation>
        <Accordian
          data={faqs?.slice(0, 3)}
          titleAsKey="title"
          descAsKey="description"
        />
      </Container>
    </StyleSection>
  )
}

export default Faqs
