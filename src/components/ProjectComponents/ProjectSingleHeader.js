import React from 'react';
import LargeHeading from '../Headers/LargeHeading';
import ProjectSubHeading from './ProjectSubHeading';

function ProjectSingleHeader() {
    return (
        <>
            <div className="project-single">
                <div className="project-single--header">
                    <div className="container">
                        <LargeHeading heading="Sleep therapy’s product landing page design with ecommerce integration." />
                    </div>
                    <div className="project-single-details">
                        <div className="container">
                            <div className="row">
                                <ProjectSubHeading
                                    client="Comfort"
                                    service="UI/UX Design"
                                    date="25 Nov. 2020"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectSingleHeader;
