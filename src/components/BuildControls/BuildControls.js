import React from 'react'
import Button from '../UI/Button/Button'
import "./BuildControls.css"

function BuildControls() {
    return (
        <div className="BuildControls">
            <p>Price: <strong>$ 4.00</strong></p>
            <div className="BuildControls__control">
                <div className="BuildControls__label">
                    <h4>Cheese </h4>
                </div>
                <Button>+</Button>
                <Button>-</Button>
            </div>
            <div className="BuildControls__control">
                <div className="BuildControls__label">
                    <h4>Meat </h4>
                </div>
                <Button>+</Button>
                <Button>-</Button>
            </div>
            <div className="BuildControls__control">
                <div className="BuildControls__label">
                    <h4>Bacon </h4>
                </div>
                <Button>+</Button>
                <Button>-</Button>
            </div>
            <div className="BuildControls__control">
                <div className="BuildControls__label">
                    <h4>Salad </h4>
                </div>
                <Button>+</Button>
                <Button>-</Button>
            </div>
            <Button style={{ width: "80px", height: "40px", backgroundColor: "#DAA972", fontSize: "0.9rem", display: "flex", alignItems: "center", margin: "30px auto" }}>Order Now</Button>
        </div>
    )
}

export default BuildControls
