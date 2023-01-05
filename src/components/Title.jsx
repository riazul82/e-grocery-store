import React from 'react';

const Title = ({ title, desc }) => {
    return (
        <div className="titleWrap">
            <div className="titleBox">
                <p className="title">{title}</p>
            </div>
            <p className="titleDesc">{desc}</p>
        </div>
    );
}

export default Title;