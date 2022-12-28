import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({cardNo, data}) => {
    return (
        <div className="serviceCard">
            <div className="serviceCardTitle">
                <p className="cardNo">{`0${cardNo}`}</p>
                <p className="cardTitle">{data.title}</p>
            </div>
            <div className="serviceCardDesc">
                <p className="descText">{data.desc}</p>
                <div className="readMoreLink">
                    <Link to="/about" className="link">Read more</Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;