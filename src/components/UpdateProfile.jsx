import React from 'react';
import profileImg from '../assets/images/categories/biscuits.jpg';

const UpdateProfile = () => {

    return (
        <div className="myProfile">
            <h2>Update Profile</h2>
            <div className="profileContent">
                <div className="profileHeader">
                    <div className="profileImage">
                        <img src={profileImg} alt="profile" />
                    </div>
                   
                </div>

                <div className="profileUpdate">
                    <div className="profileUpdateInfo">
                        <div className="basicInput">
                            <div className="basicInputField">
                                <input type="text" name="name" placeholder='Full name' />
                                <input type="email" name="email" placeholder='Email' />
                                <input type="number" name="phone" placeholder='Phone' />
                            </div>
                        </div>
                        <div className="genderInput">
                            <p>Gender:</p>
                            <div className="genderInputField">
                                <label htmlFor="male">
                                    <input type="radio" name="gender" id="male" value="male" /> 
                                    Male
                                </label>
                                <label htmlFor="female">
                                    <input type="radio" name="gender" id="female" value="female" /> 
                                    Female
                                </label>
                            </div>
                        </div>
                        <div className="addressInput">
                            <p>Address:</p>

                            <div className="useCurrentAddress">
                                <input type="checkbox" id="location" value="location" />
                                <label htmlFor="location">
                                     
                                    Use your current location
                                </label>
                            </div>
                            
                            
                            <div className="addressInputField">
                                <input type="text" name="street" placeholder="Street address" />
                                <input type="text" name="division" placeholder="Division" />
                                <input type="text" name="city" placeholder="City" />
                                <input type="number" name="zip" placeholder="ZIP/Postcode" />
                                <input type="text" name="country" value="Bangladesh" placeholder="Country" disabled />
                            </div>
                        </div>
                        
                    </div>
                    <button className="updateBtn">Update profile</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;