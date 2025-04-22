import {
  StyleLeftWrapper,
  StyleSection,
  StyleRightWrapper,
  StyleTitle,
  StyleDesc,
  StyleRowWrapper,
} from './style'
import { Button, Container, Row, Image, Column } from '../../components'
import { ButtonShadow } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Select } from '../../store'
import { BabySizeSvg } from '../../assets'
const BabySize = () => {
  const navigate = useNavigate()
  const aboutInfos: any[] = useSelector(Select.aboutInfos)
  const shortDesc: any = aboutInfos?.find(
    (item) => item?.key === 'aboutBabySizeDesc',
  )
  return (
    <StyleSection>
      <Container>
        <StyleRowWrapper>
          <StyleLeftWrapper>
            <Row
              styleRow={`
              align-items: center;
              justify-content: space-between;
              @media(max-width:1024px){
                justify-content:center;
                
              }
            `}
            >
              <ButtonShadow background="secondary300" radius={8}>
                <Button
                  title="Baby-Sizer"
                  background={`secondary`}
                  height={50}
                  size="lg"
                  radius={8}
                  buttonStyle="
                    padding:0px 30px;
                    @media(max-width:767px){
                      height:40px;
                      font-size:12px;
                    }
                  "
                  onClick={() => {
                    navigate('/baby-size')
                  }}
                />
              </ButtonShadow>
              <Column
                styleColumn={`
                margin-right:40px;
                @media(max-width:1024px){
                  margin-right:0px;
                  display:none
                }
              `}
              >
                <Image
                  src={BabySizeSvg}
                  styleImage={`height:150px;aspect-ratio:5/3; -webkit-animation: moverX 3s infinite alternate;
                  animation: moverX 3s infinite alternate;`}
                />
              </Column>
            </Row>
          </StyleLeftWrapper>
          <StyleRightWrapper>
            <StyleTitle>What size is my Baby</StyleTitle>
            <StyleDesc>{shortDesc?.value}</StyleDesc>
          </StyleRightWrapper>
        </StyleRowWrapper>
      </Container>
    </StyleSection>
  )
}

export default BabySize
