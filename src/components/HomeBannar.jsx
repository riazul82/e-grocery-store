import React from 'react';
// import bannarImg1 from '../images/categories/grapes.svg';
// import bannarImg2 from '../images/bannar/img2.jpg';
// import bannarImg3 from '../images/bannar/img3.jpg';
// import bannarImg4 from '../images/bannar/img4.jpg';

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
                {/* <img src={
                    (item === 0) ? bannarImg1 : 
                    (item === 1) ? bannarImg2 :
                    (item === 2) ? bannarImg3 :
                    (item === 3) ? bannarImg4 :
                    bannarImg1
                } alt="bannar" /> */}
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