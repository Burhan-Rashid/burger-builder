import React from 'react'
import { useSelector } from 'react-redux';
import Navbar from '../../components/Nav/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Layout.css"

function Layout(props) {
    const token = useSelector(state => state.user.token);
    const [show, setShow] = React.useState(false);
    const isAuthenticated = token !== null;

    return (
        <React.Fragment>
            <Navbar setShow={setShow} show={show} isAuthenticated={isAuthenticated} />
            <Sidebar show={show} setShow={setShow} isAuthenticated={isAuthenticated} />
            <div className="Layout__main">
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Layout
