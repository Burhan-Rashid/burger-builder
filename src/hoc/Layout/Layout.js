import React from 'react'
import Navbar from '../../components/Nav/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Layout.css"

function Layout(props) {
    return (
        <React.Fragment>
            <Navbar />
            {/* <Sidebar /> */}
            <div className="Layout__main">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout
