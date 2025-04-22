import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { GeneralSetting } from '../../../apis'
const AdminSocialMediaSetting = () => {
  const [initialValues, setInitialValues] = useState({
    linkedin: '',
    facebook: '',
    instagram: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (values: any) => {
    setLoading(true)
    await GeneralSetting.store([
      { key: 'linkedin', value: values?.linkedin, group: 'social' },
      { key: 'instagram', value: values?.instagram, group: 'social' },
      { key: 'facebook', value: values?.facebook, group: 'social' },
    ]).catch(() => {})
    setLoading(false)
  }
  const fetchData = async () => {
    await GeneralSetting.getByGroup('social')
      .then((res) => {
        if (res.data) {
          const updatedValues = res.data.reduce(
            (acc, data) => {
              acc[data.key] = data.value
              return acc
            },
            { ...initialValues },
          )

          setInitialValues(updatedValues)
        }
      })
      .catch()
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <Column>
      <AdminInnerPageHeader title={`Social Media Settings`} />
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
                    name="facebook"
                    type="url"
                    label="Facebook"
                    placeholder="Facebook"
                  />
                  <FormField
                    name="instagram"
                    type="url"
                    label="Instagram"
                    placeholder="Instagram"
                  />
                  <FormField
                    name="linkedin"
                    type="url"
                    label="Linkedin"
                    placeholder="Linkedin"
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

export default AdminSocialMediaSetting
