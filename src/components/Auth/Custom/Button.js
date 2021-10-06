import React from 'react'
import './Button.css'
function Button({types}) {
    
    return (
        <div className="button">
            <div className="button__Component">
                <button >{types}</button>
            </div>
        </div>
    )
}

export default Button
