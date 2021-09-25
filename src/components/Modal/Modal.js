import React from 'react'
import Backdrop from '../Backdrop/Backdrop'
import Button from '../UI/Button/Button'
import "./Modal.css"

function Modal() {
    const show = true;

    let modal = (<React.Fragment>
        <Backdrop />
        <div className="modal">
            <h4>Order Summary</h4>
            <p>Cheese: <strong>2</strong></p>
            <p>Meat: <strong>3</strong></p>
            <p>Bacon: <strong>1</strong></p>
            <p>Salad: <strong>2</strong></p>
            <h4>Total Price: $5.23</h4>
            <div className="modal__buttons">
                <Button style={{ width: "80px", backgroundColor: "gray", marginRight: "5px", color: "white" }}>Cancel</Button>
                <Button style={{ width: "80px", color: "white" }}>Continue</Button>
            </div>
        </div>
    </React.Fragment>)

    return (
        show ? modal : null
    )
}

export default Modal
