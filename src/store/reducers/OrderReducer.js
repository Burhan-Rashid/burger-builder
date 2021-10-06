import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    orders: [],
    error: "",
    loading: false,
}

const orderStart = (state, action) => {
    return { ...state, loading: true, error: null }
}
const orderFailed = (state, action) => {
    return { ...state, loading: false, error: action.error }
}
const orderSuccess = (state, action) => {
    let updatedOrders = state.orders;
    updatedOrders.push(action.newOrder);
    return { ...state, loading: false, orders: updatedOrders }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ORDER_START: return orderStart(state, action);
        case actionTypes.ORDER_FAILED: return orderFailed(state, action);
        case actionTypes.ORDER_SUCCESS: return orderSuccess(state, action);
        default: return state;
    }
};

export default reducer;
