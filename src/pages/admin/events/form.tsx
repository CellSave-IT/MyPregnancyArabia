import { Button, Column, FormField, Row, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { Event } from '../../../apis'
import { constants } from '../../../utils'
import moment from 'moment'
const validationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  date: yup.date().required('Date is required'),
  startTime: yup.string().required('Start Time is required'),
  endTime: yup.string().required('End Time is required'),
  image: yup
    .mixed()
    .required()
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
  banner: yup
    .mixed()
    .required()
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
  type: yup.string().required('Type is required'),
  singlePrice: yup.string().nullable(),
  doublePrice: yup.string().nullable(),
  entryTypes: yup
    .array()
    .of(yup.string().oneOf(['single', 'double'], 'Invalid entry type'))
    .min(1, 'At least one entry is required'),
})
const updateValidationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  date: yup.date().required('Date is required'),
  startTime: yup.string().required('Start Time is required'),
  endTime: yup.string().required('End Time is required'),
  type: yup.string().required('Type is required'),
  image: yup
    .mixed()
    .nullable()
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
  banner: yup
    .mixed()
    .nullable()
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
  singlePrice: yup.string().nullable(),
  doublePrice: yup.string().nullable(),
  entryTypes: yup
    .array()
    .of(yup.string().oneOf(['single', 'double'], 'Invalid entry type'))
    .min(1, 'At least one entry is required'),
})
const AdminEventsForm = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    title: state?.title || null,
    description: state?.description || null,
    image: '',
    banner: '',
    location: state?.location || null,
    date: state?.date ? moment(state?.date).format('YYYY-MM-DD') : null,
    startTime: state?.startTime || null,
    endTime: state?.endTime || null,
    type: state?.type || null,
    singlePrice: state?.singlePrice || null,
    doublePrice: state?.doublePrice || null,
    entryTypes:
      state?.entryType === 'single'
        ? ['single']
        : state?.entryType === 'double'
          ? ['double']
          : state?.entryType === 'both'
            ? ['single', 'double']
            : [],
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const { image, banner, ...restValues } = values
    let data = restValues
    if (!!image) {
      data = { ...restValues, image: image }
    }
    if (!!banner) {
      data = { ...restValues, banner: banner }
    }

    if (!id) {
      await Event.create(values)
        .then(() => navigate('/admin/events'))
        .catch(() => {})
    } else {
      await Event.update(data, id)
        .then(() => navigate('/admin/events'))
        .catch(() => {})
    }
    setLoading(false)
  }
  console.log(state)
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit Event' : 'Create Event'}
        buttonLink="/admin/events"
        buttonTitle="Back"
      />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={!!id ? updateValidationShema : validationShema}
        >
          {({ values, setFieldValue, errors }: any) => {
            return (
              <Form encType="multipart/form-data">
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    name="title"
                    label="Title"
                    placeholder="Title"
                    type="text"
                  />
                  <FormField
                    name="location"
                    label="Location"
                    placeholder="Location"
                    type="text"
                  />
                  <Column>
                    <Column>
                      <label
                        style={{
                          fontSize: 16,
                          color: '#3AB8B7',
                          marginBottom: 7,
                        }}
                      >
                        Select Entry
                      </label>
                    </Column>
                    <Row
                      styleRow={{
                        columnGap: 10,
                      }}
                    >
                      <Row>
                        <label>Single</label>
                        <input
                          checked={
                            values?.entryTypes?.includes('single')
                              ? true
                              : false
                          }
                          name="single"
                          type="checkbox"
                          onChange={(event) => {
                            const isChecked = event.target.checked
                            let updatedEntryTypes = values.entryTypes || []
                            if (!!isChecked) {
                              updatedEntryTypes = [
                                ...updatedEntryTypes,
                                'single',
                              ]
                            } else {
                              updatedEntryTypes = updatedEntryTypes.filter(
                                (entry) => entry !== 'single',
                              )
                              setFieldValue('singlePrice', null)
                            }
                            setFieldValue('entryTypes', updatedEntryTypes)
                          }}
                        />
                      </Row>

                      <Row>
                        <label>Double</label>
                        <input
                          checked={
                            values?.entryTypes?.includes('double')
                              ? true
                              : false
                          }
                          name="double"
                          type="checkbox"
                          onChange={(event) => {
                            const isChecked = event.target.checked
                            let updatedEntryTypes = values.entryTypes || []
                            if (!!isChecked) {
                              updatedEntryTypes = [
                                ...updatedEntryTypes,
                                'double',
                              ]
                            } else {
                              setFieldValue('doublePrice', null)
                              updatedEntryTypes = updatedEntryTypes.filter(
                                (entry: any) => entry !== 'double',
                              )
                            }
                            setFieldValue('entryTypes', updatedEntryTypes)
                          }}
                        />
                      </Row>
                    </Row>

                    {!!errors?.entryTypes && (
                      <Column styleColumn={`margin-top:35px;`}>
                        <p
                          style={{
                            fontSize: 14,
                            color: 'red',
                            marginTop: -30,
                          }}
                        >
                          {errors?.entryTypes}
                        </p>{' '}
                      </Column>
                    )}
                  </Column>
                  <Row
                    styleRow={{
                      width: '100%',
                      justifyContent: 'space-between',
                      columnGap: 10,
                    }}
                  >
                    <Column styleColumn={`width:50%;`}>
                      <FormField name="date" type="date" label="Date" />
                    </Column>
                    <Row styleRow={`width:50%;column-gap:10px;`}>
                      <FormField
                        name="startTime"
                        type="time"
                        label="Start Time"
                        styleWrapper="width:50%;"
                      />
                      <FormField
                        name="endTime"
                        type="time"
                        label="End Time"
                        styleWrapper="width:50%;"
                      />
                    </Row>
                  </Row>
                  <Row
                    styleRow={{
                      width: '100%',
                      justifyContent: 'space-between',
                      columnGap: 10,
                    }}
                  >
                    <Column styleColumn={`width:50%;`}>
                      <FormField
                        name="image"
                        label="Image"
                        placeholder="Image"
                        type="file"
                      />
                    </Column>
                    <Column styleColumn={`width:50%;`}>
                      <FormField
                        label="Type"
                        name="type"
                        type="dropdown"
                        selectProps={{
                          titleAsKey: 'label',
                          valueAsKey: 'value',
                        }}
                        data={[
                          {
                            label: 'Free',
                            value: 'Free',
                          },
                          {
                            label: 'Paid',
                            value: 'Paid',
                          },
                        ]}
                      />
                    </Column>
                  </Row>
                  {values?.type === 'Paid' &&
                    values?.entryTypes.includes('single') && (
                      <FormField
                        name="singlePrice"
                        label="Single Entry Price"
                        placeholder="Single Entry Price"
                        type="number"
                      />
                    )}
                  {values?.type === 'Paid' &&
                    values?.entryTypes.includes('double') && (
                      <FormField
                        name="doublePrice"
                        label="Double Entry Price"
                        placeholder="Double Entry Price"
                        type="number"
                      />
                    )}

                  {!!id && !!state?.image && (
                    <a
                      href={`${process.env.APP_IMAGE_URL}${state?.image}`}
                      target="_blank"
                    >
                      <Image
                        width={50}
                        height={50}
                        src={`${process.env.APP_IMAGE_URL}${state?.image}`}
                      />
                    </a>
                  )}
                  <FormField
                    name="banner"
                    label="Banner"
                    placeholder="Banner"
                    type="file"
                  />
                  {!!id && !!state?.banner && (
                    <a
                      href={`${process.env.APP_IMAGE_URL}${state?.banner}`}
                      target="_blank"
                    >
                      <Image
                        width={50}
                        height={50}
                        src={`${process.env.APP_IMAGE_URL}${state?.banner}`}
                      />
                    </a>
                  )}
                  <FormField
                    name="description"
                    label="Description"
                    placeholder="Description"
                    type="editor"
                  />
                  <Row styleRow="justify-content:flex-end">
                    <Button
                      type="submit"
                      title="Submit"
                      height={40}
                      width={120}
                      background={`primary400`}
                      loading={loading}
                    />
                  </Row>
                </Column>
              </Form>
            )
          }}
        </Formik>
      </Column>
    </Column>
  )
}

export default AdminEventsForm
