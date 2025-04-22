import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any) {
    const config: ReturnType = {
      url: '/subscribes',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'subscribes',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async create(data: any) {
    const config: ReturnType = {
      url: '/subscribes/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Subscribe Successfully',
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
