import * as actionTypes from './ActionTypes';
import axios from "axios";

export const placeOrder = (order, token) => {
    return dispatch => {
        dispatch({ type: actionTypes.ORDER_START });
        let url = "https://instagram-dev-bf626-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json";

        try {
            axios.post(url, order).then((response) => {
                dispatch({ type: actionTypes.ORDER_SUCCESS, newOrder: order })
            })
        } catch (error) {
            dispatch({ type: actionTypes.ORDER_FAILED, error: error.response.data.message })
        }
    }

};

export const fetchOrders = () => {
    return dispatch => {
        // dispatch({ type: actionTypes.FETCH_ORDERS });
        let url = "https://instagram-dev-bf626-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json";

        try {
            axios.get(url).then((response) => {
                if (response.data) {
                    const orderKeys = Object.keys(response.data);
                    const orders = orderKeys.map((id) => {
                        return response.data[id];
                    })
                    dispatch({ type: actionTypes.SET_ORDERS, orders: orders })
                }
            })
        } catch (error) {
            dispatch({ type: actionTypes.ORDER_FAILED, error: error.response.data.message })
        }
    }
}
