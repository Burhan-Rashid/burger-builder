import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./Burger.css"

function Burger() {

    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const ingredientsArray = Object.keys(ingredients);
    let ingredientsView = [];

    ingredientsArray.forEach((ing, index) => {
        const className = ing[0].toUpperCase() + ing.slice(1);
        const ingValue = ingredients[ing];
        for (let i = 0; i < ingValue; i++) {
            ingredientsView.push(<div className={className}></div>);
        }
    })

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1">
                </div>
                <div className="Seeds2">
                </div>
            </div>
            {ingredientsView.length > 0 ? ingredientsView : <p>Please start adding ingredients to your burger</p>}
            <div className="BreadBottom"></div>
        </div>
    )
}

export default Burger
