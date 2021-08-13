import React from 'react'
import './InputBox.css'
function InputBox({types,placeholders}) {
    return (
        <div className="inputBox">
            
            <div className="input">
                <input type={types} placeholder={placeholders}/>
            </div>
        </div>
    )
}

export default InputBox
