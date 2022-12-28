import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

// firebase
import { auth, fs } from '../firebase';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

// icons
import { AiFillWarning } from 'react-icons/ai';

const CreateAdmin = () => {
    const [admin, setUser] = useState({email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    // handle input change
    const handleChange = (e) => {
        setUser({...admin, [e.target.name]: e.target.value});
    }

    // save admin info to firestore
    const addUserToFireStore = async (colName, docName, data) => {
        try {
            await setDoc(doc(fs, colName, docName), data);
        } catch (err) {
            console.log(err.message);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (admin.password !== admin.confirmPassword) {
            return setError({flag: true, code: 400, message: `Password don't match!`});
        }

        createUserWithEmailAndPassword(auth, admin.email, admin.password)
        .then((userCredential) => {
            const admin = userCredential.user;
            dispatch({type: 'ADMIN_LOGIN', payload: admin});
            addUserToFireStore('users', userCredential.user.uid, {email: admin.email, role: 'admin'});
            setUser({email: '', password: '', confirmPassword: ''});
            setError({flag: false, code: null, message: ''});
            navigate('/admin/dashboard');
        })
        .catch((error) => {
            console.log(error.message);
            const errorCode = error.code;
            const errorMessage = error.message;
            setError({flag: true, code: errorCode, message: errorMessage});
        });
    }

    return (
        <div className="signup">
            <div className="signupContent">
                <div className="signupTitle">
                    <h1>Create Admin</h1>
                </div>
                {error.flag && <div className="errorBox">
                    <div className="errorIcon">
                        <AiFillWarning className="warning"/>
                    </div>
                    <p className="errorMsg">{error.message}</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={admin.email} onChange={handleChange} placeholder="Enter your email" />
                    <input type="password" name="password" value={admin.password} onChange={handleChange} placeholder="Password" />
                    <input type="password" name="confirmPassword" value={admin.confirmPassword} onChange={handleChange} placeholder="Confirm password" />
                    <button type="submit" className="signupBtn">Submit</button>
                </form>
                <p className="loginLinkText">
                    Already have an account? <Link to="/admin/login" className="loginLink link">Login now</Link>
                </p>
            </div>
        </div>
    );
}

export default CreateAdmin;