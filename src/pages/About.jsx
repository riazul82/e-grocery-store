import React from 'react';
import AppLayout from '../layouts/AppLayout';
import Title from '../components/Title';
import ServiceCard from '../components/home/ServiceCard';

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
            <div>
                <h1>About</h1>
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