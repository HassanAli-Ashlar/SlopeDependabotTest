import React from 'react';

function Heading(props) {
    if (props.phrase) {
        return (
            <>
                <div className={`projects-header bg-${props.bg}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h1 className="heading heading-very-large dark-1">
                                    {props.heading}
                                </h1>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="paragraph dark-1">
                                    <p>{props.phrase}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    if (props.listHeaderStatus) {
        return (
            <>
                <div className="row">
                    <div className="col-lg-9">
                        <h1 className="page-title">{props.heading}</h1>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="heading heading-very-large dark-1">
                            <h1 className="page-title">{props.heading}</h1>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Heading;
