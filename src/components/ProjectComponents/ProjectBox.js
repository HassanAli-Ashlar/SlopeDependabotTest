import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProjectBox(props) {
    return (
        <Link to="/ProjectDetailed" className="project-list-single--wrapper">
            <div className="project-list-single">
                <div className="project-list-single--content">
                    <div className="project-list-single--content-inner">
                        <div className="project-single-service project-single-service-1">
                            <h3>{props.heading}</h3>
                        </div>
                        <h2>{props.description}</h2>
                        <div className="project-single-service project-single-service-2 project-single-client">
                            <h3>
                                {props.name}
                                <span>—</span>
                                {props.namespan}
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
                        src={`assets/images/${props.image}`}
                        alt="project-img-1"
                    />
                </div>
            </div>
        </Link>
    );
}

export default ProjectBox;
