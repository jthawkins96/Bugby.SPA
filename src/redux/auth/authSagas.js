import { takeLatest, put, call } from 'redux-saga/effects';

import authActionTypes from './authActionTypes';
import authActions from './authActions';
import { loginInstance } from '../../axios/axiosConfig';


export function* watchLoginAsync() {
    yield takeLatest(authActionTypes.SIGN_IN_START, startLoginAsync)
}

function* startLoginAsync(action) {
    const data = {
        username: action.payload.username,
        password: action.payload.password
    }

    try {
        const response = yield call(loginInstance.post, null, data);
        sessionStorage.setItem('bearer_token', response.data.access_token);
        yield put(authActions.signInSuccess(action.payload.username))
        yield call(action.payload.history.push, '/')
    }
    catch(e) {
        console.log(e)
        yield put(authActions.signInFailed())
    }
}
