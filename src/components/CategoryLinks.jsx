import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLinks = (props) => {
    return (
        <Link to={props.path} className={`categoryLink link ${props.classBox}`}>
            <div className="categoryLinkText">
                <p><strong>{props.title}</strong></p>
                <p><span>{props.quantity}</span> Items</p>
            </div>
        </Link>
    );
}

export default CategoryLinks;