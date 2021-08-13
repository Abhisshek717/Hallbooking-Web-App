import React from 'react'
import InputBox from '../Custom/InputBox'

function Signup() {
    const name = "Signup"
    return (
        <div className="signUp">
            {/* signupBox */}
            <div className="signupBox">
                <div className="left__component">
                    <img src="" alt="svg icon" />
                </div>
                <div className="right__component">
                    <div className="right__top">
                        <h1>{name}</h1>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Signup
