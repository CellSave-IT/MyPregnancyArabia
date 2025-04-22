import { Button, Column, FormField, Row, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useEffect, useState } from 'react'
import * as yup from 'yup'
import { Community, CommunityCategory } from '../../../apis'
import { constants } from '../../../utils'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
const validationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  categoryId: yup.string().required('Category is required'),
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
  categoryId: yup.string().required('Category is required'),
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
const AdminCommunitiesForm = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const categories: [] = useSelector(Select.communityCategories)
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    title: state?.title || null,
    description: state?.description || null,
    image: null,
    categoryId: state?.categoryId?._id || null,
  })
  const fetchData = async () => {
    await CommunityCategory.get()
  }
  const handleSubmit = async (values) => {
    setLoading(true)
    const { image, ...restValues } = values
    if (!id) {
      await Community.create(values)
        .then(() => {
          navigate('/admin/communities')
        })
        .catch((err) => {})
    } else {
      await Community.update(!!image ? values : restValues, id)
        .then(() => {
          navigate('/admin/communities')
        })
        .catch((err) => {})
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit Community' : 'Create Community'}
        buttonLink="/admin/communities"
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
                    name="categoryId"
                    label="Category"
                    type="dropdown"
                    data={categories}
                    selectProps={{
                      titleAsKey: 'title',
                      valueAsKey: '_id',
                    }}
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
export default AdminCommunitiesForm
