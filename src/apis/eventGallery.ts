import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any, id: string) {
    const config: ReturnType = {
      url: `/events/galleries/${id}`,
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'eventGalleries',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async create(data: any, id: string) {
    const config: ReturnType = {
      url: `/events/galleries/store/${id}`,
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'eventGalleries',
          action: 'append',
        },
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async delete(id: string) {
    const config: ReturnType = {
      url: `/events/galleries/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'eventGalleries',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
