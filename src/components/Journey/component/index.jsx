import React from 'react'
import './style.css'
import Header from '../../common/Header'
import Journey from './Journey'
import HighSpeed from './HighSpeed'
import DepartDate from './DepartDate'
import Submit from './Submit'

export default function JourneyWrap (){
    return <div>
        <Header/>
        <Journey/>
        <DepartDate/>
        <HighSpeed/>
        <Submit/>
    </div>
}