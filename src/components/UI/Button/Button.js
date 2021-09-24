import React from 'react'
import "./Button.css"

function Button({ onClick, children, style }) {
    return (
        <div className="Button" onClick={onClick} style={style ? style : null}>
            {children}
        </div>
    )
}

export default Button
