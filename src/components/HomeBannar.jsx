import React from 'react';

import bannarImg from '../assets/images/bannar/img1.jpg';

const HomeBannar = () => {

    const item = Math.floor(Math.random() * 4);
    const text = [
        {txt1: "Explore the best1", txt2: "grocery shop online1"},
        {txt1: "Explore the best2", txt2: "grocery shop online2"},
        {txt1: "Explore the best3", txt2: "grocery shop online3"},
        {txt1: "Explore the best4", txt2: "grocery shop online4"},
    ]
    
    return (
        <div className="homeBanner">
            <div className="homeBannerImage">
                <img src={ bannarImg } alt="bannar" />
            </div>
            <div className="homeBannerTitle">
                {/* <h1 className="homeBannerText">Best Dairy Products<br/> Online</h1> */}
                <h1 className="homeBannerText animate__animated animate__bounceInLeft">{text[item].txt1}</h1>
                <h1 className="homeBannerText animate__animated animate__bounceInRight">{text[item].txt2}</h1>
                <button className="homeBannerButton animate__animated animate__bounceInLeft">Shop now</button>
            </div>
        </div>
    );
}

export default HomeBannar;