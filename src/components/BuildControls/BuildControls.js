import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Button from '../UI/Button/Button'
import * as actions from "../../store/actions/BurgerBuilderActions"
import "./BuildControls.css"
import { useHistory } from 'react-router-dom';

function BuildControls({ setShow }) {

    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const token = useSelector(state => state.user.token);
    const price = useSelector(state => state.burgerBuilder.price);
    const dispatch = useDispatch();
    const history = useHistory();
    const ingredientArray = Object.keys(ingredients);

    const addIngredient = (ing) => {
        dispatch(actions.addIngredient(ing));
    }
    const removeIngredient = (ing) => {
        if (ingredients[ing] === 0) {
            return;
        }
        dispatch(actions.removeIngredient(ing));
    }

    const handleOrder = () => {
        token ? setShow(true) : history.push("/auth")
    }

    // console.log(price)

    const controls = ingredientArray.map((ing, index) => {
        return <div className="BuildControls__control">
            <div className="BuildControls__label">
                <h4>{ing[0].toUpperCase() + ing.slice(1)} </h4>
            </div>
            <Button onClick={() => addIngredient(ing)}>+</Button>
            <span>{ingredients[ing]}</span>
            <Button
                disabled={ingredients[ing] === 0}
                onClick={() => removeIngredient(ing)}
            >-</Button>
        </div>
    })

    return (
        <div className="BuildControls">
            <p>Price: <strong>$ {price.toFixed(2)}</strong></p>
            {controls}
            <button
                className="BuildControls__button"
                disabled={price === 4}
                onClick={handleOrder}
            >
                <strong>Order Now</strong>
            </button>
        </div>
    )
}

export default BuildControls
