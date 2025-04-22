import styled from '@emotion/styled'
import { Image, Container, Row, Column } from '../../../../components'
import { useSelector } from 'react-redux'
import { Select } from '../../../../store'
import { Partner } from '../../../../apis'
import { useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const StyleSection = styled.section`
  margin: 60px 0px;
  @media (max-width: 1024px) {
    margin: 40px 0px;
  }
  @media (max-width: 767px) {
    margin-top: 30px;
    margin-bottom: 0px;
  }
`
const StyleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 60px;
  row-gap: 60px;
  width: 75%;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
  }
  @media (max-width: 767px) {
    row-gap: 10px;
    width: 100%;
    margin-top: 30px;
  }
`
const StyleItem = styled.div``
const StyleTitle = styled.h2`
  font-size: ${(props: any) => props.theme.fontSizes['5x']}px;
  color: ${(props: any) => props.theme.colors.primary};
  font-family: ${(props: any) => props.theme.fontFamily.secondary};
  @media (max-width: 767px) {
    font-size: 24px;
  }
`
const Partners = () => {
  const partners: [] = useSelector(Select.partners)
  const fetchData = async () => {
    await Partner.get().catch(() => {})
  }
  useEffect(() => {
    if (!partners?.length) {
      fetchData()
    }
  }, [])

  return (
    <StyleSection>
      <Container>
        <Row
          styleRow="
            justify-content:space-between;
            @media(max-width: 767px) {
              flex-direction: column;
            }
        "
        >
          <Column>
            <StyleTitle>Partners</StyleTitle>
          </Column>
          <StyleGrid>
            {partners?.map((item: any, index) => {
              return (
                <ScrollAnimation
                  animateIn="fadeInUpBig"
                  animateOnce={true}
                  delay={500}
                  key={index}
                >
                  <StyleItem key={index}>
                    <Image
                      src={`${process.env.APP_IMAGE_URL}${item?.image}`}
                      styleImage={{
                        width: '100%',
                        height: 80,
                        objectFit: 'contain',
                      }}
                    />
                  </StyleItem>
                </ScrollAnimation>
              )
            })}
          </StyleGrid>
        </Row>
      </Container>
    </StyleSection>
  )
}
export default Partners
