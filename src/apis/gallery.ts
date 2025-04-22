import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any) {
    const config: ReturnType = {
      url: '/galleries',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'galleries',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async getFront(params: any) {
    const config: ReturnType = {
      url: '/galleries',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'frontGalleries',
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
      url: '/galleries/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'galleries',
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
      url: `/galleries/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'galleries',
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
  async find(id: string) {
    const config: ReturnType = {
      url: `/galleries/${id}`,
      method: 'get',
      config: {
        showErr: true,
        store: {
          action: 'set',
          key: 'gallery',
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
      url: `/galleries/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'galleries',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async deleteImage(id: string) {
    const config: ReturnType = {
      url: `/galleries/deleteImage/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
