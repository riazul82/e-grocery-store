import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';
import { AiFillWarning } from 'react-icons/ai';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Signup = () => {
    const [user, setUser] = useState({email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState({flag: false, message: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            return setError({flag: true, message: `Password don't match!`});
        }

        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            dispatch({type: 'LOGIN', payload: user});
            navigate('/');
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            setError({flag: true, message: errorMessage});
        });

    }

    return (
        <div className="signup">
            <div className="signupContent">
                <div className="signupTitle">
                    <h1>Signup</h1>
                </div>
                {error.flag && <div className="errorBox">
                    <div className="errorIcon">
                        <AiFillWarning className="warning"/>
                    </div>
                    <p className="errorMsg">{error.message}</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Enter your email" />
                    <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Password" />
                    <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
                    <button type="submit" className="signupBtn">Signup</button>
                </form>
                <p className="loginLinkText">
                    Already have an account? <Link to="/login" className="loginLink link">Login now</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;