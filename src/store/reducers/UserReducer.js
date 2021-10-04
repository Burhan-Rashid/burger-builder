import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    expiry: null
}

const authStart = (state, action) => {
    return { ...state, loading: true, error: null }
}
const authFailed = (state, action) => {
    return { ...state, loading: false, error: action.error }
}
const authSuccess = (state, action) => {
    return { ...state, loading: false, token: action.token, userId: action.userId, expiry: action.expiry }
}
const authLogout = (state, action) => {
    return { ...state, token: null, userId: null, expiry: null }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_FAILED: return authFailed(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        default: return state;
    }
};

export default reducer;
