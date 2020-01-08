import { put, call, takeLatest } from 'redux-saga/effects';
import http from "./../http";
import {push} from 'connected-react-router';

function* loginSaga(data) {
    yield put({ type: 'LOGIN_USER_LOADING' });
    try {
        const response = yield call(() => http.post("auth/login",data.payload));
        yield put({ type: 'LOGIN_USER_SUCCESS', payload: response });
        yield put(push("/welcome"));
    } catch (error) {
        yield put({ type: 'LOGIN_USER_ERROR', payload: error.response });
    }
    yield put({type:'LOGIN_USER_LOADED'});
}

export default function* watchLoginSaga() {
    yield takeLatest("USER_LOGIN", loginSaga);
}