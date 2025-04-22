import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button, Image } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { GeneralSetting } from '../../../apis'
import { checkVideoOrImage } from '../../../utils/helpers'
const AdminBannerSetting = () => {
  const [imagePath, setImagePath] = useState('')
  const [initialValues, setInitialValues] = useState({
    title: '',
    image: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (values: any) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('key', 'banner')
    formData.append('value', values.title)
    if (!!values?.image) {
      formData.append('image', values?.image)
    }
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }
  const fetchData = async () => {
    await GeneralSetting.getByKey('banner')
      .then((res) => {
        setInitialValues({
          ...initialValues,
          title: res.data?.value,
        })
        setImagePath(res.data?.image || '')
      })
      .catch()
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader title={`Banner Settings`} />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {() => {
            return (
              <Form encType="multipart/Form-data">
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    name="title"
                    type="text"
                    label="Banner Text"
                    placeholder="Banner Text"
                    required
                  />

                  <FormField name="image" type="file" label="Banner" />
                  {!!initialValues?.image &&
                    checkVideoOrImage(imagePath) === 'image' && (
                      <Image
                        src={`${process.env.APP_IMAGE_URL}${imagePath}`}
                        width={200}
                        height={150}
                      />
                    )}
                  {!!imagePath && checkVideoOrImage(imagePath) === 'video' && (
                    <video width="320" height="240" controls>
                      <source
                        src={`${process.env.APP_IMAGE_URL}${imagePath}`}
                        type="video/mp4"
                      ></source>
                      <source
                        src={`${process.env.APP_IMAGE_URL}${imagePath}`}
                        type="video/ogg"
                      ></source>
                    </video>
                  )}
                  {!!imagePath && checkVideoOrImage(imagePath) === 'image' && (
                    <Image
                      src={`${process.env.APP_IMAGE_URL}${imagePath}`}
                      styleImage={{ width: 200, height: 150 }}
                    />
                  )}

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

export default AdminBannerSetting
