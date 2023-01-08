import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

// firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

// custom hook
import useAdminUsersList from '../hooks/useAdminUsersList';

// icons
import { AiFillWarning } from 'react-icons/ai';

const Login = () => {
    const [user, setUser] = useState({email: '', password: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const usersList = useAdminUsersList();

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValidUser = false;

        for (let i = 0; i < usersList.length; i ++) {
            if (user.email === usersList[i].email && usersList[i].role === 'user') {
                isValidUser = true;
                break;
            }
        }

        if (isValidUser) {
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type: 'LOGIN', payload: user});
                setUser({email: '', password: ''});
                setError({flag: false, code: null, message: ''});
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError({flag: true, code: errorCode, message: errorMessage});
            });
        } else {
            setError({flag: true, code: 400, message: 'user not found!'});
        }
    }

    return (
        <div className="login">
            <div className="loginContent">
                <div className="loginTitle">
                    <h1>Login</h1>
                </div>
                {error.flag && <div className="errorBox">
                    <div className="errorIcon">
                        <AiFillWarning className="warning"/>
                    </div>
                    <p className="errorMsg">{error.message}</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your password" />
                    <Link to="/forgot-password" className="forgotPassLink link">Forgot password?</Link>
                    <button type="submit" className="loginBtn">Login</button>
                </form>
                <p className="signupLinkText">
                    Don't have an account? <Link to="/user/signup" className="signupLink link">Signup now</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;