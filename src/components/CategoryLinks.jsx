import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLinks = (props) => {
    return (
        <Link to={props.path} className={`categoryLink link ${props.classBox}`}>
            <p><strong>{props.title}</strong></p>
            <p><span>{props.quantity}</span> Items</p>
        </Link>
    );
}

export default CategoryLinks;