import * as actionTypes from './ActionTypes';
import axios from "axios";

export const placeOrder = (order, token) => {
    return dispatch => {
        dispatch({ type: actionTypes.ORDER_START });
        let url = "https://instagram-dev-bf626-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json";

        try {
            axios.post(url, order).then((response) => {
                console.log(response.data)
                dispatch({ type: actionTypes.ORDER_SUCCESS, newOrder: response.data.order })
            })
        } catch (error) {
            dispatch({ type: actionTypes.ORDER_FAILED, error: error.response.data.message })
        }
    }

};

