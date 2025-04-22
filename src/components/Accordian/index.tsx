import { AddSquareSvg, MinusSquareSvg } from '../../assets'
import Image from '../Image'
import {
  StyleAccordianHeaderWrapper,
  StyleAccordianItem,
  StyleAccordianItemWrapper,
  StyleAccordianWrapper,
  StyleAccordianTitle,
  StyleAccordianContentWrapper,
  StyleAccordianDesc,
} from './style'
import { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { TbSquareRoundedPlus, TbSquareRoundedMinus } from 'react-icons/tb'

interface AccordianProps {
  titleAsKey: string
  descAsKey: string
  data: any[]
}
const Accordian = ({ data, titleAsKey, descAsKey }: AccordianProps) => {
  const [active, setActive] = useState(0)
  const handelClick = (index: number) => {
    if (index === active) {
      setActive(null)
    } else {
      setActive(index)
    }
  }

  return (
    <StyleAccordianWrapper>
      {data.map((item, index) => {
        return (
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={500}
            animateOnce={true}
            key={index}
          >
            <StyleAccordianItem key={index.toString()}>
              <StyleAccordianItemWrapper>
                <StyleAccordianHeaderWrapper>
                  <StyleAccordianTitle>{item[titleAsKey]}</StyleAccordianTitle>
                  {active === index ? (
                    <TbSquareRoundedMinus
                      size={window.innerWidth < 767 ? 20 : 28}
                      onClick={() => {
                        handelClick(index)
                      }}
                    />
                  ) : (
                    <TbSquareRoundedPlus
                      size={window.innerWidth < 767 ? 20 : 28}
                      onClick={() => {
                        handelClick(index)
                      }}
                    />
                  )}
                </StyleAccordianHeaderWrapper>
                <StyleAccordianContentWrapper active={active === index}>
                  <StyleAccordianDesc>{item[descAsKey]}</StyleAccordianDesc>
                </StyleAccordianContentWrapper>
              </StyleAccordianItemWrapper>
            </StyleAccordianItem>
          </ScrollAnimation>
        )
      })}
    </StyleAccordianWrapper>
  )
}

export default Accordian
