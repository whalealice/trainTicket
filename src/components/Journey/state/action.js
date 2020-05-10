import axios from 'axios'
export const ACTION_SET_FROM = 'SET_FROM';
export const ACTION_SET_TO = 'SET_TO';
export const ACTION_CHANGE_FROM_TO = 'SET_CHANGE_FROM_TO';
export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'SET_IS_CITY_SELECTOR_VISIBLE';
export const ACTION_SET_CURRENT_SELECTING_LEFT_CITY = 'SET_CURRENT_SELECTING_LEFT_CITY';
export const ACTION_SET_CITY_DATA = 'SET_CITY_DATA';
export const ACTION_SET_IS_LOADING_CITY_DATA = 'index => set is loading city data';
export const ACTION_SET_IS_DATE_SELECTOR_VISIBLE = 'SET_IS_DATE_SELECTOR_VISIBLE';
export const ACTION_SET_HIGH_SPEED = 'SET_HIGH_SPEED';
export const ACTION_SET_DEPART_DATE = 'SET_DEPART_DATE';
// 切换城市
export function exchangeFromTo() {
    return (dispatch, getState) => {
        const { from, to } = getState().train_Journey.toJS();
        dispatch({
            type: ACTION_CHANGE_FROM_TO,
            payload: { from: to, to: from },
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

        // dispatch({
        //     type: ACTION_SET_CURRENT_SELECTING_LEFT_CITY,
        //     payload: currentSelectingLeftCity,
        // });
    };
}
export function fetchCityData() {
    return (dispatch, getState) => {
        const { isLoadingCityData } = getState();

        if (isLoadingCityData) {
            return;
        }
        //  写入缓存设置过期时间
        // const cache = JSON.parse(localStorage.getItem('city_data_cache') || '{}');

        // if (Date.now() < cache.expires) {
        //     dispatch({
        //         type: ACTION_SET_CITY_DATA,
        //         payload: cache.data,
        //     });
        //     return;
        // }

        dispatch({
            type: ACTION_SET_IS_LOADING_CITY_DATA,
            payload: true
        });

        axios.get('/rest/cities?_' + Date.now())
            .then(res => {
                const cityData = res.data.data
                console.log('aaaa', res.data)
                dispatch({
                    type: ACTION_SET_CITY_DATA,
                    payload: cityData,
                });
               
                // localStorage.setItem(
                //     'city_data_cache',
                //     JSON.stringify({
                //         expires: Date.now() + 60 * 1000,
                //         data: cityData,
                //     }),
                // );

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