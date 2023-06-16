import React from 'react';
import Button from '../Button';
import Art from '../Art';

function Cta(props) {
    if (props.dark) {
        return (
            <>
                <div
                    className={`projects-footer-1 bg-black ${
                        props.textContentFooter
                            ? 'text-content-footer'
                            : 'projects-footer '
                    }`}
                >
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-md-6">
                                <h3 className="heading heading-large light-1">
                                    Have an idea?
                                    <br />
                                    Let’s get it done right!
                                </h3>
                            </div>
                            <div className="col-md-6 d-md-inline-flex justify-content-md-end">
                                <div className="button-wrapper">
                                    <Button
                                        btnText="Let's Work Together"
                                        link="Contact"
                                        btntype="1"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else
        return (
            <>
                <div className="cta">
                    <div className="cta-wrapper position-relative bg-main">
                        <div className="container">
                            <div className="row align-items-lg-center">
                                <div className="col-md-6">
                                    <h3 className="heading heading-large dark-1">
                                        Have an idea?
                                        <br />
                                        Let’s get it done right!
                                    </h3>
                                </div>
                                <div className="col-md-6 d-md-inline-flex justify-content-md-end">
                                    <div className="button-wrapper">
                                        <Button
                                            btnText="Let's Work Together"
                                            link="Contact"
                                            btntype="2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Art art4="true" />
                    </div>
                </div>
            </>
        );
}

export default Cta;
