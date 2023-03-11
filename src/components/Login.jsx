import React, { useState } from "react";
import './Login.css';
import innoLogo from '../images/innoLogo.png'

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <img src={innoLogo} alt="innoLogo" />
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Login</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <h4 id="sign_in_title">If you do not know login and password - 
                ask Department of Education. In this system exist 
                only one user - University Employee, who is responsible 
                for schedule creation.</h4>
                <button className="submit_button" type="submit">Log In</button>
            </form>        
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}