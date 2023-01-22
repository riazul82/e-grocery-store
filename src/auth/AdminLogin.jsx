import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

// firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

// custom hook
import useAdminUsersList from '../hooks/useAdminUsersList';

// icons
import { AiFillWarning } from 'react-icons/ai';

const AdminLogin = () => {
    const [admin, setUser] = useState({email: '', password: ''});
    const [error, setError] = useState({flag: false, code: null, message: ''});

    const usersList = useAdminUsersList();

    const navigate = useNavigate();
    const { dispatch } = useContext(LoginContext);

    const handleChange = (e) => {
        setUser({...admin, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValidAdmin = false;

        for (let i = 0; i < usersList.length; i ++) {
            if (admin.email === usersList[i].email && usersList[i].role === 'admin') {
                isValidAdmin = true;
                break;
            }
        }

        if (isValidAdmin) {
            signInWithEmailAndPassword(auth, admin.email, admin.password)
            .then((userCredential) => {
                const admin = userCredential.user;
                dispatch({type: 'ADMIN_LOGIN', payload: admin});
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
            setError({flag: true, code: 400, message: 'admin not found!'});
        }
    }

    return (
        <div className="login">
            <div className="loginContent">
                <div className="loginTitle">
                    <h1>Admin Login</h1>
                </div>
                {error.flag && <div className="errorBox">
                    <div className="errorIcon">
                        <AiFillWarning className="warning"/>
                    </div>
                    <p className="errorMsg">{error.message}</p>
                </div>}
                <form onSubmit={handleSubmit}>
                    <input type="email" name="email" value={admin.email} onChange={handleChange} placeholder="Enter your email" required />
                    <input type="password" name="password" value={admin.password} onChange={handleChange} placeholder="Enter your password" required />
                    <Link to="/forgot-password" className="forgotPassLink link">Forgot password?</Link>
                    <button type="submit" className="loginBtn">Login</button>
                </form>
                <p className="signupLinkText">
                    <Link to="/admin/create" className="signupLink link">Create an admin account</Link>
                </p>
            </div>
        </div>
    );
}

export default AdminLogin;