import React from 'react'
import './Button.css'
function Button({type}) {
    
    return (
        <div className="button">
            <div className="button__Component">
                <button>{type}</button>
            </div>
        </div>
    )
}

export default Button
