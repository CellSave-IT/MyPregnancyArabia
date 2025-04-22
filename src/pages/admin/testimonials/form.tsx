import { Button, Column, FormField, Row, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { Testimonial } from '../../../apis'
import { constants } from '../../../utils'
const validationShema = yup.object().shape({
  name: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
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
})

const AdminTestimonialForm = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    name: state?.name || null,
    description: state?.description || null,
    image: '',
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const { image, ...restValues } = values
    if (!id) {
      await Testimonial.create(values)
        .then(() => navigate('/admin/testimonials'))
        .catch(() => {})
    } else {
      await Testimonial.update(!!image ? values : restValues, id)
        .then(() => navigate('/admin/testimonials'))
        .catch(() => {})
    }
    setLoading(false)
  }
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit Testimonial' : 'Create Testimonial'}
        buttonLink="/admin/testimonials"
        buttonTitle="Back"
      />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationShema}
        >
          {() => {
            return (
              <Form encType="multipart/form-data">
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    name="name"
                    label="Name"
                    placeholder="Name"
                    type="text"
                  />
                  <FormField
                    name="image"
                    label="Image"
                    placeholder="Image"
                    type="file"
                  />
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
                    name="description"
                    label="Description"
                    placeholder="Description"
                    type="textarea"
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

export default AdminTestimonialForm
