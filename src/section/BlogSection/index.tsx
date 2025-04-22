import { CalendarPrimarySvg, WindowSvg } from '../../assets'
import { Column, Image, Row } from '../../components'
import { StyleGrid, StyleTitle, StyleDesc } from './style'
import { helpers } from '../../utils'
import moment from 'moment'
import ReactPaginate from 'react-paginate'
import ScrollAnimation from 'react-animate-on-scroll'
import { TbSquareRoundedPlus } from 'react-icons/tb'

const BlogSection = ({
  items,
  pagination,
  handlePageClick,
  isPagination,
  handleRead,
}: any) => {
  return (
    <>
      <StyleGrid>
        {items?.map((item: any, index: number) => {
          return (
            <ScrollAnimation
              animateIn="fadeInUpBig"
              animateOnce={true}
              delay={500}
              key={index}
            >
              <Column
                key={item?._id}
                styleColumn={`
              overflow: hidden;
              height:100%;
                &:hover{
                  .blog-image{
                    transform: scale(1.2);
                   
                  }
                }
            `}
              >
                <Column styleColumn={`overflow:hidden;`}>
                  <Image
                    onClick={() => {
                      handleRead(item)
                    }}
                    className="blog-image"
                    styleImage={`
                      width:100%;height:350px;border-radius:12px;object-fit:cover;transition: 0.5s;
                      @media(max-width:767px){
                        height:200px;
                      }
                `}
                    src={`${process.env.APP_IMAGE_URL}${item?.image}`}
                  />
                </Column>
                <Row
                  styleRow="
                    column-gap:30px;align-items:center;margin-top:20px;
                    @media(max-width:767px){
                      margin-top:10px;
                      justify-content:space-between;
                      column-gap:5px;
                    }
              "
                >
                  <Row
                    styleRow="
                      column-gap:10px;align-items:center;
                   
                  "
                  >
                    <Image
                      src={CalendarPrimarySvg}
                      width={20}
                      styleImage={`
                      @media(max-width:767px){
                        width:15px;
                      }
                      `}
                    />
                    <StyleDesc>
                      {moment(item.createAt).format('MMM')} -
                      {moment(item.createAt).format('YYYY')}
                    </StyleDesc>
                  </Row>
                  <Row
                    styleRow="
                    column-gap:10px;align-items:center;"
                  >
                    <Image
                      src={WindowSvg}
                      width={20}
                      styleImage={`
                      @media(max-width:767px){
                        width:15px;
                      }
                      `}
                    />
                    <StyleDesc>{item.categoryId?.title || item?.tag}</StyleDesc>
                  </Row>
                </Row>
                <Column
                  styleColumn="margin-top:20px;margin-bottom:20px;
                @media(max-width:767px){
                  margin-bottom:10px;
                  margin-top:10px;
                }
                "
                >
                  <StyleTitle
                    onClick={() => {
                      handleRead(item)
                    }}
                  >
                    {item.title}
                  </StyleTitle>

                  <Column
                    styleColumn="
                          margin-top:20px;
                          @media(max-width:767px){
                            margin-top:10px;
                            p{
                              font-size:13px;
                              line-height:18px;
                            }
                          }
                  "
                  >
                    <StyleDesc>
                      {helpers.removeHtmlTags(item.description).slice(0, 100)}
                      ...
                    </StyleDesc>
                  </Column>
                </Column>
                <Column
                  styleColumn={`
                    margin-top:auto;
                    svg{
                      cursor:pointer;
                      &:hover{
                        fill: #3AB8B7;
                        stroke:white;
                      }
                    }
                  `}
                >
                  <TbSquareRoundedPlus
                    color="#3AB8B7"
                    size={30}
                    style={{ marginTop: 'auto' }}
                    onClick={() => {
                      handleRead(item)
                    }}
                  />
                </Column>
              </Column>
            </ScrollAnimation>
          )
        })}
      </StyleGrid>
      {!!isPagination && (
        <Row
          styleRow="
              justify-content:center;margin-top:60px;
              @media(max-width:767px){
                margin-top:30px;
              }
        "
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pagination?.totalPages}
            previousLabel="Prev"
            renderOnZeroPageCount={null}
            className="pagination-wrapper"
          />
        </Row>
      )}
    </>
  )
}

export default BlogSection
