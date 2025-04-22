import { Button, Column, FormField, Row } from '../../../components'
import AdminInnerPageHeader from '../../../section/admin/AdminInnerPageHeader'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { Formik, Form } from 'formik'
import { useState } from 'react'
import * as yup from 'yup'
import { Auth } from '../../../apis'
const validationSchema = yup.object().shape({
  name: yup.string().required('Username is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
  confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
})
const updateValidationSchema = yup.object().shape({
  name: yup.string().required('Username is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
})
const AdminUserForm = () => {
  const { id } = useParams()
  const { state } = useLocation()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [initialValues, setIntialValues] = useState({
    name: state.name || null,
    username: state?.username || null,
    email: state?.email || null,
    password: null,
    confirm: null,
  })
  const handleSubmit = async (values) => {
    setLoading(true)
    const { confirm, ...resetValues } = values
    if (!id) {
      await Auth.register(resetValues)
        .then(() => {
          navigate('/admin/users')
        })
        .catch((err) => {})
    } else {
      const { password, ...rest } = resetValues
      await Auth.update(rest, id)
        .then(() => {
          navigate('/admin/users')
        })
        .catch(() => {})
    }
    setLoading(false)
  }
  return (
    <Column>
      <AdminInnerPageHeader
        title={!!id ? 'Edit User' : 'Create User'}
        buttonLink="/admin/users"
        buttonTitle="Back"
      />
      <Column styleColumn="padding:30px 20px;">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={!!id ? updateValidationSchema : validationSchema}
        >
          {() => {
            return (
              <Form>
                <Column styleColumn="row-gap:20px;">
                  <FormField
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                  />
                  <FormField
                    type="text"
                    name="username"
                    placeholder="Username"
                    label="Username"
                  />
                  <FormField
                    type="email"
                    name="email"
                    placeholder="Email"
                    label="Email"
                  />
                  {!id && (
                    <>
                      <FormField
                        type="password"
                        name="password"
                        placeholder="Password"
                        label="Password"
                      />
                      <FormField
                        type="password"
                        name="confirm"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                      />
                    </>
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
export default AdminUserForm
