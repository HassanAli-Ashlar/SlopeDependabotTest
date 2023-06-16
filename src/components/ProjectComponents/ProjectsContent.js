import React from 'react';
import ProjectBox from './ProjectBox';

function ProjectsContent() {
    return (
        <>
            <div className="projects-content">
                <div className="project-list project-list-2">
                    <ProjectBox
                        heading="UI/UX Design"
                        description="Sleep therapy’s product landing page design with ecommerce integration."
                        name="Landing Page"
                        namespan="Comfort"
                        image="project_thumbnail_img_01.jpg"
                    />

                    <ProjectBox
                        heading="UI/UX Design"
                        description="New digital ecommerce app for electronics."
                        name="Mobile Application"
                        namespan="Hanker"
                        image="project_thumbnail_img_02.jpg"
                    />

                    <ProjectBox
                        heading="UI/UX Design"
                        description="Desktop application design for modern dog walking business in Germany."
                        name="Website Design"
                        namespan="The Fox"
                        image="project_thumbnail_img_03.jpg"
                    />
                    <ProjectBox
                        heading="UI/UX Design"
                        description="Grocery website for buyers across Australia with iOS &amp; Android apps."
                        name="Yursayur"
                        namespan="The Fox"
                        image="project_thumbnail_img_05.jpg"
                    />
                </div>
            </div>
        </>
    );
}

export default ProjectsContent;
