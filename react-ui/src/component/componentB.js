import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { test2 } from '../actions/action_test2'

const componentB = ({test2,yourtest2}) => {
    return (
        <div className="text-to-center">
            HELLO FROM component B
            <button className="test-btn" onClick={test2}>{yourtest2}</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        yourtest2: state.test2,
    };
};
const mapDispatchToProps = (dispatch) => bindActionCreators({
    test2

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(componentB);