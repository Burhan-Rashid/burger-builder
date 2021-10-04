import React from 'react'
import "./Auth.css"
import Button from "../UI/Button/Button"
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../store/actions/UserActions"

function Auth() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [type, setType] = React.useState("Register");
    const error = useSelector(state => state.user.error);
    const loading = useSelector(state => state.user.loading);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password, type));
    }

    const toggleType = () => {
        if (type === "Register")
            setType("Login");
        else if (type === "Login")
            setType("Register");
    }

    return (
        <div className="Auth">
            <h4>{type}</h4>
            <p>{error ? error : null}</p>
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button style={{ width: "100px" }} onClick={handleSubmit}>{type}</Button>
            </form>
            {type === "Login" ?
                <p>Don't have an account? <span onClick={toggleType}>Register</span></p> :
                <p>Already have an account? <span onClick={toggleType}>Login</span></p>
            }
        </div>
    )
}

export default Auth
