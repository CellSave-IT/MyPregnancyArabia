import {
  StyleGrid,
  StyleGridDesc,
  StyleGridItemWrapper,
  StyleGridTitle,
  StyleInfoText,
  StyleLink,
} from './style'
import { Column, Image, Row } from '../../components'
import ScrollAnimation from 'react-animate-on-scroll'

import {
  AddSquarePrimary,
  AddSquareSvg,
  CalendarPrimarySvg,
  CalendarSvg,
  ClockPrimarySvg,
  ClockSvg,
  LocationPng,
  LocationPrimarySvg,
  LocationSvg,
} from '../../assets'
import moment from 'moment'
import { removeHtmlTags } from '../../utils/helpers'
interface EventSectionProps {
  theme: 'primary' | 'secondary'
  buttonText: string
  items: any[]
  handleRead?: (item: any) => void
}
const EventSection = ({
  theme = 'secondary',
  buttonText,
  items,
  handleRead,
}: EventSectionProps) => {
  return (
    <StyleGrid>
      {items?.map((item: any, index) => {
        return (
          <ScrollAnimation
            animateIn="fadeInUpBig"
            animateOnce={true}
            delay={500}
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <StyleGridItemWrapper
              key={item?._id}
              background={theme === 'secondary' ? 'secondary200' : 'white100'}
              type={theme}
            >
              <Column styleColumn={`overflow:hidden;`}>
                <Image
                  onClick={() => {
                    handleRead(item)
                  }}
                  className="event-image"
                  src={`${process.env.APP_IMAGE_URL}${!!item?.banner ? item?.banner : item?.image}`}
                  styleImage={`
                      width:100%;
                      border-top-left-radius: 10px;
                      border-top-right-radius: 10px;
                      height: 195px;
                      object-fit: cover;
                      transition: 0.5s;
                      @media(max-width:1024px){
                        height: 175px;
                      }
                      @media(max-width:767px){
                        height: 120px;
                      }

                  `}
                />
              </Column>

              <StyleGridTitle
                onClick={() => {
                  handleRead(item)
                }}
                type={theme}
              >
                {item.title}
              </StyleGridTitle>

              <Column
                styleColumn={`
                      padding:0px 20px;
                      @media(max-width:767px){
                        margin-top:10px;
                        padding:0px 10px;
                      }
                `}
              >
                {removeHtmlTags(item.description)?.length > 1 && (
                  <StyleGridDesc type={theme}>
                    {removeHtmlTags(item.description).slice(0, 50)}...
                  </StyleGridDesc>
                )}
              </Column>
              <Column
                styleColumn={`margin-top:20px;row-gap:15px;padding:0px 20px;@media(max-width:1024px){
                margin-top:0px;
              }@media(max-width:767px){
                padding:0px 10px;
              }`}
              >
                <Row
                  className="event-info"
                  styleRow={`
                      justify-content:space-between;
                      @media(max-width:767px){
                        flex-direction: column;
                        row-gap:5px;
                      }
                    `}
                >
                  <Row styleRow={`column-gap:10px;align-items:center;`}>
                    <Image
                      src={theme === 'primary' ? ClockPrimarySvg : ClockSvg}
                      styleImage={`
                          @media(max-width:767px){
                            width:15px;
                          }
                        `}
                    />
                    <StyleInfoText type={theme}>
                      {moment(item.startTime, 'HH:mm').format('h:mm a')}
                    </StyleInfoText>
                  </Row>
                  <Row styleRow={`column-gap:10px;align-items:center;`}>
                    <Image
                      src={
                        theme === 'primary' ? CalendarPrimarySvg : CalendarSvg
                      }
                      styleImage={`
                          @media(max-width:767px){
                            width:15px;
                          }
                        `}
                    />
                    <StyleInfoText type={theme}>
                      {moment(item.date).format('DD MMM - YYYY')}
                    </StyleInfoText>
                  </Row>
                </Row>
                <Row
                  className="event-info"
                  styleRow={`
                    column-gap:10px;align-items:flex-start;
                    @media(max-width:767px){
                      margin-top:-8px;
                    }
                    `}
                >
                  <Image
                    src={theme === 'primary' ? LocationPrimarySvg : LocationPng}
                    styleImage={`
                    width:20px;
                    height:20px;
                          @media(max-width:767px){
                            width:15px;
                            height:15px;
                            margin-top:2px
                          }
                        `}
                  />
                  <StyleInfoText type={theme}>{item.location}</StyleInfoText>
                </Row>
              </Column>
              <Column
                styleColumn="
                  margin-top:auto;padding-bottom:20px;padding-right:20px;padding-left:20px;
                  .event-button{
                    margin-top:40px;
                  }
                
                  @media(max-width:767px){
                    paddingright:10px;
                    padding-left:10px;
                    .event-button{
                      margin-top:20px;
                    }
                  }
                }"
              >
                <StyleLink
                  className="event-button"
                  onClick={() => {
                    handleRead(item)
                  }}
                  type={theme}
                >
                  {buttonText}{' '}
                  <Image
                    width={30}
                    height={30}
                    src={theme == 'primary' ? AddSquarePrimary : AddSquareSvg}
                    styleImage={`
                        @media(max-width:767px){
                          height:20px;
                        }
                      `}
                  />
                </StyleLink>
              </Column>
            </StyleGridItemWrapper>
          </ScrollAnimation>
        )
      })}
    </StyleGrid>
  )
}

export default EventSection
