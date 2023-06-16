import React from 'react';
import aboutheader from '../../assets/images/about-header.jpg';
import Heading from '../Headers/Heading';
import Art from '../Art';

function Services1Header() {
    return (
        <>
            <div className="position-relative">
                <Heading
                    heading="Capabilities"
                    phrase="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                    bg="white"
                />
                <div className="page-header-bottom">
                    <div className="single-image">
                        <img src={aboutheader} alt="about-header" />
                    </div>
                </div>
                <Art art1="true" />
            </div>
        </>
    );
}

export default Services1Header;
