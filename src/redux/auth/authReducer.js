import authActionTypes from './authActionTypes';

const initialState = {
    username: null,
    hasLoginError: false
}

const authReducer = (state = initialState, action) => {
    if(action.type === authActionTypes.SIGN_IN_SUCCESS) {
        return {
            username: action.payload,
            loginError: false
        };
    }
    else if(action.type === authActionTypes.SIGN_IN_FAILED) {
        return {
            ...state,
            hasLoginError: true
        };
    }
    else {
        return state;
    }
}

export default authReducer;