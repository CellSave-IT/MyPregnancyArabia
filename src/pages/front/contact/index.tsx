import JourneySection from '../../../section/JourneySection'
import {
  StyleContactContactWrapper,
  StyleContactHeader,
  StyleContactTitle,
  StyleContactDesc,
  StyleContactFormBg,
  StyleContactFormTitle,
  StyleContactInfoGrid,
  StyleContactInfoLink,
  StyleContactInfoGridTitle,
  StyleContactInfoGridDesc,
  StyleRow,
  styleContactForm,
  styleContactMessageForm,
  styleWrapper,
} from './style'
import {
  CallSvg,
  ContactHeading,
  FacebookPrimarySvg,
  InstagramPrimarySvg,
  LinkdinPrimarySvg,
  MediaSvg,
  SmsSvg,
} from '../../../assets'
import {
  Image,
  Container,
  Column,
  Row,
  FormField,
  Button,
} from '../../../components'
import { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { ButtonShadow } from '../../../components/Button'
import { Enquiry } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { keyValuePairs } from '../../../utils/helpers'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const validationShema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required'),
  phoneNo: yup.string().required('Phone number is required'),
  message: yup.string().nullable(),
})
const Contact = () => {
  const contacts: any[] = useSelector(Select.contactInfos)
  const socials: any[] = useSelector(Select.socialInfos)
  const formatContact: any = keyValuePairs(contacts)
  const formatSocial: any = keyValuePairs(socials)
  const [initialValues, setInitialValues] = useState({
    fName: '',
    lName: '',
    email: '',
    message: '',
    phoneNo: '',
    countryCode: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true)
    await Enquiry.create(values).catch(() => {})
    setLoading(false)
    resetForm()
  }

  const contactInfos = [
    {
      title: 'Phone Call',
      desc: formatContact?.phoneNo,
      icon: CallSvg,
      href: `tel:${formatContact?.phoneNo}`,
    },
    {
      title: 'Email',
      desc: formatContact?.email,
      icon: SmsSvg,
      href: `mailto:${formatContact?.email}`,
    },
    {
      title: 'Social Media',
      icon: MediaSvg,
      render: () => {
        return (
          <Row
            styleRow="column-gap:15px;justify-content:center;
            a{
              img{
                transition:0.5s;
              }
              &:hover{
                img{
                  transform:scale(1.1);
                }
              }
            }
          "
          >
            {/* <StyleContactInfoLink href={formatSocial?.linkedin} target="_blank">
              <Image src={LinkdinPrimarySvg} width={25} />
            </StyleContactInfoLink>
            <StyleContactInfoLink href={formatSocial?.facebook} target="_blank">
              <Image src={FacebookPrimarySvg} width={25} />
            </StyleContactInfoLink> */}
            <StyleContactInfoLink
              href={formatSocial?.instagram}
              target="_blank"
            >
              <Image src={InstagramPrimarySvg} width={25} />
            </StyleContactInfoLink>
          </Row>
        )
      },
    },
  ]
  return (
    <>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <StyleContactHeader>
        <Image
          src={ContactHeading}
          styleImage={`
          width:100%;
          @media(max-width:767px){
            height:160px;
            object-fit:cover;
          }
        `}
        />
        <StyleContactContactWrapper>
          <Container>
            <Column
              styleColumn={`
                justify-content:center;height:100%;
                @media(max-width:767px){
                  padding:20px 0px;
                }
            `}
            >
              <ScrollAnimation
                animateIn="bounceInLeft"
                delay={500}
                animateOnce={true}
              >
                <StyleContactTitle>Contact Us</StyleContactTitle>
                <StyleContactDesc>
                  Got any questions? Whether you have questions about our
                  events, need guidance on pregnancy-related topics, or simply
                  want to connect, we're here to help. Feel free to send us an
                  email or give us a call anytime.
                </StyleContactDesc>
              </ScrollAnimation>
            </Column>
          </Container>
        </StyleContactContactWrapper>
      </StyleContactHeader>
      <Column
        styleColumn="
          margin:80px 0px;
          @media(max-width:1024px){
            margin:40px 0px;
          }
          @media(max-width:767px){
            margin:30px 0px;
          }
        "
      >
        <Container>
          <StyleContactInfoGrid>
            {contactInfos?.map((item, index) => {
              return (
                <Column
                  className="contact-info-item"
                  styleColumn={
                    'align-items:center;row-gap:20px;border-right:1px solid #D3EBE5;@media(max-width:480px){width:160px;.animated{text-align:center;word-break:break-all}}'
                  }
                >
                  <ScrollAnimation
                    animateIn="fadeInUpBig"
                    animateOnce={true}
                    delay={500 + index * 20}
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Image src={item.icon} width={40} />
                    <Column
                      styleColumn="
                          row-gap:10px;align-items:center;
                          
                    "
                    >
                      <StyleContactInfoGridTitle>
                        {item.title}
                      </StyleContactInfoGridTitle>
                      {!!item.desc ? (
                        <a href={item.href}>
                          <StyleContactInfoGridDesc>
                            {item.desc}
                          </StyleContactInfoGridDesc>
                        </a>
                      ) : (
                        <>{item?.render && item?.render()}</>
                      )}
                    </Column>
                  </ScrollAnimation>
                </Column>
              )
            })}
          </StyleContactInfoGrid>
          <ScrollAnimation
            animateIn="bounceInLeft"
            delay={500}
            animateOnce={true}
          >
            <StyleContactFormBg>
              <StyleContactFormTitle>Leave A Message</StyleContactFormTitle>
              <Column className="contact-form-wrapper">
                <Formik
                  validationSchema={validationShema}
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                >
                  {({ setFieldValue, errors }: any) => {
                    return (
                      <Form style={{ marginTop: 30 }}>
                        <Column
                          styleColumn={`
                          row-gap:40px;
                          @media (max-width: 1024px) {
                            flex-direction: column;
                            row-gap: 20px;
                          }
                          @media(max-width:767px){
                            row-gap:10px;
                          }
                      `}
                        >
                          <StyleRow>
                            <FormField
                              type="text"
                              name="fName"
                              placeholder="First Name*"
                              styleForm={styleContactForm}
                              styleWrapper={styleWrapper}
                            />
                            <FormField
                              type="text"
                              name="lName"
                              placeholder="Last Name*"
                              styleForm={styleContactForm}
                              styleWrapper={styleWrapper}
                            />
                          </StyleRow>
                          <StyleRow>
                            <FormField
                              type="text"
                              name="email"
                              placeholder="Email*"
                              styleForm={styleContactForm}
                              styleWrapper={styleWrapper}
                            />
                            <Row
                              styleRow={`
                              width:48.5%;
                              @media (max-width: 1024px) {
                                width:100%;
                              }
                            `}
                            >
                              <PhoneInput
                                country={'ae'}
                                value={``}
                                onChange={(phoneNumber, countryCode: any) => {
                                  setFieldValue('phoneNo', phoneNumber)
                                  setFieldValue(
                                    'countryCode',
                                    countryCode?.dialCode,
                                  )
                                }}
                              />
                            </Row>
                          </StyleRow>
                          {!!errors?.phoneNo && (
                            <p
                              style={{
                                fontSize: 14,
                                color: 'red',
                                marginTop: -30,
                              }}
                            >
                              {errors?.phoneNo}
                            </p>
                          )}
                          <FormField
                            type="textarea"
                            name="message"
                            placeholder="Your Message"
                            styleForm={styleContactMessageForm}
                          />
                          <Row styleRow="justify-content:flex-end;">
                            <ButtonShadow background={'secondary50'} radius={8}>
                              <Button
                                loading={loading}
                                type="submit"
                                title="Registration"
                                height={50}
                                width={150}
                                background={`secondary`}
                                radius={8}
                                buttonStyle="
                                @media (max-width: 1024px) {
                                  height:40px;
                                  font-size:14px;
                                }
                              "
                              />
                            </ButtonShadow>
                          </Row>
                        </Column>
                      </Form>
                    )
                  }}
                </Formik>
              </Column>
            </StyleContactFormBg>
          </ScrollAnimation>
        </Container>
      </Column>
      {window?.innerWidth < 800 && (
        <Column
          className="contact-info-item"
          styleColumn={'align-items:center;margin-bottom:30px;'}
        >
          <ScrollAnimation
            animateIn="fadeInUpBig"
            animateOnce={true}
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image src={MediaSvg} width={40} />
            <Column
              styleColumn="
                  row-gap:10px;align-items:center;
                  
            "
            >
              <StyleContactInfoGridTitle>
                Social Media
              </StyleContactInfoGridTitle>
              <Row
                styleRow="column-gap:15px;justify-content:center;
            a{
              img{
                transition:0.5s;
              }
              &:hover{
                img{
                  transform:scale(1.1);
                }
              }
            }
          "
              >
                {/* <StyleContactInfoLink
                  href={formatSocial?.linkedin}
                  target="_blank"
                >
                  <Image src={LinkdinPrimarySvg} width={25} />
                </StyleContactInfoLink>
                <StyleContactInfoLink
                  href={formatSocial?.facebook}
                  target="_blank"
                >
                  <Image src={FacebookPrimarySvg} width={25} />
                </StyleContactInfoLink> */}
                <StyleContactInfoLink
                  href={formatSocial?.instagram}
                  target="_blank"
                >
                  <Image src={InstagramPrimarySvg} width={25} />
                </StyleContactInfoLink>
              </Row>
            </Column>
          </ScrollAnimation>
        </Column>
      )}
      <ScrollAnimation animateIn="bounceInRight" delay={500} animateOnce={true}>
        <JourneySection />
      </ScrollAnimation>
    </>
  )
}

export default Contact
