import React from 'react';
import logo from '../../assets/images/logo.png';

function AboutText() {
    return (
        <>
            <div className="about-text-section">
                <div className="about-text-section-wrapper bg-black text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="about-text-section-inner">
                                    <img src={logo} alt="about-logo" />
                                    <h2 className="heading heading-large light-1">
                                        To deliver our expertise flexibly and
                                        with maximum impact, we have developed
                                        three different ways of working. Each is
                                        adaptable to your core needs, processes
                                        and culture of your business.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutText;
