import React from 'react';

function ProjectSubHeading(props) {
    return (
        <>
            <div className="col-md-3">
                <div className="project-single-client">
                    <h4 className="heading heading-small dark-2">Client</h4>
                    <h3 className="heading heading-small dark-1">
                        {props.client}
                    </h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="project-single-service">
                    <h4 className="heading heading-small dark-2">Services</h4>
                    <h3 className="heading heading-small dark-1">
                        {props.service}
                    </h3>
                </div>
            </div>
            <div className="col-md-3">
                <div className="project-single-data">
                    <h4 className="heading heading-small dark-2">Date</h4>
                    <h3 className="heading heading-small dark-1">
                        {props.date}
                    </h3>
                </div>
            </div>
        </>
    );
}

export default ProjectSubHeading;
