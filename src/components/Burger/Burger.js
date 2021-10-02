import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import "./Burger.css"

function Burger() {

    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const ingredientsArray = Object.keys(ingredients);

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1">
                </div>
                <div className="Seeds2">
                </div>
            </div>
            {ingredientsArray.map((ing, index) => {
                let outputDivs = [];
                const className = ing[0].toUpperCase() + ing.slice(1);
                const ingValue = ingredients[ing];
                for (let i = 0; i < ingValue; i++) {
                    outputDivs.push(<div className={className}></div>);
                }
                return <React.Fragment>{outputDivs}</React.Fragment>
            })}

            {/* <div className="Meat"></div>
            <div className="Cheese"></div>
            <div className="Bacon"></div> */}

            <div className="BreadBottom"></div>
        </div>
    )
}

export default Burger
