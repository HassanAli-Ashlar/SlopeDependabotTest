import React from 'react';
import Art2 from '../Art2';
import DarkCta from '../CTA/DarkCta';

function ProjectResultContent(props) {
    return (
        <div>
            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <div className="text-content-inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h4 className="heading heading-small light-2">
                                        RESULTS
                                    </h4>
                                    <div className="paragraph light-1">
                                        <p>{props.results}</p>
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
                                                <span>{props.result1}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.result2}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.result3}</span>
                                            </li>
                                            <li>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 256 512"
                                                >
                                                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                                                </svg>
                                                <span>{props.result4}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-5 offset-lg-1 second-column">
                                    <div className="content-wrapper">
                                        <h4 className="heading heading-small light-2">
                                            <span>ROI</span>
                                        </h4>
                                        <div className="heading heading-large light-1">
                                            <p>{props.roi}</p>
                                        </div>
                                    </div>
                                    <div className="content-wrapper">
                                        <h4 className="heading heading-small light-2">
                                            <span>CUSTOMERS</span>
                                        </h4>
                                        <div className="heading heading-large light-1">
                                            <p>{props.customers}</p>
                                        </div>
                                    </div>
                                    <div className="content-wrapper">
                                        <h4 className="heading heading-small light-2">
                                            <span>DOWNLOADS</span>
                                        </h4>
                                        <div className="heading heading-large light-1">
                                            <p>{props.downloads}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <DarkCta />

                    <Art2 />
                </div>
            </div>
        </div>
    );
}

export default ProjectResultContent;
