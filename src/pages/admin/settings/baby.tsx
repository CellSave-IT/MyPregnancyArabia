import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { GeneralSetting } from '../../../apis'
const AdminBabyFile = () => {
  const [initialValues, setInitialValues] = useState({
    image: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [imagePath, setImagePath] = useState('')

  const handleSubmit = async (values: any) => {
    setLoading(true)
    const formData = new FormData()
    formData.append('key', 'babySizeFile')
    formData.append('image', values?.image)
    await GeneralSetting.store(formData).catch(() => {})
    setLoading(false)
  }
  const fetchData = async () => {
    await GeneralSetting.getByKey('babySizeFile')
      .then((res) => {
        setImagePath(res.data?.image || '')
      })
      .catch()
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader title={`Uplode Baby Size Pdf`} />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {() => {
            return (
              <Form>
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    name="image"
                    type="file"
                    label="Pdf File"
                    required
                  />
                  {!!imagePath && (
                    <a
                      href={`${process.env.APP_IMAGE_URL}${imagePath}`}
                      target="_blank"
                    >
                      View Pdf File
                    </a>
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

export default AdminBabyFile
