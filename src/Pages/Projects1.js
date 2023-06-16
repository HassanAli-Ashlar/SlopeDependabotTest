import React from 'react';
import workdata from '../Data/WorkData.json';
import WorkTemplate from '../components/WorkTemplate';
import Testimonial from '../components/Testimonial/Testimonial';
import Loadbtn from '../components/Loadbtn';
import Cta from '../components/CTA/Cta';
import Heading from '../components/Headers/Heading';

function Projects1() {
    return (
        <>
            <Heading
                heading="Projects"
                phrase="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
            />
            <div className="projects">
                <div className="projects-wrapper">
                    <div className="project-list project-list-d06e8f6 project-list-1">
                        {workdata.map((item, index) => (
                            <React.Fragment key={index}>
                                <WorkTemplate
                                    title={item.title}
                                    heading={item.heading}
                                    headingmini={item.headingmini}
                                    headingmini2={item.headingmini2}
                                    imageName={item.imageName}
                                ></WorkTemplate>
                            </React.Fragment>
                        ))}

                        <Loadbtn />
                    </div>
                </div>
            </div>

            <Testimonial />
            <Cta />
        </>
    );
}

export default Projects1;
