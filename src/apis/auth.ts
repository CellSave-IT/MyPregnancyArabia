import { request } from '../utils'
import { ReturnType } from './types'
import axios from 'axios'
export default {
  async login(data: any) {
    const config: ReturnType = {
      url: '/admin/login',
      method: 'post',
      data,
      config: {
        successMsg: 'Login Successfully',
        showErr: true,
        store: {
          key: 'user',
          action: 'set',
        },
        onSuccess: async (res: any) => {
          if (!!res) {
            axios.defaults.headers.Authorization = `Bearer ${res?.data?.token}`
            localStorage.setItem(
              'fts-my-pregnancy-token',
              JSON.stringify(res.data),
            )
          }
        },
      },
    }
    return await request(config)
  },
  async register(data: any) {
    const config: ReturnType = {
      url: '/admin/register',
      method: 'post',
      data,
      config: {
        successMsg: 'Register Successfully',
        showErr: true,
        store: {
          key: 'users',
          action: 'set',
        },
      },
    }
    return await request(config)
  },
  async update(data: any, id) {
    const config: ReturnType = {
      url: `/admin/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'users',
          action: 'set',
        },
      },
    }
    return await request(config)
  },
  async get() {
    const config: ReturnType = {
      url: '/admin',
      method: 'get',
      config: {
        showErr: true,
        store: {
          key: 'users',
          action: 'set',
        },
      },
    }
    return await request(config)
  },
}
