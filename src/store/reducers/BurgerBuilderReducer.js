import * as actionTypes from '../actions/ActionTypes'

const initialState = {
    ingredients: {
        cheese: 0,
        meat: 0,
        bacon: 0,
        salad: 0
    },
    price: 4
}

const INGREDIENT_PRICES = {
    cheese: 1.00,
    meat: 1.80,
    bacon: 1.40,
    salad: 0.50
}

const addIngredient = (state, action) => {
    const updatedValue = state.ingredients[action.ingredient] + 1;
    const updatedPrice = state.price + INGREDIENT_PRICES[action.ingredient];
    const newState = { ...state, price: updatedPrice, ingredients: { ...state.ingredients, [action.ingredient]: updatedValue } };
    return newState;
}
const removeIngredient = (state, action) => {
    const updatedValue = state.ingredients[action.ingredient] - 1;
    const updatedPrice = state.price - INGREDIENT_PRICES[action.ingredient];
    const newState = { ...state, price: updatedPrice, ingredients: { ...state.ingredients, [action.ingredient]: updatedValue } };
    return newState;
}
const setInitialState = () => {
    return initialState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionTypes.INITIAL_STATE: return setInitialState();
        default: return state;
    }
};

export default reducer;
