import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/testimonials',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'testimonials',
          action: action,
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async create(data: any) {
    const config: ReturnType = {
      url: '/testimonials/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'testimonials',
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
  async update(data: any, id: string) {
    const config: ReturnType = {
      url: `/testimonials/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'testimonials',
          action: 'update',
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
      url: `/testimonials/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'testimonials',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
