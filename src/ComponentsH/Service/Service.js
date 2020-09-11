import React from 'react';
import './Service.scss';

const Service = ({stImage, stTitle, stDescription, numOrientation}) => {
    
    const order={order: numOrientation}

    return (
        <div class="o-image-container">
            <img className="o-image" src={stImage} alt="" />
            <div class="o-info" style={order}>
                <div className="o-service-description"><h1 className="o-service-title">{stTitle}</h1>{stDescription}</div>
            </div>
        </div>
    );
}

export default Service;