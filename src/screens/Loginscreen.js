import React, { useState } from 'react'
import './Loginscreen.css'
import Signinscreen from './Signinscreen';
function Loginscreen() {
  const [signin,setSignin]=useState(false);
  return (
    <div className='loginscreen'>
        <div className='loginscree_background'>
            <img className="loginscreen_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt ="" />
         <button className='loginscreen_btn' onClick={()=>{setSignin(true)}}>Sign In</button> 
         <div className='loginscreen_gradient' />  
         
        </div>
        <div className='loginscreen_body'>
          {
            signin ? (<Signinscreen />) : (
              <>
              <h1>Unlimited movies,TV 
                  shows and more.</h1>
              <h2>Watch anywhere.Cancel at anytime.</h2> 
              <h3>Ready to watch?Enter your email to create or restart your membership.</h3>   
              
             <div className='loginscreen_input'>
              <form>
              <input type='email' placeholder='Email Address'></input>
              <button className='loginscreen_getstarted' onClick={()=>{setSignin(true)}}>GET STARTED</button>
                </form>
                  </div>
              </>
              )
              
          };
             
         </div>
    </div>
  )
}

export default Loginscreen