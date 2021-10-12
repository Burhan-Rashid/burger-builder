import React from 'react'
import "./Navbar.css"
import burgerLogo from "../../assets/images/burger-logo.png"
import { BiMenu } from "react-icons/bi"
import { NavLink } from "react-router-dom"

function Navbar({ show, setShow, isAuthenticated }) {

    return (
        <div className="Navbar">
            <div className="Navbar__icon MobileOnly" onClick={() => setShow(!show)}>
                <BiMenu size={38} color="white" />
            </div>
            <div className="Logo">
                <img src={burgerLogo} alt="MyBurger" />
            </div>
            <div className="Navbar__right DesktopOnly">
                <div className="NavItem"><NavLink className="link" activeClassName="nav__active" exact to="/" >Burger Builder</NavLink></div>

                {!isAuthenticated ?
                    <div className="NavItem"><NavLink className="link" activeClassName="nav__active" to="/auth" >Authenticate</NavLink></div>
                    :
                    <>
                        <div className="NavItem"><NavLink className="link" activeClassName="nav__active" to="/orders" >Orders</NavLink></div>
                        <div className="NavItem"><NavLink className="link" activeClassName="nav__active" to="/logout" >Logout</NavLink></div>
                    </>
                }
            </div>
        </div>
    )
}

export default Navbar
