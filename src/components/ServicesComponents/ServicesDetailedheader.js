import React from 'react';
import Heading from '../Headers/Heading';
import Art from '../Art';

function ServicesDetailedheader() {
    return (
        <>
            <div className="page-header position-relative">
                <div className="page-header-top">
                    <div className="container">
                        <Heading heading="Strategy" />
                    </div>
                </div>
                <div className="page-header-bottom">
                    <div className="single-image">
                        <img
                            src="assets/images/services-1.jpg"
                            alt="about-header"
                        />
                    </div>
                </div>
                <Art art1="true" />
            </div>
        </>
    );
}

export default ServicesDetailedheader;
