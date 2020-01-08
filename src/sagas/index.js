import { all, call } from 'redux-saga/effects';
import watchLoginSaga from './auth';

export default function* rootSaga() {
    yield all([
        call(watchLoginSaga)
    ]);
}