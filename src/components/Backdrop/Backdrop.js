import React from 'react'
import "./Backdrop.css"

function Backdrop({ setShow }) {
    return (
        <div className="Backdrop" onClick={() => setShow(false)}>
        </div>
    )
}

export default Backdrop
