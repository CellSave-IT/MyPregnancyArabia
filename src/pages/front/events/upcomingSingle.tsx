import {
  EmailSecondarySvg,
  LinkedinSecondarySvg,
  WhatsAppSecondarySvg,
} from '../../../assets'
import { Column, Container, Row, Image, FormField } from '../../../components'
import {
  StyleEventDetailsTitle,
  StyleEventInfoText,
  StyleShareText,
  StyleContentWrapper,
  styleWrapper,
  StyleRow,
  StyleContactFormBg,
  StyleContactFormTitle,
  styleContactForm,
  styleContactMessageForm,
  StyleRadioLabel,
  StyleRadioInput,
} from './style'
import Button, { ButtonShadow } from '../../../components/Button'
import { useLocation, useParams } from 'react-router-dom'
import moment from 'moment'
import EventSection from '../../../section/EventSection'
import InnerPageHeader from '../../../section/InnerPageHeader'
import { useNavigate } from 'react-router-dom'
import { Event } from '../../../apis'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { Helmet } from 'react-helmet'
import ScrollAnimation from 'react-animate-on-scroll'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { removeHtmlTags } from '../../../utils/helpers'
const validationShema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  description: yup.string().required('How did you here about us is required'),
  nationality: yup.string().required('Nationality is required'),
  deliveryHospital: yup.string().required('Hospital Name is required'),
  dueDate: yup.date().required('Due Date is required'),
  doctorName: yup.string().required('Doctor Name is required'),
  phoneNo: yup.string().required('Phone No is required'),
  entryType: yup.string().required('Entry Type is required'),
})

const UpcomingEventDetails = () => {
  const location = useLocation()
  const { state } = location
  const params: any = useParams()
  const queryParams = new URLSearchParams(location.search)
  const type = queryParams.get('type')
  const ref = queryParams.get('ref')
  const [loading, setLoading] = useState<boolean>(false)
  const { data }: any = useSelector(Select.upcomingEventSuggestions)
  const event: any = useSelector(Select.event)
  const navigate = useNavigate()
  const fetchData = async () => {
    await Event.getUpcomingSuggestion({
      page: 1,
      pageSize: 3,
      type: 'Upcoming',
      id: params?.id,
    })
  }
  const fetchById = async () => {
    await Event.find(params?.id).catch(() => {
      navigate('/')
    })
  }
  const checkPayment = async () => {
    await Event.paymentCheck({
      ref: ref,
    })
      .then((resp) => {
        toast.success('Payment Success')
      })
      .catch()
  }

  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true)
    await Event.register({ ...values, event: params?.id })
      .then((resp) => {
        if (!resp?.data?.paymentUrl) {
          toast.success('Registered Successfully')
        } else {
          window.open(resp?.data?.paymentUrl)
        }
      })
      .catch(() => {})
    setLoading(false)

  }

  useEffect(() => {
    fetchData()
    fetchById()
    if (!!ref && type === 'success') {
      checkPayment()
    }

  }, [ref])

  
  return (
    <Column
      styleColumn="
    margin:80px 0px;
    @media(max-width:1024px){
      margin:60px 0px;
    }
    @media(max-width:767px){
      margin:40px 0px;
    }
  "
    >
      <Helmet>
        <title>{event?.title}</title>
        <meta property="og:title" content={state?.title || event?.title} />
        <meta
          property="og:description"
          content={state?.description || event?.description}
        />
        <meta property="og:url" content={`${window.location}`} />
        <meta
          property="og:image"
          content={`${process.env.APP_IMAGE_URL}${state?.image || event?.image}`}
        />
      </Helmet>
      <Container>   

        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={500}
          animateOnce={true}
        >
          <Row styleRow={{ justifyContent: 'space-between' }}>
            <Column styleColumn={`column-gap:20px`}>
              <StyleEventDetailsTitle type="secondary">
                {state?.title || event?.title}
              </StyleEventDetailsTitle>
              <Column
                styleColumn={`
                margin-top:30px;
                @media(max-width:767px){
                  margin-top:15px;
                }
              `}
              >
                <StyleEventInfoText type="secondary">
                  {moment(state?.date || event?.date).format('MMM DD, YYYY')}{' '}
                  {moment(state?.startTime || event?.startTime, 'HH:mm').format(
                    'h:mm a',
                  )}
                </StyleEventInfoText>
                <StyleEventInfoText type="secondary">
                  at {state?.location || event?.location}
                </StyleEventInfoText>
              </Column>
            </Column>
            <Column>
              <Column
                className="single-share-social"
                styleColumn={`
              row-gap:10px;
              
              @media(max-width:767px){
                div{
                  width:30px;
                  height:30px;
                }
                img{
                  width:15px;
                }
              }
            `}
              >
                <StyleShareText type="secondary">Share</StyleShareText>
                <Row
                  styleRow={{
                    border: '1px solid #C9A9D1',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={EmailSecondarySvg} width={20} />
                </Row>
                <Row
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(
                      `${window.location}`,
                    )
                    const link = `https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=${encodedMessage}`
                    window.open(link, '_blank')
                  }}
                  styleRow={{
                    border: '1px solid #C9A9D1',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={LinkedinSecondarySvg} />
                </Row>
                <Row
                  onClick={() => {
                    const encodedMessage = encodeURIComponent(
                      `${window.location}`,
                    )
                    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`
                    window.open(whatsappUrl, '_blank')
                  }}
                  styleRow={{
                    border: `1px solid #C9A9D1`,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                  }}
                >
                  <Image src={WhatsAppSecondarySvg} />
                </Row>
              </Column>
            </Column>
          </Row>
          <Column
            styleColumn={`
              margin-bottom:60px;
              @media(max-width:1024px){
                margin-bottom:40px;
              }
              @media(max-width:767px){
                margin-bottom:30px;
              }
            `}
          >
            {(!!state?.banner || !!event?.banner) && (
              <Column
                styleColumn={`margin-top:40px;media(max-width:1024px){
                  margin:40px 0px;
                }@media(max-width:767px){
                  margin-top:20px;
              }`}
              >
                <ScrollAnimation
                  animateIn="bounceInRight"
                  delay={400}
                  animateOnce={true}
                >
                  <Image
                    src={`${process.env.APP_IMAGE_URL}${state?.banner || event?.banner}`}
                    styleImage={`
                      width: 100%;
                      border-radius: 12px;
                      height: auto;
                      object-fit: cover;
                    
                    `}
                  />
                </ScrollAnimation>
              </Column>
            )}
            {!!event?.description &&
              removeHtmlTags(event?.description)?.length > 1 && (
                <Column styleColumn={{ marginTop: 30 }}>
                  <StyleContentWrapper
                    type="secondary"
                    dangerouslySetInnerHTML={{
                      __html: state?.description || event?.description,
                    }}
                  />
                </Column>
              )}
          </Column>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="bounceInLeft"
          delay={500}
          animateOnce={true}
        >
          <StyleContactFormBg>
            <StyleContactFormTitle>
              Registration For This Event
            </StyleContactFormTitle>
            <Column>
              <Formik
                validationSchema={validationShema}
                initialValues={{
                  fName: '',
                  lName: '',
                  email: '',
                  description: '',
                  doctorName: '',
                  dueDate: '',
                  nationality: '',
                  deliveryHospital: '',
                  phoneNo: '',
                  isPregnant: true,
                  previousAttend: true,
                  entryType: '',
                }}
                onSubmit={handleSubmit}
              >
                {({ setFieldValue, values, errors }: any) => {
                  return (
                    <Form style={{ marginTop: 30 }}>
                      <Column
                        styleColumn={`
                          row-gap:40px;
                          @media(max-width:1024px){
                            row-gap:20px;
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
                            name="nationality"
                            placeholder="Nationality*"
                            styleForm={styleContactForm}
                            styleWrapper={styleWrapper}
                          />
                          <Row
                            styleRow={`
                            justify-content: space-between;
                            width: 48%;
                            @media(max-width:1024px){
                              width:100%;
                              flex-direction:column;
                              row-gap:10px;
                            }
                          `}
                          >
                            <StyleRadioLabel>
                              Are You Pregnant ?
                            </StyleRadioLabel>
                            <Row styleRow={{ columnGap: 20 }}>
                              <Row
                                styleRow={{
                                  columnGap: 10,
                                  alignItems: 'center',
                                }}
                              >
                                <StyleRadioInput
                                  name="isPregnant"
                                  type="radio"
                                  value="yes"
                                  checked={!!values.isPregnant ? true : false}
                                  onChange={(event) => {
                                    setFieldValue('isPregnant', true)
                                  }}
                                />
                                <StyleRadioLabel>Yes</StyleRadioLabel>
                              </Row>
                              <Row
                                styleRow={{
                                  columnGap: 10,
                                  alignItems: 'center',
                                }}
                              >
                                <StyleRadioInput
                                  name="isPregnant"
                                  type="radio"
                                  value="no"
                                  checked={!values.isPregnant ? true : false}
                                  onChange={(event) => {
                                    setFieldValue('isPregnant', false)
                                  }}
                                />
                                <StyleRadioLabel>No</StyleRadioLabel>
                              </Row>
                            </Row>
                          </Row>
                        </StyleRow>
                        <StyleRow>
                          <Column
                            styleColumn={`
                    width:48.5%;
                    @media (max-width: 640px) {
                      width:100%;
                    }
                   
                    .react-datepicker__input-container input {
                      border-radius: 10px !important;
                      border: 1px solid #E9DDED;
                      height: 60px;
                      width: 100%;
                      text-indent:30px; 
                      outline:none;
                      font-family:Poppins;
                      font-size:16px;
                      padding:0px;
                      &::placeholder{
                        color:#828282;
                        font-size:16px;
                        font-weight: 300;
                      }
                     

                    }
                    @media(max-width:767px){
                      width:100%;
                    }

                  `}
                          >
                            <DatePicker
                              selected={values?.dueDate}
                              onChange={(date: any) => {
                                setFieldValue(
                                  'dueDate',
                                  moment(date).format('YYYY-MM-DD'),
                                )
                              }}
                              placeholderText="Due Date"
                            />
                          </Column>
                          <FormField
                            type="text"
                            name="deliveryHospital"
                            placeholder="Delivery Hospital*"
                            styleWrapper={styleWrapper}
                            styleForm={styleContactForm}
                          />
                        </StyleRow>
                        <StyleRow>
                          <FormField
                            type="text"
                            name="doctorName"
                            placeholder="Your Doctor Name*"
                            styleWrapper={styleWrapper}
                            styleForm={styleContactForm}
                          />
                          <FormField
                            type="text"
                            name="email"
                            placeholder="Email*"
                            styleWrapper={styleWrapper}
                            styleForm={styleContactForm}
                          />
                        </StyleRow>
                        <StyleRow>
                          <Column
                            styleColumn={`
                          justify-content: space-between;
                          width: 48.5%;
                          @media(max-width:1024px){
                            width:100%;
                            flex-direction:column;
                            Column-gap:10px;
                          }
                        `}
                          >
                            <PhoneInput
                              country={'ae'}
                              value={``}
                              onChange={(phoneNumber, countryCode: any) => {
                                setFieldValue('phoneNo', phoneNumber)
                                // setFieldValue(
                                //   'countryCode',
                                //   countryCode?.dialCode,
                                // )
                              }}
                            />
                            {!!errors?.phoneNo && (
                              <p
                                style={{
                                  fontSize: '12px',
                                  color: 'red',
                                  marginTop: 10,
                                }}
                              >
                                {errors?.phoneNo}
                              </p>
                            )}
                          </Column>
                          <Row
                            styleRow={`
                            justify-content: space-between;
                            width: 48%;
                            @media(max-width:1024px){
                              width:100%;
                              flex-direction:column;
                              row-gap:10px;
                            }
                          `}
                          >
                            <StyleRadioLabel>
                              Did You Attend Our Previous Events ?
                            </StyleRadioLabel>
                            <Row styleRow={{ columnGap: 20 }}>
                              <Row
                                styleRow={{
                                  columnGap: 10,
                                  alignItems: 'center',
                                }}
                              >
                                <StyleRadioInput
                                  name="previousAttend"
                                  type="radio"
                                  checked={
                                    !!values.previousAttend ? true : false
                                  }
                                  value="yes"
                                  onChange={(event) => {
                                    setFieldValue('previousAttend', true)
                                  }}
                                />
                                <StyleRadioLabel>Yes</StyleRadioLabel>
                              </Row>
                              <Row
                                styleRow={{
                                  columnGap: 10,
                                  alignItems: 'center',
                                }}
                              >
                                <StyleRadioInput
                                  name="previousAttend"
                                  type="radio"
                                  value="no"
                                  checked={
                                    !values.previousAttend ? true : false
                                  }
                                  onChange={(event) => {
                                    setFieldValue('previousAttend', false)
                                  }}
                                />
                                <StyleRadioLabel>No</StyleRadioLabel>
                              </Row>
                            </Row>
                          </Row>
                        </StyleRow>
                        <StyleRow>
                          <FormField
                            type="dropdown"
                            name="description"
                            selectProps={{
                              titleAsKey: 'label',
                              valueAsKey: 'value',
                            }}
                            data={[
                              {
                                label: 'Google',
                                value: 'Google',
                              },
                              {
                                label: 'Facebook/Instagram',
                                value: 'Facebook/Instagram',
                              },
                              {
                                label: 'Word of mouth',
                                value: 'Word of mouth',
                              },
                              {
                                label: 'Doctor/hospital',
                                value: 'Doctor/hospital',
                              },
                              {
                                label: 'Others',
                                value: 'Others',
                              },
                            ]}
                            placeholder="How did you hear about us?*"
                            styleWrapper={styleWrapper}
                            styleForm={styleContactForm}
                          />
                          <FormField
                            type="dropdown"
                            name="entryType"
                            selectProps={{
                              titleAsKey: 'label',
                              valueAsKey: 'value',
                            }}
                             data = 
                         {   params.id === "67079d34c99381b7a32beb91" ? [
                              {
                                label: "49 AED Entry Fee",
                                value: "49 AED Entry Fee",
                              },
                            ] : params.id === "66e0018121b80216423646f8" ? [
                              {
                                label: "49 AED Entry Fee",
                                value: "49 AED Entry Fee",
                              },
                            ] : params.id == "671644f54e2d05f57eb5f1c7" ? [
                              {
                                label: "69 AED Single Entry Fee",
                                value: "69 AED Single Entry Fee",
                              }, {
                                label: "99 AED Parents Couple Entry Fee",
                                value: "99 AED Parents Couple Entry Fee",
                              }
                            ] : [
                              state?.type === 'Free' || event?.type === 'Free' ? 
                              {
                                label: "Free Entry",
                                value: "Free Entry",
                              } : {
                                label: "Paid Entry",
                                value: "Paid Entry",
                              }
                            ]}                     
                              placeholder="Select Entry"
                            styleWrapper={styleWrapper}
                            styleForm={styleContactForm}

                            // data={
                            //   state?.type === 'Free' || event?.type === 'Free'
                            //     ? [
                            //         // {
                            //         //   label: 'FREE Single Entry',
                            //         //   value: 'FREE Single Entry',
                            //         // },
                                    
                            //         {
                            //           label: `Free Entry`,
                            //           value: `Free Entry`,
                            //         },
                            //       ]
                            //     : event?.entryType === 'both'
                            //       ? [
                            //           {
                            //             label: `AED ${event?.singlePrice} Single Entry`,
                            //             value: 'Single Entry',
                            //           },
                            //           {
                            //             label: `AED ${event?.doublePrice} Couples Entry`,
                            //             value: 'Double Entry',
                            //           },
                            //         ]
                            //       : event?.entryType === 'single'
                            //         ? [
                            //             {
                            //               label: `AED ${event?.singlePrice} Single Entry`,
                            //               value: 'Single Entry',
                            //             },
                            //           ]
                            //         : [
                            //             {
                            //               label: `AED ${event?.doublePrice} Couples Entry`,
                            //               value: 'Double Entry',
                            //             },
                            //           ]
                            // }
     
                          />
                        </StyleRow>
                        <Row styleRow="justify-content:flex-end;">
                       
                              <label>
                                <input type="checkbox"  required />
                                I accept T&Cs and sharing my data with event’s partners for marketing purposes
                              </label>
                            
                        </Row>
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

        {!!data?.length && (
          <Column
            styleColumn={`margin-top:80px;@media(max-width:1024px){margin-top:40px}@media(max-width:767px){margin-top:30px;}`}
          >
            <ScrollAnimation
              animateIn="bounceInLeft"
              delay={500}
              animateOnce={true}
            >
              <InnerPageHeader
                styleDesc="width:60%;"
                title="More from our Upcoming Events"
                type="primary"
              />
            </ScrollAnimation>
            <Column
              styleColumn={
                'margin-top:60px;@media(max-width:767px){margin-top:30px;}'
              }
            >
              <EventSection
                theme={'primary'}
                buttonText="Read More"
                items={data}
                handleRead={(item) => {
                  navigate(`/events/upcoming/${item?._id}`, { state: item })
                }}
              />
            </Column>
          </Column>
        )}
      </Container>
    </Column>
  )
}

export default UpcomingEventDetails
