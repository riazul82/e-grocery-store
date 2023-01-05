import React, { useState, useEffect, useContext } from 'react';
import { AdminDetailsContext } from '../../context/AdminDetailsProvider';

// components
import AppLayout from '../../layouts/AppLayout';
import AdminSidebar from '../../components/admin/AdminSidebar';

// icons
import { SlLocationPin } from 'react-icons/sl';
import { FiCalendar } from 'react-icons/fi';

// firebase
import { fs, storage } from '../../firebase';
import { doc, setDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import profileImg from '../../assets/images/project/shopping.png';

const AdminUpdateProfile = () => {
    const adminDetails = useContext(AdminDetailsContext);

    // states
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [admin, setAdmin] = useState(
        JSON.parse(localStorage.getItem('adminDetails')) ||
        {
            id: '',
            name: 'Admin',
            email: adminDetails.email,
            phone: '',
            gender: '',
            joinedDate: adminDetails.joinedDate,
            address: {
                street: '',
                division: '',
                city: '',
                postcode: '',
                country: 'Bangladesh'
            }
        }
    );

    useEffect(() => {
        if (profileImage === null || profileImage === undefined) {
            return;
        }

        const objUrl = URL.createObjectURL(profileImage);
        setPreviewImage(objUrl);

        // free memory when component is unmounted
        return (() => URL.revokeObjectURL(objUrl));
    }, [profileImage]);

    // handle form input change
    const handleChange = (e) => {
        let name = e.target.name;

        if (name === 'street' || name === 'city' || name ==='division' || name ==='postcode') {
            setAdmin({...admin, address: {
                ...admin.address,
                [name]: e.target.value
            }})
        } else {
            setAdmin({...admin, [name]: e.target.value});
        }
    }

    const handleImageInput = (e) => {
        // fix select file cancelation problem
        if (e.target.files[0] !== undefined) {
            setProfileImage(e.target.files[0]);
        }
    }

    // store profile details to firestore
    const updateProfileData = async (admin, hasImg) => {
        try {
            await setDoc(doc(fs, "users", adminDetails.id), admin);
            if(!hasImg) {
                toast.success('Profile updated!');
            }
        } catch (error) {
            if(!hasImg) {
                toast.error('An error occured!');
            } else {
                console.log(error);
            }
        }
    }

    // update profile
    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneRegex = /^(\+88)?-?01[1-9]\d{8}$/;
        const zipRegex = /^\d{4}$/;

        if (!phoneRegex.test(admin.phone)) {
            toast.error('Phone is not valid!');
            return;
        }

        if (!zipRegex.test(admin.address.postcode)) {
            toast.error('Postcode can contain only 4 digits');
            return;
        }

        setBtnDisabled(true);

        if (profileImage === null || profileImage === undefined) {
            admin.id = adminDetails.id;
            updateProfileData(admin, false);
            setBtnDisabled(false);
        } else {
            // delete previous image from storage
            if (adminDetails.imgUrl) {
                const desertRef = ref(storage, adminDetails.imgUrl);

                deleteObject(desertRef).then(() => {
                    console.log('Previous image deleted!');
                }).catch((error) => {
                    console.log(error);
                });
            }
            
            // upload new image
            const storageRef = ref(storage, `images/profile/${profileImage.name}`);
            const uploadTask = uploadBytesResumable(storageRef, profileImage);

            // upload image to storage
            uploadTask.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                        default:
                            console.log('Upload in progress');
                    }
                },  (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            console.log('Unauthorized admin');
                            break;
                        case 'storage/canceled':
                            console.log('Upload canceled');
                            break;
                    
                        case 'storage/unknown':
                            console.log('Unknown error!');
                            break;

                        default:
                            console.log(`Couldn't upload image!`);
                    }

                    setBtnDisabled(false);
                    setProfileImage(null);
                    setPreviewImage(null);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        admin.imgUrl = downloadURL;
                        admin.id = adminDetails.id;
                        updateProfileData(admin, true);
                        setBtnDisabled(false);
                        setProfileImage(null);
                        setPreviewImage(null);
                    });
                }
            );

            toast.promise(uploadTask, {
                pending: 'Uploading...',
                success: 'Profile updated!',
                error: 'An error occured!'
            });
        }
    }

    let joinedDate = 'Month, YYYY';

    if (adminDetails.joinedDate) {
        let dateArr = adminDetails.joinedDate.split(' ');
        joinedDate = `${dateArr[0]}, ${dateArr[2]}`;
    }

    return (
        <AppLayout>
            <div className="dashboardLayout">
                <AdminSidebar />
                <div className="dashboardDetails">
                    <div className="dashboardTitle">
                        <h2>Update Profile</h2>
                    </div>
                    <div className="profileContent">
                        <div className="profileHeader">
                            <div className="profileImage">
                                <img src={previewImage || admin.imgUrl || profileImg} alt="profile" />
                            </div>
                            <div className="profileDesc">
                                <p className="name">{admin.name}</p>
                                <p className="location"><SlLocationPin className="locationIcon" /><span>{admin.address ? `${admin.address.division}, ${admin.address.country}` : admin.address.country}</span></p>
                                <p className="joined"><FiCalendar className="locationIcon" /><span>Joined - {joinedDate}</span></p>
                            </div>
                        </div>

                        <div className="uploadProfileImageInput">
                            <div className="fileInputLabel">
                                <label htmlFor="profileImgInput">Upload an image</label>
                            </div>
                            <input type="file" id="profileImgInput" onChange={handleImageInput} />
                        </div>

                        <div className="profileDetails">
                            <form className="profileDetailsInfo" onSubmit={handleSubmit}>
                                <div className="inputField">
                                    <label htmlFor="name">Full name</label>
                                    <input type="text" name="name" id="name" value={admin.name} onChange={handleChange} placeholder="Full name" required />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" value={admin.email} onChange={handleChange} placeholder="Email" disabled />
                                </div>
                                <div className="inputField">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" name="phone" id="phone" value={admin.phone} onChange={handleChange} placeholder="Phone (e.g +88-01XXXXXXXXX)" required />
                                </div>
                                <div className="genderInput">
                                    <p>Gender</p>
                                    <div className="genderInputField">
                                        <label htmlFor="male">
                                            <input type="radio" name="gender" id="male" value="male" onChange={handleChange} defaultChecked={adminDetails.gender === 'male' ? true : false} required /> 
                                            Male
                                        </label>
                                        <label htmlFor="female">
                                            <input type="radio" name="gender" id="female" value="female" onChange={handleChange} defaultChecked={adminDetails.gender === 'female' ? true : false} />
                                            Female
                                        </label>
                                    </div>
                                </div>
                                <div className="addressInput">
                                    <p>Address:</p>
                                    <div className="addressInputField">
                                        <div className="inputField">                
                                            <label htmlFor="street">Street</label>
                                            <input type="text" name="street" id="street" value={admin.address.street} onChange={handleChange} placeholder="Street address" required />                                        
                                        </div>
                                        <div className="inputField">
                                            <label htmlFor="division">Division</label>
                                            <input type="text" name="division" id="division" value={admin.address.division} onChange={handleChange} placeholder="Division" required />                                        
                                        </div>
                                        <div className="inputField">
                                            <label htmlFor="city">City</label>
                                            <input type="text" name="city" id="city" value={admin.address.city} onChange={handleChange} placeholder="City" required />                                        
                                        </div>
                                        <div className="inputField">
                                            <label htmlFor="postcode">ZIP/Postcode</label>
                                            <input type="text" name="postcode" id="postcode" value={admin.address.postcode} onChange={handleChange} placeholder="ZIP/Postcode" required />                                        
                                        </div>
                                        <div className="inputField">
                                            <label htmlFor="country">Country</label>
                                            <input type="text" name="country" value={admin.address.country} placeholder="Country" disabled />                                        
                                        </div>
                                    </div>
                                </div>
                                <div className="buttonField">
                                    <button type="submit" className="profileUpdateBtn" disabled={btnDisabled}>Update account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                style={{zIndex: 999999}}
            />
        </AppLayout>
    );
}

export default AdminUpdateProfile;