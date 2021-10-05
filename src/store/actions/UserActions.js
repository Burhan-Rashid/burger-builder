import * as actionTypes from './ActionTypes';
import axios from "axios";

export const auth = (email, password, type) => {
    return dispatch => {
        dispatch({ type: actionTypes.AUTH_START });
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDTvw4dJzJWyFldau_z3TlFUe1YK7gnzBQ';
        if (type === "Login") {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDTvw4dJzJWyFldau_z3TlFUe1YK7gnzBQ';
        }
        axios.post(url, authData)
            .then(response => {
                const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                console.log(response.data);
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', response.data.localId);
                dispatch({ type: actionTypes.AUTH_SUCCESS, token: response.data.idToken, userId: response.data.localId, expiry: expirationDate });
                // dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch({ type: actionTypes.AUTH_FAILED, error: err.response.data.error.message });
            });
    }

};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};
