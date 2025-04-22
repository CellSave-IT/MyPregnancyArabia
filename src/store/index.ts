import { createStore } from 'redux'
import reducer from './reducer'
import * as Actions from './actions'
import Select from './selectors'

const store = createStore(reducer)
function checkReducerUpdate() {
  const updatedReducer = require('./reducer').default
  if (reducer !== updatedReducer) {
    store.replaceReducer(updatedReducer)
  }
}
store.subscribe(checkReducerUpdate)
export { store, Actions, Select }
