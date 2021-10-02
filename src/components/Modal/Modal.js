import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import Backdrop from '../Backdrop/Backdrop'
import Button from '../UI/Button/Button'
import "./Modal.css"

function Modal({ show, setShow }) {
    const ingredients = useSelector(state => state.burgerBuilder.ingredients);
    const ingredientsArray = Object.keys(ingredients);
    const price = useSelector(state => state.burgerBuilder.price);

    let summary = ingredientsArray.map((ing, index) => {
        return <p>{ing[0].toUpperCase() + ing.slice(1)} : <strong>{ingredients[ing]}</strong></p>
    })

    let modal = (<React.Fragment>
        <Backdrop setShow={setShow} />
        <div className="modal">
            <h4>Order Summary</h4>
            {summary}
            <h4>Total Price: ${price.toFixed(2)}</h4>
            <div className="modal__buttons">
                <Button
                    style={{ width: "80px", backgroundColor: "gray", marginRight: "5px", color: "white" }}
                    onClick={() => setShow(false)}
                >
                    Cancel
                </Button>
                <Button style={{ width: "80px", color: "white" }}>Continue</Button>
            </div>
        </div>
    </React.Fragment>)

    return (
        show ? modal : null
    )
}

export default Modal
