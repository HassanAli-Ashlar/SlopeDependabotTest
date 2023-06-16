import React from 'react';
import { Link } from 'react-router-dom';

function WorkTemplate(props) {
    return (
        <>
            <Link
                to="/ProjectDetailed"
                className="project-list-single--wrapper"
            >
                <div className="project-list-single">
                    <div className="project-list-single--content">
                        <div className="project-list-single--content-inner">
                            <div className="project-single-service project-single-service-1">
                                <h3>{props.title}</h3>
                            </div>
                            <h2>{props.heading}</h2>
                            <div className="project-single-service project-single-service-2 project-single-client">
                                <h3>
                                    {props.headingmini}
                                    <span>—</span>
                                    {props.headingmini2}
                                </h3>
                            </div>
                            <div className="project-single-button">
                                <div className="project-single-button--inner">
                                    <i className="fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-list-single--thumbnail">
                        <img
                            src={`../assets/images/${props.imageName}`}
                            alt=""
                        />
                    </div>
                </div>
            </Link>
        </>
    );
}

export default WorkTemplate;
