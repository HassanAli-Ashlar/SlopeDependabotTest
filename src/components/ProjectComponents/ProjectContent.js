import React from 'react';

function ProjectContent(props) {
    return (
        <div>
            <div className="project-content">
                <div className="project-content-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="project-content-inner">
                                    <h2 className="heading heading-large dark-1">
                                        {props.heading}
                                    </h2>
                                    <div className="paragraph dark-1">
                                        <p>{props.para1}</p>
                                    </div>
                                    <div className="heading heading-medium dark-1">
                                        <p>Strategy Sessions</p>
                                    </div>
                                    <div className="paragraph dark-1">
                                        <p>{props.strategyDetails}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-image-wrapper">
                        <div className="single-image">
                            <img
                                src={`assets/images/${props.image2}`}
                                alt="project-detailed-2"
                            />
                        </div>
                        <div className="single-image">
                            <img
                                src={`assets/images/${props.image3}`}
                                alt="project-detailed-3"
                            />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="project-content-inner">
                                    <h2 className="heading heading-medium dark-1">
                                        Plan of Action.
                                    </h2>
                                    <div className="paragraph dark-1">
                                        <p>{props.planDetail1}</p>
                                        <p style={{ height: 'auto' }}>&nbsp;</p>
                                        <p>{props.planDetail2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-image">
                        <img
                            src={`assets/images/${props.image4}`}
                            alt="project-detailed-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectContent;
