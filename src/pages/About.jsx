import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Title from '../components/Title';
import ServiceCard from '../components/home/ServiceCard';

import aboutImg1 from '../assets/images/project/bannar.jpg';

const serviceCardData = [
    {title: 'Fresh Products', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Fast Delivery', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Best Pricing', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Random Offers', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Easy Payment', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'},
    {title: 'Customer Support', desc: 'Illum qutem optio alias ducimus dignissimos conseture undeiurer sapiente explicabo dolore pariatur eligendite amet asperiores lorem ipsum dolor sit amet consect adipisicing elit.'}
];

const About = () => {
    return (
        <AppLayout>
            <div className="about">
                <div className="aboutContent">
                    <Title title="About US" desc="Who we are & What we provide" />
                    <div className="aboutSectionWrap">
                        <div className="aboutText">
                            <p className="aboutGreetings">Welcome to eBazar!</p>
                            <h2 className="aboutTextHeading">Best Grocery Solutions online</h2>
                            <p className="aboutTextDesc">Atque molestias illo consectetur odio laborum libero consectetur accusamus reiciendis molestias laboriosam omnis dolor cupiditate fugit iusto perferendis praesentium eos excepturi magnam corporis earum magnam est cumque commodi voluptate distinctio perspiciatis aperiam rerum quae soluta quam incidunt quis beatae corrupti eaque.</p>
                            <p className="aboutTextDesc">Eacilis in corporis ad itaque minus necessitatibus laudantium quod inventore sint repellat nam lorem ipsum dolor sit amet consectetur adipisicing elit atque molestias illo consectetur odio laborum libero doloremque.</p>
                            <p className="aboutTextDesc">Stque molestias illo consectetur odio laborum libero doloremque lorem ipsum dolor sit amet consectetur adipisicing elit doloremque facilis atque.</p>
                            <button className="readMoreBtn">Read More</button>
                        </div>
                        <div className="aboutImage">
                            <img src={aboutImg1} alt="about" />
                        </div>
                    </div>
                </div>

                <div className="services">
                    <Title title="Quality Services" desc="Explore the best shopping experience" />
                    <div className="serviceCards">
                        {serviceCardData.map((data, index) => {
                            return <ServiceCard data={data} cardNo={index + 1} key={index} />
                        })}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

export default About;