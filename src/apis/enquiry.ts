import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any) {
    const config: ReturnType = {
      url: '/enquiry',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'enquiry',
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
      url: '/enquiry/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Enquiry send Successfully',
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
