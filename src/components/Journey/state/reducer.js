import Immutable from 'immutable'
import {
    ACTION_SET_FROM,
    ACTION_SET_TO,
    ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    ACTION_SET_CITY_DATA,
    ACTION_SET_IS_LOADING_CITY_DATA,
    ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
} from './action';
const createInitialState = () => {
    return Immutable.fromJS({
        from: '北京',
        to: '上海',
        isCitySelectorVisible: false,
        currentSelectingLeftCity: false, // 城市选择左边还是右边
        cityData: null,
        isLoadingCityData: false,
        isDateSelectorVisible: false,
        departDate: Date.now(),
        highSpeed: false,
    })
}
export default function reducer(state = createInitialState(), action) {
    switch (action.type) {
        case ACTION_SET_FROM:
            return state.set('from', action.payload)
        case ACTION_SET_TO:
            return state.set('to', action.payload)
        case ACTION_SET_IS_CITY_SELECTOR_VISIBLE:
            return state.set('isCitySelectorVisible', action.payload)
        case ACTION_SET_CURRENT_SELECTING_LEFT_CITY:
            return state.set('currentSelectingLeftCity', action.payload)
        case ACTION_SET_CITY_DATA:
            return state.set('cityData', action.payload)
        case ACTION_SET_IS_LOADING_CITY_DATA:
            return state.set('isLoadingCityData', action.payload)
        default:
            return state
    }
}