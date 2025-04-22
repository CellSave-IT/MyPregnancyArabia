import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { CommunityCategory, Community } from '../../../apis'
import { Column, Container } from '../../../components'
import {
  StyleFilterLi,
  StyleFilterUl,
  StyleFilterWrapper,
} from '../home/Diaries/style'
import BlogSection from '../../../section/BlogSection'
import InnerPageHeader from '../../../section/InnerPageHeader'
import ScrollAnimation from 'react-animate-on-scroll'

const CommunitiesFilter = () => {
  const { state }: any = useLocation()
  const categories: any[] = useSelector(Select.communityCategories)
  const { data, pagination }: any = useSelector(Select.communities)
  const [active, setActive] = useState(state)
  const [params, setParams] = useState<any>({
    page: 1,
    pageSize: 10,
    categoryId: state?._id,
  })
  const navigate = useNavigate()
  const fetchCategoriesData = async () => {
    await CommunityCategory.get().catch(() => {})
  }
  const fetchData = async (params) => {
    await Community.get(params).catch(() => {})
  }
  const handleOnClick = (page) => {
    fetchData({ ...params, page: page })
  }
  useEffect(() => {
    if (!state?._id) {
      navigate(-1)
    } else {
      fetchCategoriesData()
      fetchData(params)
    }
  }, [])

  return (
    <>
      <Column
        styleColumn={`margin:80px 0px;
    @media (max-width: 1024px) {
      margin: 60px 0px;
    }
    @media (max-width: 767px) {
      margin: 40px 0px;
    }`}
      >
        <Container>
          <StyleFilterWrapper>
            <StyleFilterUl>
              {categories?.map((item) => (
                <StyleFilterLi
                  active={active?._id === item?._id}
                  key={item?._id}
                  onClick={() => {
                    const updateParams = {
                      categoryId: item?._id,
                      page: 1,
                      limit: 10,
                    }
                    fetchData(updateParams)
                    setParams(updateParams)
                    setActive(item)
                  }}
                >
                  {item?.title}
                </StyleFilterLi>
              ))}
            </StyleFilterUl>
          </StyleFilterWrapper>
          <Column
            styleColumn={`margin-top:80px;@media(max-width:1024px){
            margin-top:60px;
          }@media(max-width:767px){
            margin-top:40px;
          }`}
          >
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={400}
              animateOnce={true}
            >
              <InnerPageHeader
                type={'primary'}
                title={active.title}
                description={active?.longDescription}
              />
            </ScrollAnimation>
            <Column
              styleColumn="margin-top:60px;
            @media(max-width:767px){
                margin-top:30px;
            }"
            >
              <BlogSection
                items={data}
                pagination={pagination}
                isPagination
                handleOnClick={handleOnClick}
                handleRead={(item) => {
                  navigate(`/communities/${item?._id}`, { state: item })
                }}
              />
            </Column>
          </Column>
        </Container>
      </Column>
    </>
  )
}

export default CommunitiesFilter
