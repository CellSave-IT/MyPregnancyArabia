import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any) {
    const config: ReturnType = {
      url: '/diaries',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'blogs',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getFront(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/diaries',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'diaries',
          action: action,
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async top() {
    const config: ReturnType = {
      url: '/diaries',
      method: 'get',
      params: {
        orderBy: 'count',
        page: 1,
        pageSize: 5,
      },
      config: {
        showErr: true,
        store: {
          key: 'topBlogs',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async getSuggested(params = {}) {
    const config: ReturnType = {
      url: '/diaries',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'diarySuggestions',
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
      url: '/diaries/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'blogs',
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
      url: `/diaries/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'blogs',
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
  async updateCount(id: string) {
    const config: ReturnType = {
      url: `/diaries/update/count/${id}`,
      method: 'patch',
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async find(id: string) {
    const config: ReturnType = {
      url: `/diaries/${id}`,
      method: 'get',
      config: {
        showErr: true,
        store: {
          action: 'set',
          key: 'diary',
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
      url: `/diaries/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'blogs',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
