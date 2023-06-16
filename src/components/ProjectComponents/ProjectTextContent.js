import React from 'react';

function ProjectTextContent(props) {
    return (
        <>
            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <div className="text-content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="heading heading-small light-2">
                                        PROBLEM
                                    </h4>
                                    <div className="paragraph light-1">
                                        <p>{props.problemStatement}</p>
                                    </div>
                                    <div className="text-list medium light-1">
                                        <ul>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.challenge1}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.challenge2}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.challenge3}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.challenge4}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6 second-column">
                                    <h4 className="heading heading-small light-2">
                                        CHALLENGES
                                    </h4>
                                    <div className="paragraph light-1">
                                        <p>{props.challengeStatement}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectTextContent;
