import React from 'react'
import "./Auth.css"
import Button from "../UI/Button/Button"

function Auth() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [type, setType] = React.useState("Register");

    const handleSubmit = (e) => {
        e.preventDefault();
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
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button style={{ width: "100px" }}>{type}</Button>
            </form>
            {type === "Login" ?
                <p>Don't have an account? <span onClick={toggleType}>Register</span></p> :
                <p>Already have an account? <span onClick={toggleType}>Login</span></p>
            }
        </div>
    )
}

export default Auth
