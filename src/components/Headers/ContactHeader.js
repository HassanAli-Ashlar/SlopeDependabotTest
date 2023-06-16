import React from 'react';
import contactImage from '../../assets/images/contact_img.jpg';
import Art from '../Art';

function ContactHeader() {
    return (
        <>
            <div className="page-header position-relative">
                <div className="page-header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="heading heading-very-large dark-1">
                                    Let's get your free strategy session.
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-header-bottom">
                    <div className="single-image">
                        <img src={contactImage} alt="contact-header" />
                    </div>
                </div>
                <Art art1="true" />
            </div>
        </>
    );
}

export default ContactHeader;
