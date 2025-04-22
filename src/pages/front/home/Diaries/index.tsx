import { Container, Column, Row } from '../../../../components'
import { StyleHeading, StyleDesc } from './style'
import Button, { ButtonShadow } from '../../../../components/Button'
import BlogSection from '../../../../section/BlogSection'
import { Blog } from '../../../../apis'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../../store'
import { useNavigate } from 'react-router-dom'
import ScrollAnimation from 'react-animate-on-scroll'

const Diaries = () => {
  const { data }: any = useSelector(Select.diaries)
  const navigate = useNavigate()
  const fetchData = async (params) => {
    await Blog.getFront(params).catch(() => {})
  }
  useEffect(() => {
    fetchData({
      pageSize: 11,
      page: 1,
    })
  }, [])

  return (
    <Column
      styleColumn="padding:80px 0px;
    @media(max-width:1024px){
      padding:60px 0px;
    }
    @media(max-width:767px){
      padding:40px 0px;
    }"
    >
      <Container>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={400}
          animateOnce={true}
        >
          <Column
            styleColumn="
            margin-bottom:60px;
            @media(max-width:767px){
              margin-bottom:30px;
            }
          "
          >
            <Row styleRow={'justify-content:space-between;align-items:center;'}>
              <StyleHeading>Digital Diary</StyleHeading>
              <ButtonShadow background="primary100" radius={12}>
                <Button
                  height={40}
                  width={110}
                  title="Read More"
                  radius={12}
                  onClick={() => {
                    navigate('/diaries')
                  }}
                  buttonStyle="
                    @media(max-width:767px){
                      font-size:12px;
                    }
                  "
                />
              </ButtonShadow>
            </Row>
            <Column
              styleColumn="
                    margin-top:30px;
                    @media(max-width:767px){
                      margin-top:20px;
                    }
            "
            >
              <StyleDesc>
                Welcome to our Digital Diary, your weekly dose of pregnancy
                insights and journey reflections! Dive into our curated
                collection of blogs designed to accompany you through every
                stage of your pregnancy adventure. From expert advice to
                heartfelt stories, discover a treasure trove of resources to
                support and inspire you along the way.
              </StyleDesc>
            </Column>
          </Column>
        </ScrollAnimation>
        <BlogSection
          handleRead={(item) => {
            navigate(`/diaries/${item?._id}`, { state: item })
          }}
          items={data?.length > 3 ? data?.slice(0, 3) : data}
        />
      </Container>
    </Column>
  )
}

export default Diaries
