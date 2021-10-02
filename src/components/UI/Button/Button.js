import React from 'react'
import "./Button.css"

function Button({ onClick, children, style, disabled }) {
    return (
        <div
            className={disabled ? "Button disabled" : "Button"}
            onClick={disabled ? null : onClick}
            style={style ? style : null}>
            {children}
        </div>
    )
}

export default Button
