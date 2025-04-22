import axios from 'axios'
import { store, Actions } from '../store'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const headers: any = {
  //'Content-Type': 'application/json',
}
const baseUrl =
  process.env.NODE_ENV == 'production'
    ? process.env.APP_PROD_BASEURL
    : process.env.APP_DEV_BASEURL
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers,
})

const request = async (params: any) => {
  const { config, headers = {}, ...restProps } = params
  const user: any = localStorage.getItem('fts-my-pregnancy-token')
  if (user) {
    const parseToken = JSON.parse(user)
    headers.Authorization = `${parseToken.token}`
  }
  try {
    const response = await axiosInstance({ ...restProps, headers })
    const { data } = response
    if (!!config) {
      config.onSuccess && config.onSuccess(data)
      if (config?.successMsg) {
        toast.success(config?.successMsg)
      }
      if (config.store) {
        const { action, key } = config.store
        const actionType: 'set' | 'update' | 'remove' | 'reset' = action
        if (action !== 'reset') {
          store.dispatch(Actions[actionType](key, data))
        } else {
          store.dispatch(Actions['reset'](key))
        }
      }
    }
    return data
  } catch (err: any) {
    if (!!config.showErr) {
      toast.error(err.response.data.message)
    }
    if (err?.response?.data?.message === 'Token in invalid') {
      localStorage.removeItem('fts-my-pregnancy-token')
      window.location.href = '/login'
    }
    throw new Error(err)
  }
}

export default request
