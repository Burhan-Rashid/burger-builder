import React from 'react'
import { BiX } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import Backdrop from '../Backdrop/Backdrop'
import "./Sidebar.css"

function Sidebar({ show, setShow, isAuthenticated }) {
    // let classNames = ["sidebar", "Close"];
    // if (show) {
    //     classNames = ["sidebar", "Open"];
    // }

    let sidebar = (
        <React.Fragment>
            <Backdrop setShow={setShow} />
            <div className="sidebar" onClick={() => setShow(false)}>
                {show ? <BiX className="sidebar__icon" size={38} color="green" onClick={() => setShow(false)} /> : null}
                {/* <p>Burger Builder</p>
                <p>Orders</p> */}
                <NavLink className="link_mobile" activeClassName="link_active" exact to="/" >Burger Builder</NavLink>

                {!isAuthenticated ?
                    <NavLink className="link_mobile" activeClassName="link_active" to="/auth" >Authenticate</NavLink>
                    :
                    <>
                        <NavLink className="link_mobile" activeClassName="link_active" to="/orders" >Orders</NavLink>
                        <NavLink className="link_mobile" activeClassName="link_active" to="/logout" >Logout</NavLink>
                    </>
                }
            </div>
        </React.Fragment>
    )

    return (
        show ? sidebar : null
    )
}

export default Sidebar
