import React from 'react'
import "./Auth.css"
import Button from "../UI/Button/Button"

function Auth() {
    let type = "Register";
    return (
        <div className="Auth">
            <h4>{type}</h4>
            <form className="form">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <Button style={{ width: "100px" }}>{type}</Button>
            </form>
        </div>
    )
}

export default Auth
