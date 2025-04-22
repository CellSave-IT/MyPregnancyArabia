import { useLocation, useParams } from 'react-router-dom'
import { Column, Row, Image, Button } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import {
  StyleImageItemsWrapper,
  StyleInfoTitle,
  StyleBrowseLabel,
  StyleBrowseInput,
  StyleImageItem,
} from './style'
import { Form, Formik } from 'formik'
import { useEffect, useState } from 'react'
import { EventGallery } from '../../../apis'
import { useSelector } from 'react-redux'
import { Select } from '../../../store'
import { FaTimes } from 'react-icons/fa'

const AdminEventsGallery = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [urls, setUrls] = useState<any[]>([])
  const [params, setParams] = useState<any>({
    page: 1,
    pageSize: 30,
  })
  const [loading, setLoading] = useState<boolean>(false)
  const { data, pagination }: any = useSelector(Select.eventGalleries)
  const fetchData = async () => {
    await EventGallery.get(params, id)
  }
  const handleDelete = async (id) => {
    await EventGallery.delete(id)
  }
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true)
    await EventGallery.create(
      {
        images: values?.images,
      },
      id,
    )
      .then(() => {
        setUrls([])
        resetForm()
      })
      .catch(() => {})
    setLoading(false)
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader
        title={'Event Galleries'}
        buttonTitle="Back"
        buttonLink="/admin/events"
      />
      <Column styleColumn="padding:30px 20px;">
        <StyleInfoTitle>{state.title}</StyleInfoTitle>

        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            images: [],
          }}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form>
                <Column>
                  <Row
                    styleRow={{
                      justifyContent: 'center',
                      marginBottom: 30,
                      marginTop: 30,
                    }}
                  >
                    <StyleBrowseLabel htmlFor="browse">
                      Browse File
                      <StyleBrowseInput
                        accept="image/png, image/gif, image/jpeg, image/svg"
                        id="browse"
                        type="file"
                        multiple
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
                    </StyleBrowseLabel>
                  </Row>
                </Column>
                {!!urls?.length && (
                  <>
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
                    </StyleImageItemsWrapper>
                    <Row styleRow={{ justifyContent: 'flex-end' }}>
                      <Button
                        type="submit"
                        width={100}
                        height={40}
                        loading={loading}
                      >
                        Upload
                      </Button>
                    </Row>
                  </>
                )}
              </Form>
            )
          }}
        </Formik>
        <StyleImageItemsWrapper style={{ marginTop: 20 }}>
          {!!data?.length &&
            data?.map((value: any, index: number) => {
              return (
                <StyleImageItem key={index}>
                  <Image
                    src={`${process.env.APP_IMAGE_URL}${value.image}`}
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
                      handleDelete(value._id)
                    }}
                  >
                    <FaTimes color="white" size={16} />
                  </Button>
                </StyleImageItem>
              )
            })}
        </StyleImageItemsWrapper>
      </Column>
    </Column>
  )
}

export default AdminEventsGallery
