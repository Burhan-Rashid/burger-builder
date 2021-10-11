import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    orders: [],
    error: "",
    loading: false,
    purchased: false
}

const orderStart = (state, action) => {
    return { ...state, loading: true, error: "" }
}
const orderFailed = (state, action) => {
    return { ...state, loading: false, error: action.error }
}
const orderSuccess = (state, action) => {
    let updatedOrders = state.orders;
    updatedOrders.push(action.newOrder);
    return { ...state, loading: false, orders: updatedOrders, error: "", purchased: true }
}
const setOrders = (state, action) => {
    return { ...state, error: "", loading: false, orders: action.orders }
}
const setPurchased = (state, action) => {
    return { ...state, purchased: action.purchased }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_START: return orderStart(state, action);
        case actionTypes.ORDER_FAILED: return orderFailed(state, action);
        case actionTypes.ORDER_SUCCESS: return orderSuccess(state, action);
        case actionTypes.SET_ORDERS: return setOrders(state, action);
        case actionTypes.SET_PURCHASED: return setPurchased(state, action);
        default: return state;
    }
};

export default reducer;
