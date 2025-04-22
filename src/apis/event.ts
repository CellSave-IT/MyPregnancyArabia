import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get(params: any) {
    const config: ReturnType = {
      url: '/events',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'events',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getPast(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/events',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'pastEvents',
          action: action,
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getPastGallery(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/events',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'pastGallery',
          action: action,
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getUpcoming(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/events',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'upcomingEvents',
          action: action,
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getUpcomingSuggestion(params: any, action: 'set' | 'append' = 'set') {
    const config: ReturnType = {
      url: '/events',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'upcomingEventSuggestions',
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
      url: '/events/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Created Successfully',
        showErr: true,
        store: {
          key: 'events',
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
      url: `/events/update/${id}`,
      method: 'patch',
      data,
      config: {
        successMsg: 'Updated Successfully',
        showErr: true,
        store: {
          key: 'events',
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
      url: `/events/${id}`,
      method: 'get',
      config: {
        showErr: true,
        store: {
          action: 'set',
          key: 'event',
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
      url: `/events/delete/${id}`,
      method: 'delete',
      config: {
        successMsg: 'Deleted Successfully',
        showErr: true,
        store: {
          key: 'events',
          action: 'remove',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getRegistered(params: any) {
    const config: ReturnType = {
      url: '/registrations',
      method: 'get',
      params,
      config: {
        showErr: true,
        store: {
          key: 'registrations',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },

  async getAllRegistered(params: any) {
    const config: ReturnType = {
      url: '/registrations',
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

  async register(data: any) {
    const config: ReturnType = {
      url: '/registrations/store',
      method: 'post',
      data,
      config: {
        successMsg: 'Registered Successfully',
        showErr: true,
        store: {
          key: 'events',
          action: 'append',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async payment(data: any) {
    const config: ReturnType = {
      url: '/registrations/payment',
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
  async paymentCheck(data: any) {
    const config: ReturnType = {
      url: '/registrations/payment/check',
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
