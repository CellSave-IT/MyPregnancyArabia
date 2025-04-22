import {
  StyleCard,
  StyleGrid,
  StyleSection,
  StyleInfoWrapper,
  StyleInfoContent,
  StyleTitle,
  StyleDesc,
} from './style'
import { Container, Image } from '../../../../components'
import SectionHeader from '../../../../section/SectionHeader'
import { theme } from '../../../../utils'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../../store'
import { CommunityCategory } from '../../../../apis'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

interface CommunityHubProps {
  background: keyof typeof theme.colors
  heading?: boolean
}
const CommunityHub = ({ background, heading = true }: CommunityHubProps) => {
  const categories: any = useSelector(Select.communityCategories)
  const navigate = useNavigate()
  const items: any[] =
    categories?.length > 3 ? categories.slice(0, 3) : categories
  const subItems: any[] =
    categories?.length > 3 ? categories.slice(3, categories.length) : []
  const fetchData = async () => {
    await CommunityCategory.get().catch(() => {})
  }
  useEffect(() => {
    if (!categories?.length) {
      fetchData()
    }
  }, [])

  return (
    <StyleSection background={background}>
      {!!heading && (
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={400}
          animateOnce={true}
        >
          <SectionHeader
            title={`Community Hub`}
            subTitle="Welcome to our comprehensive Pregnancy Guides Hub, your ultimate destination for navigating every step of your incredible journey to motherhood. Explore our curated collection of expertly crafted guides, tailored to support and empower you through each trimester and beyond."
            titleColor={`secondary`}
            subTitleColor={`secondary`}
          />
        </ScrollAnimation>
      )}
      <Container>
        <StyleGrid>
          {items?.map((item, index) => (
            <ScrollAnimation
              animateIn="fadeInUpBig"
              animateOnce={true}
              delay={500}
              key={index}
              className="main-item-hub"
            >
              <StyleCard
                key={item?._id}
                styleCard={`
                height:450px;
                @media(max-width:767px) {
                  height: 250px;
                }
                `}
                onClick={() => {
                  navigate('/communities/filter', { state: item })
                }}
              >
                {!!item?.image && (
                  <Image
                    styleImage={`width:100%;height:100%;border-radius:8px;filter:brightness(0.7);object-fit:cover;transition: 0.5s;
  `}
                    src={`${process.env.APP_IMAGE_URL}${item?.image}`}
                  />
                )}
                <StyleInfoWrapper className="hub-info-wrapper">
                  <StyleInfoContent>
                    <StyleTitle>{item?.title}</StyleTitle>
                    <StyleDesc>{item?.description}</StyleDesc>
                  </StyleInfoContent>
                </StyleInfoWrapper>
              </StyleCard>
            </ScrollAnimation>
          ))}
          {window.innerWidth < 1024 && (
            <>
              {subItems?.map((item, index) => (
                <ScrollAnimation
                  animateIn="fadeInUpBig"
                  animateOnce={true}
                  delay={500}
                  key={index}
                >
                  <StyleCard
                    key={item._id}
                    styleCard={`
                    height:370px;
                      @media(max-width:767px) {
                        height: 250px;
                      }
                  `}
                    onClick={() => {
                      navigate('/communities/filter', { state: item })
                    }}
                  >
                    {!!item?.image && (
                      <Image
                        styleImage={`width:100%;height:100%;border-radius:8px;filter:brightness(0.7);object-fit:cover;transition: 0.5s;
                    `}
                        src={`${process.env.APP_IMAGE_URL}${item?.image}`}
                      />
                    )}
                    <StyleInfoWrapper>
                      <StyleInfoContent>
                        <StyleTitle>{item?.title}</StyleTitle>
                        <StyleDesc>{item?.description}</StyleDesc>
                      </StyleInfoContent>
                    </StyleInfoWrapper>
                  </StyleCard>
                </ScrollAnimation>
              ))}
            </>
          )}
        </StyleGrid>
        {!!subItems?.length && window.innerWidth > 1024 && (
          <StyleGrid className="sub-grid">
            {subItems?.map((item, index) => (
              <ScrollAnimation
                animateIn="fadeInUpBig"
                animateOnce={true}
                delay={500}
                key={index}
              >
                <StyleCard
                  key={item._id}
                  styleCard={`height:370px;
                  @media(max-width:768px) {
                    height: 350px;
                  }
                  `}
                  onClick={() => {
                    navigate('/communities/filter', { state: item })
                  }}
                >
                  {!!item?.image && (
                    <Image
                      styleImage={`width:100%;height:100%;border-radius:8px;filter:brightness(0.7);object-fit:cover;transition: 0.5s;
                    `}
                      src={`${process.env.APP_IMAGE_URL}${item?.image}`}
                    />
                  )}
                  <StyleInfoWrapper>
                    <StyleInfoContent>
                      <StyleTitle>{item?.title}</StyleTitle>
                      <StyleDesc>{item?.description}</StyleDesc>
                    </StyleInfoContent>
                  </StyleInfoWrapper>
                </StyleCard>
              </ScrollAnimation>
            ))}
          </StyleGrid>
        )}
      </Container>
    </StyleSection>
  )
}

export default CommunityHub
