import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div class="o-aboutus-container">
            <img className="o-image" src="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" alt="" />
            <div class="o-info">
                <h1 className="o-aboutus-title">Quienes somos</h1>
                <div className="o-aboutus-description">Move Therapy es una clinica de rehabilitacion y acondicionamiento fisico de la ciudad de Cali</div>
            </div>
        </div>
    );
}

export default AboutUs;