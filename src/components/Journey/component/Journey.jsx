import React from 'react'
import { connect } from 'react-redux';
import './style.css'

function Journey(props){
    console.log('222', props)
    return <div>
        Journey
    </div>
}
export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(Journey);