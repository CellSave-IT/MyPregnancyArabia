import {
  StyleSection,
  StyleContentWrapper,
  StyleColumn,
  StyleTitle,
  StyleDesc,
} from './style'
import { Image, Container, Row } from '../../components'
import { JourneySvg } from '../../assets'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'
import { Select } from '../../store'
import { useNavigate } from 'react-router-dom'
const JourneySection = () => {
  const activeEvent: any = useSelector(Select.activeEvent)
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const findJourney = aboutInfos?.find(
    (item) => item?.key === 'aboutSectionFive',
  )
  const navigate = useNavigate()

  return (
    <>
      {!!findJourney && (
        <StyleSection>
          <Container>
            <StyleColumn>
              <StyleContentWrapper>
                <StyleTitle>{findJourney?.title}</StyleTitle>
                <StyleDesc style={{ marginTop: 30 }}>
                  {findJourney?.value}
                </StyleDesc>

                <Row styleRow={`justify-content:center;`}>
                  <Button
                    height={45}
                    background={`secondary`}
                    buttonStyle="margin-top:40px;padding:0px 20px;"
                    radius={12}
                    onClick={() => {
                      navigate(`/events`)
                    }}
                  >
                    Event Registration
                  </Button>
                </Row>
              </StyleContentWrapper>
            </StyleColumn>
          </Container>

          <Image
            src={JourneySvg}
            styleImage={`position:absolute;left:0px;bottom:0px;height:90%;-webkit-animation: moverX 3s infinite alternate;
            animation: moverX 3s infinite alternate;`}
          />
        </StyleSection>
      )}
    </>
  )
}
export default JourneySection
