import React from 'react'
import './components/Login/Login.css';
import {Button } from '@material-ui/core'
// import {auth, provider} from "./Firebase";
 
function Login() {
    const signIn = () => {
        //google login. 
        // auth.signInWithPopup(provider)
        // .catch(error => alert(error.message));
    }

    return <div className="login">
        <div className="loginLogo">
            <img src='loginLogo.jpg' alt='Login'></img>
        </div>

        <Button onClick = {signIn}>Sign in</Button>
    </div>
}

export default Login
