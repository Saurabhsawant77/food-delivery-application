import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [currentState,setCurrrentState] = useState("Login")
  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{currentState}</h2>
                <img onClick={()=>{setShowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState==="Login"?<></>:<input type="text" placeholder="Your Name" required/>}
                <input type="email" placeholder="Email" required/>
                <input type="password" placeholder="Pssword" required/>
            </div>
            <button >{currentState==="Sign Up"?"Create Account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use & privacy Policy.</p>
            </div>
            {currentState==="Login"
            ? <p>Create a new Account ? <span onClick={()=>setCurrrentState("Sign Up")}>Click Here</span></p>
            :<p>Already have an Account? <span onClick={()=>setCurrrentState("Login")}>Login Here</span></p>}
           
            
        </form>
    </div>
  )
}

export default LoginPopup