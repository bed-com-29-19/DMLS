import React, {useState} from 'react';
// import Logo from "../images/logo.jpg";
import {Navigate} from 'react-router-dom';
import "./EntryPage.css";


function EntryPage() {
  const [goToSignIn, setSignIn] = useState(false);

  const [goToHome, setGoToHome] = useState(false);

  
  if (goToHome) {
    return <Navigate to="/SignUp"/>
  }

  if (goToSignIn) {
    return <Navigate to="/SingIn"/>
  }

  

  return (
    <main id="Entry">
    {/* <img alt="logo" src={Logo}></img> */}

    <div className="entry-container">
    <h1>WELCOME TO THE DMLS LOANS</h1>

    <p className="p">To Apply for the Macro and Micro loans,  You are required to create an account first, if you have not done that already. If you already 
    have an account click sign in</p>

    
    <div className="registration">
        <div className="reg">
        <button onClick={() => {setGoToHome(true)}}>Sign Up</button>
        
        </div>

        <div className="reg">
        <button onClick={() => {setSignIn(true)}}>Sign In</button>
        </div>
        
    </div>

    </div>

    </main>
  )
}

export default EntryPage