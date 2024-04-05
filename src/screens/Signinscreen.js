import React, { useRef } from 'react'
import "./Signscreen.css"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Signinscreen() {
  const emailref=useRef(null);
  const passwordref=useRef(null);

  const register = (e) => {
    e.preventDefault();
    
    createUserWithEmailAndPassword(auth,emailref.current.value, passwordref.current.value)
  .then((userCredential) => {
    
  console.log(userCredential);
    
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }
  const signIn =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailref.current.value, passwordref.current.value)
  .then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    // ...
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }
  return (
    <div className='Signinscreen'> 
    <form>
        <h1>Sign In</h1>
        <input ref={emailref} type='email' placeholder='Email Address' />
        <input ref={passwordref} type='password' placeholder='Password' />
        <button className='loginbtn' type='submit' onClick={signIn}>Sign In</button>
        <h4><span className='gray'>New to Netflix?</span><span className='link' onClick={register}>Sign up now</span> </h4>
    </form>
    </div>
  );
}

export default Signinscreen