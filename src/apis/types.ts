export interface Config {
  store?: {
    action?: 'set' | 'update' | 'reset' | 'remove' | 'append'
    key?: string
  }
  successMsg?: string
  showErr?: boolean

  onSuccess?: (data: any) => void
}

export interface ReturnType {
  url: string
  method: 'post' | 'patch' | 'put' | 'delete' | 'get'
  data?: any
  params?: any
  config?: Config
  headers?: any
}
