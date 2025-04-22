import {
  StyleBannerText,
  StyleBannerTextWrapper,
  StyleBannerWrapper,
  StyleVideo,
  StyleVideoActionButton,
  StyleVideoActionIcon,
  StyleVideoActionText,
} from './style'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Actions, Select, store } from '../../../../store'
import { GeneralSetting } from '../../../../apis'
import { checkVideoOrImage } from '../../../../utils/helpers'
import { Button, Row, Container, Image } from '../../../../components'
import { StopPrimarySvg, PlayPrimarySvg } from '../../../../assets'
import { useNavigate } from 'react-router-dom'
const Banner = () => {
  const banner: any = useSelector(Select.banner)
  const activeEvent: any = useSelector(Select.activeEvent)
  const navigate = useNavigate()
  const [isPlay, setIsPlay] = useState<boolean>(true)
  const ref = useRef(null)
  const fetchData = async () => {
    await GeneralSetting.getByKey('banner')
      .then((res) => {
        store.dispatch(Actions.set('banner', res))
      })
      .catch(() => {})
  }
  useEffect(() => {
    if (!banner?.key) {
      fetchData()
    }
    if (ref?.current) {
      ref?.current?.play()
    }
  }, [ref?.current])

  return (
    <StyleBannerWrapper>
      {!!banner && checkVideoOrImage(banner?.image) === 'video' && (
        <StyleVideo
          ref={ref}
          loop
          playsInline
          autoPlay={true}
          preload="auto"
          muted
          controls={false}
        >
          <source
            src={`${process.env.APP_IMAGE_URL}${banner?.image}`}
            type="video/mp4"
          ></source>
          <source
            src={`${process.env.APP_IMAGE_URL}${banner?.image}`}
            type="video/ogg"
          ></source>
        </StyleVideo>
      )}
      {!!banner && checkVideoOrImage(banner?.image) === 'image' && (
        <Image
          src={`${process.env.APP_IMAGE_URL}${banner?.image}`}
          styleImage={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      )}
      {!!banner && (
        <StyleBannerTextWrapper>
          <Container>
            <StyleBannerText
              dangerouslySetInnerHTML={{
                __html: banner?.value,
              }}
            />
            <Row
              styleRow={`margin-top:100px;align-items:center;justify-content:space-between;width:100%;
              @media(max-width:1024px){
                margin-top:60px;
              }
              @media(max-width:768px){
                margin-top:40px;
              }
              @media(max-width:640px){
                margin-top:10px;
              }
            `}
            >
              <Button
                radius={12}
                height={60}
                buttonStyle="padding:0px 30px;
                @media(max-width:1024px){
                  height:50px;
                  padding:0px 10px;
                  font-size:13px;

                }
                @media(max-width:500px){
                  height:40px;
                  font-size:12px;
                  margin-top:10px;
                }
              "
                onClick={() => {
                  navigate(`/events`)
                }}
              >
                Events Registration
              </Button>
              {/* {checkVideoOrImage(banner?.image) === 'video' && (
                <StyleVideoActionButton>
                  <StyleVideoActionIcon
                    onClick={() => {
                      setIsPlay(!isPlay)
                      if (!!isPlay) {
                        ref.current.pause()
                      } else {
                        ref.current.play()
                      }
                    }}
                  >
                    <Image src={isPlay ? StopPrimarySvg : PlayPrimarySvg} />
                  </StyleVideoActionIcon>
                  <StyleVideoActionText>
                    {!!isPlay ? 'Pause' : 'Play'}
                  </StyleVideoActionText>
                </StyleVideoActionButton>
              )} */}
            </Row>
          </Container>
        </StyleBannerTextWrapper>
      )}
    </StyleBannerWrapper>
  )
}

export default Banner
