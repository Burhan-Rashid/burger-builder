import React from 'react'
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../store/actions/UserActions'

function Logout() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(logout());
        <Redirect to="/" />;
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
