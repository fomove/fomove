import { call, put, takeEvery } from 'redux-saga/effects';
import API from '../api/api';

import { IMG_UPLOAD_REQUEST, IMG_UPLOAD_SUCCESS, IMG_UPLOAD_BEGIN } from '../constants/constants';

export function* createRequest(action) {
    console.log('sagas');
    try {
        yield put({type: IMG_UPLOAD_BEGIN});
       let response = yield call(API.post, '/upload', action.payload.formData);
       
       console.log('response',response);
        yield put({type: IMG_UPLOAD_SUCCESS, payload: {
            filename: action.payload.fileName,
            url: response.data.url
        }});
    } catch (error) {
        console.log('createRequest error', error);
    }
}

export default function* watchUploadRequest() {
    console.log('sagas');
    yield takeEvery(IMG_UPLOAD_REQUEST, createRequest);
}