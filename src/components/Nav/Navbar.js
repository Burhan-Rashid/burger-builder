import React from 'react'
import "./Navbar.css"
import { BiMenu } from "react-icons/bi"

function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__icon">
                <BiMenu size={38} color="white" />
            </div>
            <div className="Navbar__right">
                <p>Burger Builders</p>
                <p>Orders</p>
            </div>
        </div>
    )
}

export default Navbar
