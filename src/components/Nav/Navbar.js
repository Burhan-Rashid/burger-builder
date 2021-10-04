import React from 'react'
import "./Navbar.css"
import { BiMenu } from "react-icons/bi"
import Link from "react-router-dom/Link"

function Navbar({ show, setShow }) {
    return (
        <div className="Navbar">
            <div className="Navbar__icon" onClick={() => setShow(!show)}>
                <BiMenu size={38} color="white" />
            </div>
            <div className="Navbar__right">
                <p><Link to="/" >Burger Builder</Link></p>
                <p><Link to="/orders" >Orders</Link></p>
                <p><Link to="/auth" >Authenticate</Link></p>
            </div>
        </div>
    )
}

export default Navbar
