import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get() {
    const config: ReturnType = {
      url: '/partners',
      method: 'get',
      config: {
        showErr: true,
        store: {
          key: 'partners',
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
      url: '/partners/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'partners',
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
      url: `/partners/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'partners',
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
      url: `/partners/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'partners',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
