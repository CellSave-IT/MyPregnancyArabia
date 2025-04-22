import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { GeneralSetting } from '../../../apis'
const AdminContactSetting = () => {
  const [initialValues, setInitialValues] = useState({
    phoneNo: '',
    email: '',
  })
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = async (values: any) => {
    setLoading(true)
    await GeneralSetting.store([
      { key: 'phoneNo', value: values?.phoneNo, group: 'contactInfo' },
      { key: 'email', value: values?.email, group: 'contactInfo' },
    ]).catch(() => {})
    setLoading(false)
  }
  const fetchData = async () => {
    await GeneralSetting.getByGroup('contactInfo')
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
      <AdminInnerPageHeader title={`Contact Settings`} />
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
                    name="phoneNo"
                    type="text"
                    label="Phone No"
                    placeholder="Phone No"
                  />
                  <FormField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
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

export default AdminContactSetting
