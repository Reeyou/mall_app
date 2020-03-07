import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'


const middleWare = [
  thunk
]

/**
 * 创建store
 */
export default createStore(reducer, applyMiddleware(...middleWare))