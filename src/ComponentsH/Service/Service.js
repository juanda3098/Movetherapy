import React from 'react';
import './Service.css';

const Service = ({stImage, stTitle, stDescription, numOrientation}) => {
    
    const order={order: numOrientation}

    return (
        <div class="o-image-container">
            <img className="o-image" src={stImage} alt="" />
            <div class="o-info">
                <h1 className="o-service-title">{stTitle}</h1>
                <div className="o-service-description" style={order}>{stDescription}</div>
            </div>
        </div>
    );
}

export default Service;