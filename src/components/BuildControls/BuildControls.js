import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Button from '../UI/Button/Button'
import * as actions from "../../store/actions/BurgerBuilderActions"
import "./BuildControls.css"

function BuildControls() {

    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const price = useSelector(state => state.burgerBuilder.price);
    const dispatch = useDispatch();
    const ingredientArray = Object.keys(ingredients);
    console.log(ingredients);
    const addIngredient = (ing) => {
        dispatch(actions.addIngredient(ing));
    }
    const removeIngredient = (ing) => {
        dispatch(actions.removeIngredient(ing));
    }
    return (
        <div className="BuildControls">
            <p>Price: <strong>$ {price.toFixed(2)}</strong></p>
            {ingredientArray.map((ing, index) => {
                return <div className="BuildControls__control">
                    <div className="BuildControls__label">
                        <h4>{ing} </h4>
                    </div>
                    <Button onClick={() => addIngredient(ing)}>+</Button><span>{ingredients[ing]}</span>
                    <Button onClick={() => removeIngredient(ing)}>-</Button>
                </div>
            })}
            <Button style={{ width: "80px", height: "40px", backgroundColor: "#DAA972", fontSize: "0.9rem", display: "flex", alignItems: "center", margin: "30px auto" }}>Order Now</Button>
        </div>
    )
}

export default BuildControls
