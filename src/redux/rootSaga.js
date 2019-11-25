import { all, call } from 'redux-saga/effects';

import { watchLoginAsync } from './auth/authSagas';

export default function* rootSaga() {
    yield all([
        call(watchLoginAsync)
    ])
}