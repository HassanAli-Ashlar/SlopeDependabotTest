import React from 'react';

function TextContentIInner(props) {
    return (
        <>
            <div className="text-content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h4 className="heading heading-small light-2">
                                STRATEGIC SESSION
                            </h4>
                            <div className="paragraph light-1">
                                <p>{props.para1}</p>
                            </div>
                        </div>
                        <div className="col-lg-6 second-column">
                            <h4 className="heading heading-small light-2">
                                FREE CONSULTATION
                            </h4>
                            <div className="paragraph light-1">
                                <p>{props.para2}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextContentIInner;
