import axios from 'axios'
export const ACTION_SET_FROM = 'index => change from';
export const ACTION_SET_TO = 'index => change to';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'index => set city selector visible';
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'index => set current selecting left city';
export const ACTION_SET_CITY_DATA = 'index => set city select data';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'index => set is loading city data';
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'index => set date select visible';
export const ACTION_SET_HIGH_SPEED = 'index => set hight speed';
export const ACTION_SET_DEPART_DATE = 'index => set depart date';
// 切换城市
export function exchangeFromTo() {
    return (dispatch, getState) => {
        const { from, to } = getState().train_Journey.toJS();
        dispatch({
            type: ACTION_SET_FROM,
            payload: to,
        })
        dispatch({
            type: ACTION_SET_TO,
            payload: from,
        })
    };
}
// 显示城市选择浮层
export function showCitySelector(currentSelectingLeftCity) {
    return (dispatch) => {
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            payload: true,
        });
        console.log('4444',currentSelectingLeftCity)
        dispatch({
            type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
            payload: currentSelectingLeftCity,
        });
    };
}
// 关闭城市选择浮层
export function hideCitySelector() {
    return (dispatch)=>{
        dispatch({
            type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
            payload: false,
        });
    }
   
}
// 获取城市选择列表
export function fetchCityData() {
    return (dispatch, getState) => {
        const { isLoadingCityData } = getState();

        if (isLoadingCityData) {
            return;
        }
        //  写入缓存设置过期时间
        const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');

        if (Date.now() < cache.expires) {
            dispatch({
                type: ACTION_SET_CITY_DATA,
                payload: cache.data,
            });
            return;
        }

        dispatch({
            type: ACTION_SET_IS_LOADING_CITY_DATA,
            payload: true
        });

        axios.get('/rest/cities?_' + Date.now())
            .then(res => {
                const cityData = res.data
                dispatch({
                    type: ACTION_SET_CITY_DATA,
                    payload: cityData,
                });
               
                localStorage.setItem(
                    'city_data_cache',
                    JSON.stringify({
                        expires: Date.now() + 60 * 1000,
                        data: cityData,
                    }),
                );

                dispatch({
                    type: ACTION_SET_IS_LOADING_CITY_DATA,
                    payload: false
                });
            })
            .catch((err) => {
                dispatch({
                    type: ACTION_SET_IS_LOADING_CITY_DATA,
                    payload: false
                });
                console.log('err', err)
            });
    };
}

// 城市选择选择
export function setSelectedCity(city) {
    return (dispatch, getState) => {
        const { currentSelectingLeftCity } = getState().train_Journey.toJS();
        if (currentSelectingLeftCity) { // 左边
            dispatch({
                type: ACTION_SET_FROM,
                payload: city,
            });
        } else {
            dispatch({
                type: ACTION_SET_TO,
                payload: city,
            });
        }
        dispatch( hideCitySelector())
    };
}