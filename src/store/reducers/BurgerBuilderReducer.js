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

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
    const newState = { ...state, ingredients: { ...state.ingredients, updatedIngredient } };
    return newState;
}
const removeIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] - 1 };
    const newState = { ...state, ingredients: { ...state.ingredients, updatedIngredient } };
    return newState;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state, action);
        default: return state;
    }
};

export default reducer;
