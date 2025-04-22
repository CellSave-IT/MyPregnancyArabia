import { Column, Container, Image, FormField, Button } from '../../components'
import { LogoSvg } from '../../assets'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { Auth } from '../../apis'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
const validationShema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})
const Login = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const auth = useAuth()
  const initialValues = {
    username: '',
    password: '',
  }
  const navigate = useNavigate()
  const handleSubmit = async (values) => {
    setLoading(true)
    await Auth.login(values)
      .then((res) => {
        navigate('/admin/dashboard')
      })
      .catch(() => {
        console.log('login failed')
      })
    setLoading(false)
  }
  return (
    <>
      {!!auth ? (
        <Navigate to="/admin/dashboard" />
      ) : (
        <Column styleColumn="height:100vh;background:#f5f5f5;width:100%">
          <Container>
            <Column styleColumn="width:100%;height:100%;align-items:center;justify-content:center;">
              <Column styleColumn="width:35%;padding:40px 20px;background:white;border-radius:20px;">
                <Column styleColumn="margin-bottom:20px">
                  <Image src={LogoSvg} height={100} />
                </Column>
                <Formik
                  onSubmit={handleSubmit}
                  initialValues={initialValues}
                  validationSchema={validationShema}
                >
                  {() => {
                    return (
                      <Form>
                        <Column styleColumn={`row-gap:20px;`}>
                          <FormField
                            name="username"
                            label="Username"
                            placeholder="Username"
                            type="text"
                          />
                          <FormField
                            name="password"
                            label="Password"
                            placeholder="Password"
                            type="password"
                          />

                          <Button
                            type="submit"
                            height={50}
                            title="Login"
                            buttonStyle="font-size:16px;"
                            loading={loading}
                          />
                        </Column>
                      </Form>
                    )
                  }}
                </Formik>
              </Column>
            </Column>
          </Container>
        </Column>
      )}
    </>
  )
}

export default Login
