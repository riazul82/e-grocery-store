import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

const Login = () => {
    const [user, setUser] = useState({email: '', password: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch({type: 'LOGIN', payload: user});
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return (
        <div className="login">
            <div className="loginContent">
                <div className="loginTitle">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" />
                    <span className="forgotPassLink"><Link to="/forgot-password">Forgot password?</Link></span>
                    <button type="submit" className="loginBtn">Login</button>
                </form>
                <p className="signupLinkText">
                    Don't have an account? <Link to="/signup" className="signupLink">Signup now</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;