import { request } from '../utils'
import { ReturnType } from './types'

export default {
  async getByKey(key: string) {
    const config: ReturnType = {
      url: `/generalSettings/key/${key}`,
      method: 'get',
      config: {
        showErr: true,
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
  async getByGroup(group: string) {
    const config: ReturnType = {
      url: `/generalSettings/group/${group}`,
      method: 'get',
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
      url: '/generalSettings/store',
      method: 'post',
      data: data,
      config: {
        showErr: true,
        successMsg: 'Updated Successfully',
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
