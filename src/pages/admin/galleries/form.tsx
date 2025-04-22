import { Button, Column, FormField, Row, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { Gallery } from '../../../apis'
import { constants } from '../../../utils'
import { StyleImageItemsWrapper, StyleImageItem } from '../events/style'
import { FaTimes } from 'react-icons/fa'

const validationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  images: yup
    .array()
    .of(
      yup
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
    )
    .required('Images are required')
    .min(1, 'At least one image is required'),
})
const updateValidationShema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  images: yup.array().nullable(),
})
const AdminGalleriesForm = () => {
  const { id } = useParams()
  const location = useLocation()
  const { state } = location
  const [loading, setLoading] = useState<boolean>(false)
  const [urls, setUrls] = useState<any[]>([])

  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    title: state?.title || null,
    description: state?.description || null,
    images: [],
  })
  const handleDelete = async (id) => {
    await Gallery.deleteImage(id).then(() => {
      navigate(location.pathname, {
        replace: true,
        state: {
          ...state,
          images: state?.images?.filter((item) => item?._id !== id),
        },
      })
    })
  }
  const handleSubmit = async (values) => {
    setLoading(true)
    const { image, ...restValues } = values
    if (!id) {
      await Gallery.create(values)
        .then(() => navigate('/admin/galleries'))
        .catch(() => {})
    } else {
      await Gallery.update(!!image ? values : restValues, id)
        .then(() => navigate('/admin/galleries'))
        .catch(() => {})
    }
    setLoading(false)
  }
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit Gallery' : 'Create Gallery'}
        buttonLink="/admin/galleries"
        buttonTitle="Back"
      />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={!!id ? updateValidationShema : validationShema}
        >
          {({ setFieldValue, values }) => {
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
                    name="images"
                    label="Images"
                    type="file"
                    multiple
                    isSet={false}
                    onChange={(event: any) => {
                      const filesArray = Array.from(event.target.files)
                      const images = !!values?.images?.length
                        ? values?.images
                        : []
                      setFieldValue('images', [...images, ...filesArray])

                      filesArray.forEach((file: any) => {
                        const reader = new FileReader()
                        reader.onloadend = () => {
                          setUrls((prev) => {
                            return [...prev, reader.result]
                          })
                        }
                        reader.readAsDataURL(file)
                      })
                    }}
                  />

                  <StyleImageItemsWrapper>
                    {urls?.map((value: string, index: number) => {
                      return (
                        <StyleImageItem key={index}>
                          <Image
                            src={value}
                            styleImage={{ width: '100%', height: 200 }}
                          />
                          <Button
                            background={`danger`}
                            type="button"
                            width={30}
                            height={30}
                            radius={30}
                            buttonStyle="position: absolute;top:-10px;right:-10px"
                            onClick={() => {
                              setUrls(
                                urls?.filter(
                                  (item: any, j: number) => j !== index,
                                ),
                              )
                              setFieldValue(
                                'images',
                                values?.images?.filter(
                                  (item: any, j: number) => j !== index,
                                ),
                              )
                            }}
                          >
                            <FaTimes color="white" size={16} />
                          </Button>
                        </StyleImageItem>
                      )
                    })}
                    {!!state?.images?.length && (
                      <>
                        {state?.images?.map((value: any, index: number) => {
                          return (
                            <StyleImageItem key={index}>
                              <Image
                                src={`${process.env.APP_IMAGE_URL}${value?.image}`}
                                styleImage={{ width: '100%', height: 200 }}
                              />
                              <Button
                                background={`danger`}
                                type="button"
                                width={30}
                                height={30}
                                radius={30}
                                buttonStyle="position: absolute;top:-10px;right:-10px"
                                onClick={() => {
                                  handleDelete(value?._id)
                                }}
                              >
                                <FaTimes color="white" size={16} />
                              </Button>
                            </StyleImageItem>
                          )
                        })}
                      </>
                    )}
                  </StyleImageItemsWrapper>

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

export default AdminGalleriesForm
