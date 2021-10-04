import React from 'react'
import "./Navbar.css"
import { BiMenu } from "react-icons/bi"
import { NavLink } from "react-router-dom"

function Navbar({ show, setShow }) {
    return (
        <div className="Navbar">
            <div className="Navbar__icon" onClick={() => setShow(!show)}>
                <BiMenu size={38} color="white" />
            </div>
            <div className="Navbar__right">
                <div className="NavItem"><NavLink className="link" activeClassName="nav__active" exact to="/" >Burger Builder</NavLink></div>
                <div className="NavItem"><NavLink className="link" activeClassName="nav__active" to="/orders" >Orders</NavLink></div>
                <div className="NavItem"><NavLink className="link" activeClassName="nav__active" to="/auth" >Authenticate</NavLink></div>
            </div>
        </div>
    )
}

export default Navbar
