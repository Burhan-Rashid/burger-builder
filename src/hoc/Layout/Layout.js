import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Layout.css"

function Layout(props) {

    const [show, setShow] = React.useState(false);

    return (
        <React.Fragment>
            <Navbar setShow={setShow} show={show} />
            <Sidebar show={show} setShow={setShow} />
            <div className="Layout__main">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout
