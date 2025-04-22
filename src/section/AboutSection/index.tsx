import { AboutSectionSvg, PregentWomenSvg } from '../../assets'
import { Container, Image } from '../../components'
import {
  StyleAboutImage,
  StyleSection,
  StyleWomanImage,
  StyleAboutInfoWrapper,
  StyleAboutTitle,
  StyleAboutDesc,
} from './style'
import { AboutSpinnerSvg } from '../../assets'
import { useSelector } from 'react-redux'
import { Select } from '../../store'
import { useNavigate } from 'react-router-dom'
interface AboutSectionProps {
  hasSpin?: boolean
}
const AboutSection = ({ hasSpin }: AboutSectionProps) => {
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const navigate = useNavigate()
  const aboutSectionOne = aboutInfos?.find(
    (item) => item?.key === 'aboutSectionOne',
  )
  return (
    <>
      {!!aboutSectionOne && (
        <StyleSection>
          <Container>
            <StyleAboutInfoWrapper>
              <StyleAboutTitle>{aboutSectionOne?.title}</StyleAboutTitle>
              <StyleAboutDesc>{aboutSectionOne?.value}</StyleAboutDesc>
            </StyleAboutInfoWrapper>
          </Container>
          <StyleWomanImage src={PregentWomenSvg} />
          <StyleAboutImage src={AboutSectionSvg} />
          {!!hasSpin && (
            <Image
              onClick={() => {
                navigate('/about')
              }}
              width={130}
              src={AboutSpinnerSvg}
              styleImage={`
                  position:absolute;
                  right:250px;
                  bottom:80px; 
                  animation: spin 5s infinite linear;
                  cursor:pointer;
                  transition:0.5s;
                  &:hover{
                    width:138px;
                  }
                `}
            />
          )}
        </StyleSection>
      )}
    </>
  )
}

export default AboutSection
