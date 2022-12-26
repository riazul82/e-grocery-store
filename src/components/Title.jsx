import React from 'react';
// import leaf from '../assets/images/icons/marijuana2.png';
import leaf from '../assets/images/icons/terpene.png';

const Title = ({title, desc}) => {
    return (
        <div className="titleWrap">
            <div className="titleBox">
                <div className="titleImg">
                    <img src={leaf} className="imgLeft" alt="leaves" />
                </div>
                <p className="title">{title}</p>
                <div className="titleImg">
                    <img src={leaf} alt="leaves" />
                </div>
            </div>
            <p className="titleDesc">{desc}</p>
        </div>
    );
}

export default Title
