import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params) {
    const config: ReturnType = {
      url: '/downloads',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'downloads',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async getAll(params) {
    const config: ReturnType = {
      url: '/downloads',
      method: 'get',
      params,
      config: {
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async store(data: any) {
    const config: ReturnType = {
      url: '/downloads/store',
      method: 'post',
      data,
      config: {
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
