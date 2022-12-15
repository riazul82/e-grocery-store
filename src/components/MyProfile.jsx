import React from 'react';
import profileImg from '../images/categories/shop.jpg';

const MyProfile = () => {
    return (
        <div className="myProfile">
            <h2>My Profile</h2>
            <div className="profileContent">
                <div className="profileImage">
                    <img src={profileImg} alt="profile" />
                </div>
                <div className="profileDetails">
                    <div className="profileDetailsInfo">
                        <p><strong>Name: </strong><span>Riazul Islam</span></p>
                        <p><strong>Gender: </strong><span>Male</span></p>
                        <p><strong>Email: </strong><span>riazul@gmail.com</span></p>
                        <p><strong>Phone: </strong><span>01824922183</span></p>
                        <p><strong>Address: </strong><span>Sylhet, Bangladesh</span></p>
                    </div>
                    <button>Delete account</button>
                </div>
            </div>
        </div>
    );
}

export default MyProfile;