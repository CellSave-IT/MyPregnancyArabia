import { produce } from 'immer'
import { SET, UPDATE, REMOVE, RESET, APPEND } from './types'
import initialState from './initialState'
const reducer = (
  state: any = initialState,
  action: {
    key?: keyof typeof initialState
    data?: any
    type: string
  },
) =>
  produce(state, (draft: any) => {
    const actionKey: any = action.key
    const response = action.data
    switch (action?.type) {
      case SET:
        if (!!draft[actionKey]['data']) {
          draft[actionKey]['data'] = response.data.items
          if (response.data.currentPage) {
            draft[actionKey]['pagination'] = {
              totalPages: response?.data?.totalPages,
              currentPage: response?.data?.currentPage,
            }
          }
        } else {
          draft[actionKey] = response.data
        }
        break
      case APPEND:
        if (draft[actionKey] && draft[actionKey]?.length) {
          draft[actionKey] = [...[response.data], ...draft[actionKey]]
        }
        if (draft[actionKey]['data'] && draft[actionKey]['data']?.length) {
          if (Array.isArray(response?.data)) {
            draft[actionKey]['data'] = [
              ...response.data,
              ...draft[actionKey]['data'],
            ]
          } else if (response?.data?.items && draft[actionKey]['data']) {
            draft[actionKey]['data'] = [
              ...draft[actionKey]['data'],
              ...response.data?.items,
            ]
            draft[actionKey]['pagination'] = {
              totalPages: response?.data?.totalPages,
              currentPage: response?.data?.currentPage,
            }
          } else {
            draft[actionKey]['data'] = [
              ...[response.data],
              ...draft[actionKey]['data'],
            ]
          }
        }
        break
      case UPDATE:
        if (
          Array.isArray(draft[actionKey]) ||
          Array.isArray(draft[actionKey]['data'])
        ) {
          let updateState = [...(state[actionKey]['data'] || state[actionKey])]
          const findIndex = updateState?.findIndex(
            (find: any) => find?._id === response?.data?._id,
          )
          if (findIndex >= 0 && updateState[findIndex]) {
            updateState[findIndex] = {
              ...updateState[findIndex],
              ...response?.data,
            }
          } else {
            updateState = [...[action.data], ...updateState]
          }
          if (draft[actionKey]['data']) {
            draft[actionKey]['data'] = updateState
          } else {
            draft[actionKey] = updateState
          }
        } else if (typeof draft[actionKey] === 'object') {
          draft[actionKey] = { ...draft[actionKey], ...response.data }
        }

        break
      case REMOVE:
        if (draft[actionKey]['data']) {
          draft[actionKey]['data'] = state[actionKey]['data'].filter(
            (item: any) => item?._id !== response.data._id,
          )
        } else if (draft[actionKey]) {
          draft[actionKey] = state[actionKey].filter(
            (item: any) => item?._id !== response.data._id,
          )
        }
        break
      case RESET:
        break
    }
  })

export default reducer
