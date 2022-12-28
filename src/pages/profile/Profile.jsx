import React, { useState, useContext, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';
import ProfileSidebar from '../../components/ProfileSidebar';
import { UserDetailsContext } from '../../context/UserDetailsProvider';

import profileImg from '../../assets/images/categories/biscuits.jpg';

const Profile = () => {
    const userDetails = useContext(UserDetailsContext);
    const [gender, setGender] = useState(null);

    const handleRadioInput = () => {
        setGender(userDetails.gender ? (userDetails.gender === 'male' ? 'male' : 'female') : null);
    }

    useEffect(() => {
        handleRadioInput();
    });

    

    return (
        <>
            <Navbar />
            <div className="userDetails">
                <ProfileSidebar />

                <div className="detailsInfo">
                    <div className="myProfile">
                        <h2>My Profile</h2>
                        <div className="profileContent">
                            <div className="profileHeader">
                                <div className="profileImage">
                                    <img src={userDetails.imgUrl || profileImg} alt="profile" />
                                </div>
                                <div className="profileDesc">
                                    <p className="name">{userDetails.name ? userDetails.name : 'Unknown'}</p>
                                    <p className="location"><SlLocationPin className="locationIcon" /><span>{userDetails.address ? `${userDetails.address.division}, ${userDetails.address.country}` : 'Bangladesh'}</span></p>
                                    <p className="joined"><FiCalendar className="locationIcon" /><span>{`Joined - ${userDetails.joinedDate ? userDetails.joinedDate : 'Month, YYYY'}`}</span></p>
                                </div>
                            </div>
                            <div className="profileDetails">
                                <div className="profileDetailsInfo">
                                    <div className="inputField">
                                        <label htmlFor="name">Full name</label>
                                        <input type="text" id="name" value={userDetails.name ? userDetails.name : null} placeholder="Full name" disabled />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" value={userDetails.email ? userDetails.email : null} placeholder="Email" disabled />
                                    </div>

                                    <div className="inputField">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="phone" id="phone" value={userDetails.phone ? userDetails.phone : null} placeholder="Phone" disabled />
                                    </div>

                                    <div className="genderInput">
                                        <p>Gender</p>
                                        <div className="genderInputField">
                                            <label htmlFor="male">
                                                <input type="radio" name="gender" id="male" value="male" onChange={handleRadioInput} checked={(gender !== null && gender === 'male') ? true : false} /> 
                                                Male
                                            </label>
                                            <label htmlFor="female">
                                                <input type="radio" name="gender" id="female" value="female" onChange={handleRadioInput} checked={(gender !== null && gender === 'female') ? true : false} />
                                                Female
                                            </label>
                                        </div>
                                    </div>

                                    <div className="addressInput">
                                        <p>Address:</p>
                                        
                                        <div className="addressInputField">
                                            <div className="inputField">
                                                <label htmlFor="street">Street</label>
                                                <input type="text" name="street" id="street" value={userDetails.address ? userDetails.address.street : null} placeholder="Street address" disabled />
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="division">Division</label>
                                                <input type="text" name="division" id="division" value={userDetails.address ? userDetails.address.division : null} placeholder="Division" disabled />                                        
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="city">City</label>
                                                <input type="text" name="city" id="city" value={userDetails.address ? userDetails.address.city : null} placeholder="City" disabled />                                        
                                            </div>

                                            <div className="inputField">
                                                <label htmlFor="zip">ZIP/Postcode</label>
                                                <input type="number" name="zip" id="zip" value={userDetails.address ? userDetails.address.postcode : null} placeholder="ZIP/Postcode" disabled />                                        
                                            </div>
                                            
                                            <div className="inputField">
                                                <label htmlFor="country">Country</label>
                                                <input type="text" name="country" value="Bangladesh" placeholder="Country" disabled />                                        
                                            </div>
                                        </div>
                                    </div>

                                    <div className="buttonField">
                                        <button className="profileDeleteBtn">Delete account</button>
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

export default Profile;