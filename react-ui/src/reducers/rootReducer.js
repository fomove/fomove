import { combineReducers } from 'redux';
import test from './reducer_test';
import imgUpload from './imgUpload';
import test2 from './reducer_test2';

const rootReducer = combineReducers({
    test,
    test2,
    imgUpload
})
export default rootReducer;