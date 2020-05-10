import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { order } from './components/Order'
// import { query } from './components/Query'
// import { ticket } from './components/Ticket'
import { train_Journey } from './components/Journey'
// 生成一个整体的reducer函数
const reducers = combineReducers({
  // order,
  // query,
  // ticket,
  train_Journey,
})
// 创建store,thunk中间件支持异步action
const store = createStore(reducers, applyMiddleware(thunk))
export default store
 
// 每个文件一个store的时候这么用
// export default createStore(
//   combineReducers(reducers),
//   {
//       from: '北京',
//       to: '上海',
//       isCitySelectorVisible: false,
//       currentSelectingLeftCity: false,
//       cityData: null,
//       isLoadingCityData: false,
//       isDateSelectorVisible: false,
//       departDate: Date.now(),
//       highSpeed: false,
//   },
//   applyMiddleware(thunk)
// );
// export default {
//   from(state = '北京', action) {
//       const { type, payload } = action;
//       switch(type) {
//           case ACTION_SET_FROM:
//               return payload;
//           default:
//       }

//       return state;
//   },
// }