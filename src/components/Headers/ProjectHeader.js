import React from 'react';

function ProjectHeader() {
    return (
        <div className="projects-header bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="heading heading-large light-1">
                            Recent work
                        </h3>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="paragraph light-2">
                            <p>
                                Our team helps companies develop their ideas
                                into cutting-edge products that will cause
                                customers to love and enjoy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;
