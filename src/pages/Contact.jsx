import React from 'react';
import Title from '../components/Title';
import AppLayout from '../layouts/AppLayout';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { FaHeadset } from 'react-icons/fa';

const Contact = () => {
    return (
        <AppLayout>
            <div className="contact">
                <Title title="Contact" desc="Any Question? Just write us a message" />
                <div className="contactWrap">
                    <div className="contactAddress">
                        <div className="contactAddressText">
                            <h1 className="contactTextHeading">Let's Connect!</h1>
                            <p className="contactTextDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit dolor nihil iste porro distinctio. In
                                harum quidem mollitia quas natus aliquam dolore dolores.</p>
                        </div>
                        <div className="contactInfo">
                            <div className="contactInfoBox officeAddress">
                                <h3><FaMapMarkedAlt className="Icon" /><span>Address</span></h3>
                                <p>North Tower(3rd floor), Dhaka, Bangladesh</p>
                            </div>

                            <div className="contactInfoBox contactMail">
                                <h3><IoMdMail className="Icon" /><span>Mail</span></h3>
                                <p>ebazar@example.com</p>
                            </div>

                            <div className="contactInfoBox contactPhone">
                                <h3><FaHeadset className="Icon" /><span>Support</span></h3>
                                <p>+88 0123456789, +88 01298765431</p>
                            </div>
                        </div>
                    </div>

                    <div className="contactForm">
                        <form action="#">
                            <div className="inputField">
                                <input type="text" placeholder="Your name" autocomplete="off" required />
                            </div>

                            <div className="inputField">
                                <input type="email" placeholder="Your email" autocomplete="off" required />
                            </div>

                            <div className="inputField">
                                <input type="number" placeholder="Phone number" autocomplete="off" required />
                            </div>

                            <div className="textareaField">
                                <textarea name="textarea" id="textarea" placeholder="Your message" required></textarea>
                            </div>

                            <div className="buttonField">
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default Contact;