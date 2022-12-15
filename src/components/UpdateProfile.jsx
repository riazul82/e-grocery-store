import React from 'react';
import profileImg from '../images/categories/shop.jpg';

const UpdateProfile = () => {
    return (
        <div className="myProfile">
            <h2>Update Profile</h2>
            <div className="profileContent">
                <div className="profileImage">
                    <img src={profileImg} alt="profile" />
                </div>
                <div className="profileUpdate">
                    <div className="profileUpdateInfo">
                        <div className="basicInput">
                            <div className="basicInputField">
                                <input type="text" name="firstName" placeholder='First name' />
                                <input type="text" name="lastName" placeholder='Last name' />
                                <input type="email" name="email" placeholder='Email' />
                                <input type="number" name="phone" placeholder='Phone' />
                            </div>
                        </div>
                        <div className="genderInput">
                            <p><strong>Gender:</strong></p>
                            <div className="genderInputField">
                                <label htmlFor="male"><input type="radio" name="gender" id="male" value="male" /> Male</label>
                                <label htmlFor="female"><input type="radio" name="gender" id="female" value="female" /> Female</label>
                            </div>
                        </div>
                        <div className="addressInput">
                            <p><strong>Address:</strong></p>
                            <div className="addressInputField">
                                <input type="text" name="street" placeholder="Street address" />
                                <input type="text" name="city" placeholder="City" />
                                <input type="number" name="zip" placeholder="ZIP/Postcode" />
                                <input type="text" name="country" value="Bangladesh" placeholder="Country" disabled />
                            </div>
                        </div>
                        
                    </div>
                    <button>Update profile</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;