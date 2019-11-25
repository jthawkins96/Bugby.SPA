import authActionTypes from './authActionTypes';

const signInStart = (username, password, history) => ({ type: authActionTypes.SIGN_IN_START, payload: { username, password, history } })

const signInSuccess = (username) => ({ type: authActionTypes.SIGN_IN_SUCCESS, payload: username })

const signInFailed = () => ({ type: authActionTypes.SIGN_IN_FAILED })

const authActions = {
    signInStart,
    signInSuccess,
    signInFailed
}

export default authActions;