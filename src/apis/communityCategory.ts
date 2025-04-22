import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get() {
    const config: ReturnType = {
      url: '/communityCategories',
      method: 'get',
      config: {
        showErr: true,
        store: {
          key: 'communityCategories',
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
      url: '/communityCategories/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'communityCategories',
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
      url: `/communityCategories/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'communityCategories',
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
      url: `/communityCategories/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'communityCategories',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
