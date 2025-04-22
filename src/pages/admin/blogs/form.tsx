import { Button, Column, FormField, Row, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { Blog } from '../../../apis'
import { constants } from '../../../utils'
const validationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  tag: yup.string().required('Tag is required'),
  image: yup
    .mixed()
    .required('Image is required')
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
})
const updateValidationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  tag: yup.string().required('tag is required'),
  image: yup
    .mixed()
    .test('fileSize', 'File size is too large', function (value: any) {
      if (!value) return true
      return value.size <= constants.FILE_SIZE
    })
    .test('fileFormat', 'Unsupported file format', function (value: any) {
      if (!value) return true
      return constants.SUPPORTED_FORMATS.includes(value.type)
    }),
})
const AdminBlogsForm = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    title: state?.title || null,
    description: state?.description || null,
    image: null,
    tag: state?.tag || null,
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    const { image, ...restValues } = values
    if (!id) {
      await Blog.create(values)
        .then(() => {
          navigate('/admin/diaries')
        })
        .catch((err) => {})
    } else {
      await Blog.update(!!image ? values : restValues, id)
        .then(() => {
          navigate('/admin/diaries')
        })
        .catch((err) => {})
    }
    setLoading(false)
  }
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit Diary' : 'Create Diary'}
        buttonLink="/admin/diaries"
        buttonTitle="Back"
      />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={!!id ? updateValidationShema : validationShema}
        >
          {() => {
            return (
              <Form>
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    name="title"
                    label="Title"
                    placeholder="Title"
                    type="text"
                  />
                  <FormField name="image" label="Image" type="file" />
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
                    name="tag"
                    label="Tag"
                    type="text"
                    placeholder="Tag"
                  />
                  <FormField
                    name="description"
                    label="Description"
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
export default AdminBlogsForm
