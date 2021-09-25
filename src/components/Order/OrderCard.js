import React from 'react'
import "./OrderCard.css"

function OrderCard() {
    return (
        <div className="OrderCard">
            <h3>Order Details</h3>
            <p>Cheese:(1), Meat:(2), Salad:(1), Bacon:(1)</p>
            <p>Date: <strong> 10/12/2021</strong> </p>
            <p>Delivery Mode: <strong> Fatest</strong></p>
        </div>
    )
}

export default OrderCard
