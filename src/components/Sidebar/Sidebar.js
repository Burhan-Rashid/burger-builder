import React from 'react'
import { BiX } from 'react-icons/bi'
import Backdrop from '../Backdrop/Backdrop'
import "./Sidebar.css"

function Sidebar({ show, setShow }) {

    let sidebar = (
        <React.Fragment>
            <Backdrop setShow={setShow} />
            <div className="sidebar">
                {show ? <BiX className="sidebar__icon" size={38} color="white" onClick={() => setShow(false)} /> : null}
                <p>Burger Builder</p>
                <p>Orders</p>
            </div>
        </React.Fragment>
    )

    return (
        show ? sidebar : null
    )
}

export default Sidebar
