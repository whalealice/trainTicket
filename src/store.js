import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { order } from './components/order'
import { query } from './components/query'
import { ticket } from './components/ticket'
// 生成一个整体的reducer函数
const reducers = combineReducers({
  order,
  query,
  ticket,
})
// 创建store,thunk中间件支持异步action
const store = createStore(reducers, applyMiddleware(thunk))
export default store  