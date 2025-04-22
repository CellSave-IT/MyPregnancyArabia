import { request } from '../utils'
import { ReturnType } from './types'
export default {
  async get() {
    const config: ReturnType = {
      url: '/dashboard',
      method: 'get',
      config: {
        showErr: true,
        store: {
          key: 'dashboard',
          action: 'set',
        },
      },
    }
    return await request(config).catch((err) => {
      throw new Error(err)
    })
  },
}
