import Container from '../../../Container'
import {
  StyleHeaderWrapper,
  StyleImage,
  StyleLogoWrapper,
  StyleHeader,
} from './style'
import { useNavigate } from 'react-router-dom'
import { LogoSvg } from '../../../../assets'
import PublicMenu from './menu'
const PublicHeader = () => {
  const navigate = useNavigate()

  return (
    <StyleHeader>
      <Container>
        <StyleHeaderWrapper>
          <StyleLogoWrapper>
            <StyleImage
              src={LogoSvg}
              onClick={() => {
                navigate('/')
              }}
              alt="logo"
            />
          </StyleLogoWrapper>
          <PublicMenu />
        </StyleHeaderWrapper>
      </Container>
    </StyleHeader>
  )
}

export default PublicHeader
