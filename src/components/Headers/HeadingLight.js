import React from 'react';

function HeadingLight(props) {
    return (
        <div className="row">
            <div className="col-lg-6">
                <h3 className="heading heading-large dark-1">
                    {props.heading}
                </h3>
            </div>
            <div className="col-lg-5 offset-lg-1">
                <div className="paragraph dark-2">
                    <p>{props.phrase}</p>
                </div>
            </div>
        </div>
    );
}

export default HeadingLight;
