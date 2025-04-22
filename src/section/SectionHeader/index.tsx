import styled from '@emotion/styled'
import { theme } from '../../utils'
import { Container, Button, Row, Image } from '../../components'
import { ArrowLeftLightSvg } from '../../assets'
interface SectionHeaderProps {
  title: string
  subTitle?: string
  titleColor?: keyof typeof theme.colors
  subTitleColor?: keyof typeof theme.colors
  onClick?: () => void
  isButton?: boolean
}
const StyleSectionHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 60px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`
const StyleTitle = styled.h2<any>`
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  font-weight: 600;
  color: ${(props: any) => props.theme.colors[props.titleColor]};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 1300px) {
    font-size: 40px;
  }
  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
const SectionSubTitle = styled.p<any>`
  font-size: ${(props: any) => props.theme.fontSizes['2x']}px;
  font-weight: 500;
  padding-top: 20px;
  color: ${(props: any) => props.theme.colors[props.subTitleColor]};
  text-align: center;
  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 767px) {
    font-size: 13px;
    padding-top: 10px;
  }
`
const SectionHeader = ({
  title,
  subTitle,
  titleColor,
  subTitleColor,
  onClick,
  isButton = false,
}: SectionHeaderProps) => {
  return (
    <Container>
      <StyleSectionHeaderWrapper>
        <StyleTitle titleColor={titleColor || 'primary'}>{title}</StyleTitle>

        {!!subTitle && (
          <Row
            styleRow={`
            @media(max-width:767px){
              flex-direction:column;
              align-items:center;
            }
          `}
          >
            <SectionSubTitle subTitleColor={subTitleColor || 'primary'}>
              {subTitle}
            </SectionSubTitle>
            {!!isButton && (
              <Button
                background="primary"
                height={50}
                radius={10}
                onClick={onClick}
                buttonStyle="
                    display:flex;align-items:center;justify-content:center;
                    position:relative;
                    left:50px;
                    @media(max-width:767px){
                      height:30px;
                      width:30px;
                      margin-top:10px;
                     left:0px;
                      img{
                        width:20px;
                      }
                    }
                  "
              >
                <Image src={ArrowLeftLightSvg} />
              </Button>
            )}
          </Row>
        )}
      </StyleSectionHeaderWrapper>
    </Container>
  )
}

export default SectionHeader
