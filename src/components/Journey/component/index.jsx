import React,{useCallback, useMemo} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css'
import Header from '../../common/Header'
import Journey from './Journey'
import HighSpeed from './HighSpeed'
import DepartDate from './DepartDate'
import Submit from './Submit'
import CitySelector from '../../common/CitySelector'

import {
    exchangeFromTo,
    showCitySelector,
    hideCitySelector,
    fetchCityData,
    setSelectedCity,
    // showDateSelector,
    // hideDateSelector,
    // setDepartDate,
    // toggleHighSpeed,
} from '../state/action';

function JourneyWrap (props){
    const {
        from,
        to,
        isCitySelectorVisible,
        // isDateSelectorVisible,
        cityData,
        isLoadingCityData,
        // highSpeed,
        // dispatch,
        // departDate,
    } = props;
    const {
        exchangeFromTo,
        showCitySelector,
        fetchCityData,
        hideCitySelector,
        setSelectedCity,
    } = props
    const onBack = useCallback(() => {
        // window.history.back();
    }, []);

    return <div>
        <div className="header-wrapper">
            <Header title="火车票" onBack={onBack}/>
        </div>
        <div className="form">
            <Journey 
                from={from} 
                to={to}
                exchangeFromTo={exchangeFromTo}
                showCitySelector={showCitySelector}
            />
            <DepartDate/>
            <HighSpeed/>
            <Submit/>
        </div>
        <CitySelector
                show={isCitySelectorVisible}
                cityData={cityData}
                isLoading={isLoadingCityData}
                fetchCityData={fetchCityData}
                hideCitySelector={hideCitySelector}
                onSelect={setSelectedCity}
            />
       
    </div>
}
// mapStateToProps() in Connect(JourneyWrap) must return a plain object
// 所用state用Immutable,必须一个一个取出来
const mapStateToProps = (state) =>{
    return {
        from: state.train_Journey.get('from'),
        to: state.train_Journey.get('to'),
        isCitySelectorVisible: state.train_Journey.get('isCitySelectorVisible'),
        isLoadingCityData: state.train_Journey.get('isLoadingCityData'),
        cityData: state.train_Journey.get('cityData'),
    }
    // return state.train_Journey
}
const mapDispatchToProps = (dispatch) => {
    const methods = {
        exchangeFromTo,
        showCitySelector,
        fetchCityData,
        hideCitySelector,
        setSelectedCity,
    }
    return { ...bindActionCreators(methods, dispatch) }
}
export default connect(mapStateToProps,mapDispatchToProps)(JourneyWrap);