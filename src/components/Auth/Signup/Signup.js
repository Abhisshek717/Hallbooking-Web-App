import React from 'react'
import Button from '../Custom/Button'
import InputBox from '../Custom/InputBox'
import './Signup.css'
function Signup() {
    const name = "Signup"
    return (
        <div className="signUp">
            {/* signupBox */}
            <div className="signupBox">
                <div className="left__component">
                    {/* <img src="" alt="svg icon" /> */}
                </div>
                <div className="right__component">
                    <div className="right__top">
                        <h1>{name}</h1>
                    </div>
                    <div className="right__middle">
                        <InputBox types="text" placeholders="Enter Email"/>
                        <InputBox types="password" placeholders="Enter Password"/>
                        <InputBox types="text" placeholders="Enter Mobile Number"/>
                        <InputBox types="text" placeholders="User"/>
                        <InputBox types="text" placeholders="Enter Username"/>
                        <InputBox types="text" placeholders="Enter Age"/>
                        <Button type = "submit"/>
                    </div>
                    <div className="right__bottom">
                        <p>Go To Login</p>
                        <a href="">Click Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
