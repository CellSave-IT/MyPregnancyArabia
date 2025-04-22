import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button } from '../../../components'
import {
  StyleFormTitle,
  styleFormBg,
  StyleRow,
  styleContactForm,
  styleFormItemWrapper,
} from './style'
import * as yup from 'yup'
import { Download, GeneralSetting } from '../../../apis'
import { useState } from 'react'
import { FaRegTimesCircle } from 'react-icons/fa'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const validationShema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup.string().email().required('Email is required'),
  deliveryHospital: yup.string().required('Hospital Name is required'),
  date: yup.date().required('Due Date is required'),
  phoneNo: yup.string().required('Phone No is required'),
  countryCode: yup.string().required('Country Code is required'),
})
interface BabySizeFormProps {
  isModal?: boolean
  onClose?: () => void
}
const BabySizeForm = ({ isModal = false, onClose }: BabySizeFormProps) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (values: any, { resetForm }) => {
    setLoading(true)
    await GeneralSetting.getByKey('babySizeFile')
      .then(async (res) => {
        await Download.store(values).then(async () => {
          await fetch(`${process.env.APP_IMAGE_URL}${res.data?.image}`)
            .then((response) => response.blob())
            .then((blob) => {
              const blobUrl = window.URL.createObjectURL(blob)
              const link = document.createElement('a')
              link.href = blobUrl
              link.target = '_blank'
              link.setAttribute('download', 'baby-size.pdf')
              document.body.appendChild(link)
              link.click()
              window.URL.revokeObjectURL(blobUrl)
              document.body.removeChild(link)
            })
            .catch(() => {})
        })
        resetForm()
      })
      .catch(() => {})
    setLoading(false)
  }
  return (
    <Column styleColumn={styleFormBg}>
      {!!isModal && (
        <FaRegTimesCircle
          color="white"
          size={40}
          style={{ marginBottom: 20 }}
          stroke={'0px'}
          onClick={onClose}
        />
      )}
      <StyleFormTitle>
        download the pregnancy guide week 4-40 - comprehensive guide
      </StyleFormTitle>
      <Formik
        initialValues={{
          fName: '',
          lName: '',
          date: '',
          deliveryHospital: '',
          email: '',
          phoneNo: '',
          countryCode: '',
        }}
        validationSchema={validationShema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors }: any) => {
          return (
            <Form>
              <Column
                className="download-wrapper"
                styleColumn={`row-gap:20px;`}
              >
                <FormField
                  type="text"
                  name="fName"
                  placeholder="First Name*"
                  styleForm={styleContactForm}
                />
                <FormField
                  type="text"
                  name="lName"
                  placeholder="Family Name*"
                  styleForm={styleContactForm}
                />
                <StyleRow>
                  <Column
                    styleColumn={`
                    width:48.5%;
                    @media (max-width: 640px) {
                      width:100%;
                    }
                   
                    .react-datepicker__input-container input {
                      border-radius: 10px !important;
                      border: 0px;
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

                      @media(max-width:767px){
                        height:45px;
                      }
                     

                    }
                    @media(max-width:767px){
                      width:100%;
                    
                    }

                  `}
                  >
                    <DatePicker
                      selected={values?.date}
                      onChange={(date: any) => {
                        setFieldValue('date', moment(date).format('YYYY-MM-DD'))
                      }}
                      placeholderText="Due Date"
                    />
                    {!!errors?.date && (
                      <p
                        style={{
                          fontSize: '14px',
                          color: 'red',
                          marginTop: 10,
                        }}
                      >
                        {errors?.date}
                      </p>
                    )}
                  </Column>
                  <FormField
                    type="text"
                    name="deliveryHospital"
                    placeholder="Delivery Hospital*"
                    styleWrapper={styleFormItemWrapper}
                    styleForm={styleContactForm}
                  />
                </StyleRow>
                <FormField
                  type="email"
                  name="email"
                  placeholder="Email*"
                  styleForm={styleContactForm}
                />
                <Column>
                  <PhoneInput
                    country={'ae'}
                    value={``}
                    onChange={(phoneNumber, countryCode: any) => {
                      setFieldValue('phoneNo', phoneNumber)
                      setFieldValue('countryCode', countryCode?.dialCode)
                    }}
                  />
                  {!!errors?.phoneNo && (
                    <p
                      style={{ fontSize: '14px', color: 'red', marginTop: 10 }}
                    >
                      {errors?.phoneNo}
                    </p>
                  )}
                </Column>
                <Row>
                  <Button
                    height={50}
                    buttonStyle="padding:0px 30px"
                    type="submit"
                    radius={10}
                    background="primary"
                    loading={loading}
                  >
                    {' '}
                    Download
                  </Button>
                </Row>
              </Column>
            </Form>
          )
        }}
      </Formik>
    </Column>
  )
}

export default BabySizeForm
