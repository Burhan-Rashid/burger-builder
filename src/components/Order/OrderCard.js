import React from 'react'
import "./OrderCard.css"

function OrderCard({ order }) {
    return (
        <div className="OrderCard">
            <h3>Order Details</h3>
            <p>Cheese:({order.ingredients.cheese}), Meat:({order.ingredients.meat}), Salad:({order.ingredients.salad}), Bacon:({order.ingredients.bacon})</p>
            <p>Date: <strong> {order.orderTime}</strong> </p>
            <p>Delivery Mode: <strong> {order.deliveryType}</strong></p>
            <p>Price: <strong> {order.price}$</strong></p>
        </div>
    )
}

export default OrderCard
