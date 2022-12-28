import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

// firebase
import { auth, fs } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

// icons
import { AiFillWarning } from 'react-icons/ai';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Signup = () => {
    const [user, setUser] = useState({email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    // handle input change
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    // save user info to firestore
    const addUserToFireStore = async (colName, docName, data) => {
        try {
            await setDoc(doc(fs, colName, docName), data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (user.password !== user.confirmPassword) {
            return setError({flag: true, code: 400, message: `Password don't match!`});
        }

        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const user = userCredential.user;
            dispatch({type: 'LOGIN', payload: user});

            let dt = new Date();
            let monthIndex = dt.getMonth();
            let year = dt.getFullYear();
            let joinedDate = `${monthNames[monthIndex]}, ${year}`;

            addUserToFireStore('users', userCredential.user.uid, {email: user.email, role: 'user', joinedDate });
            setUser({email: '', password: '', confirmPassword: ''});
            setError({flag: false, code: null, message: ''});
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({flag: true, code: errorCode, message: errorMessage});
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
                    Already have an account? <Link to="/user/login" className="loginLink link">Login now</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;