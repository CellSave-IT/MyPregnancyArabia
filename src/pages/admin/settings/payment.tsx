import { Form, Formik } from 'formik'
import { Column, FormField, Row, Button } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useEffect, useState } from 'react'
import { GeneralSetting } from '../../../apis'
const AdminPayment = () => {
  const [initialValues, setInitialValues] = useState({
    storeId: '',
    secretKey: '',
    fees: '',
    mode: '',
    callback: '',
  })
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (values: any) => {
    setLoading(true)
    await GeneralSetting.store([
      { key: 'storeId', value: values?.storeId, group: 'payment' },
      { key: 'secretKey', value: values?.secretKey, group: 'payment' },
      { key: 'fees', value: values?.fees, group: 'payment' },
      { key: 'mode', value: values?.mode, group: 'payment' },
      { key: 'callback', value: values?.callback, group: 'payment' },
    ]).catch(() => {})
    setLoading(false)
  }
  const fetchData = async () => {
    await GeneralSetting.getByGroup('payment')
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
      <AdminInnerPageHeader title={`Payment Setting`} />
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
                    type="text"
                    label="Store Id"
                    name="storeId"
                    placeholder="Store Id"
                    required
                  />
                  <FormField
                    type="text"
                    label="Secret Key"
                    name="secretKey"
                    placeholder="Secret Key"
                    required
                  />
                  <FormField
                    type="text"
                    label="Fees"
                    name="fees"
                    placeholder="Fees"
                    required
                  />
                  <FormField
                    type="dropdown"
                    label="Mode"
                    name="mode"
                    required
                    selectProps={{
                      titleAsKey: 'label',
                      valueAsKey: 'value',
                    }}
                    data={[
                      {
                        label: 'Test',
                        value: '1',
                      },
                      {
                        label: 'Production',
                        value: '0',
                      },
                    ]}
                  />
                  <FormField
                    type="url"
                    label="Callback Url"
                    name="callback"
                    placeholder="Callback Url"
                    required
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

export default AdminPayment
