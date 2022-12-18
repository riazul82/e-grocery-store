import React from 'react';
import Navbar from '../components/Navbar';
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';
import ProfileSidebar from '../components/ProfileSidebar';

import profileImg from '../assets/images/categories/biscuits.jpg';

const UpdateProfile = () => {
    return (
        <>
            <Navbar />
            <div className="userDetails">
                <ProfileSidebar />

                <div className="detailsInfo">
                    <div className="myProfile">
                        <h2>Update Profile</h2>
                        <div className="profileContent">
                            <div className="profileHeader">
                                <div className="profileImage">
                                    <img src={profileImg} alt="profile" />
                                </div>
                                <div className="profileDesc">
                                    <p className="name">Riazul Islam</p>
                                    <p className="location"><SlLocationPin className="locationIcon" /><span>Sylhet, Bangladesh</span></p>
                                    <p className="joined"><FiCalendar className="locationIcon" /><span>Joined - January, 2022</span></p>
                                </div>
                            </div>

                            <div className="uploadProfileImageInput">
                                <div className="fileInputLabel">
                                    <label htmlFor="profileImgInput">Upload an image</label>
                                </div>
                                <input type="file" id="profileImgInput" />
                            </div>

                            <div className="profileDetails">
                                <div className="profileDetailsInfo">
                                    <div className="inputField">
                                        <label htmlFor="name">Full name</label>
                                        <input type="text" id="name" placeholder="Full name" />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" placeholder="Email" />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="phone" id="phone" placeholder="Phone" />
                                    </div>

                                    <div className="genderInput">
                                        <p>Gender</p>
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
                                                Current location
                                            </label>
                                        </div>
                                        
                                        <div className="addressInputField">
                                            <div className="inputField">
                                                <label htmlFor="street">Street</label>
                                                <input type="text" name="street" id="street" placeholder="Street address" />
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="division">Division</label>
                                                <input type="text" name="division" id="division" placeholder="Division" />                                        
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="city">City</label>
                                                <input type="text" name="city" id="city" placeholder="City" />                                        
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="zip">ZIP/Postcode</label>
                                                <input type="number" name="zip" id="zip" placeholder="ZIP/Postcode" />                                        
                                            </div>
                                            
                                            <div className="inputField">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" name="country" value="Bangladesh" placeholder="Country" disabled />                                        
                                            </div>
                                        </div>
                                    </div>

                                    <div className="buttonField">
                                        <button className="profileUpdateBtn">Update account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateProfile;