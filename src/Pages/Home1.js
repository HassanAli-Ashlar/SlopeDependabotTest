import React, { useEffect } from 'react';

import WorkTemplate from '../components/WorkTemplate';
import Clients from '../components/ClientComponents/Clients';
import Testimonial from '../components/Testimonial/Testimonial';
import workdata from '../Data/WorkData.json';
import VideoSection from '../components/VideoSection';
import TextAboutSection from '../components/SkillsNHistory/TextAboutSection';
import Cta from '../components/CTA/Cta';
import ProjectHeader from '../components/Headers/ProjectHeader';

const Home1 = () => {
    useEffect(() => {
        function handleVideoEnd() {
            const videoElement = document.querySelector('video');
            videoElement.pause();
            videoElement.currentTime = 0.44;
            videoElement.play();
        }

        const videoElement = document.querySelector('video');
        videoElement.addEventListener('ended', handleVideoEnd);

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <>
            {/* Video section - start */}
            <VideoSection />
            {/* Video section - end */}

            {/* About section - start */}
            <TextAboutSection />
            {/* About section - end */}

            {/* Projects section - start */}
            <div className="projects">
                <div className="projects-wrapper">
                    <ProjectHeader />
                    <div className="project-list project-list-1">
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
                    </div>
                    <Cta dark="true" />
                </div>
            </div>
            {/* Projects section - end */}
            
            {/* Testimonials section - start */}
            <Testimonial />
            {/* Testimonials section - end */}
            
            {/* Clients section - start */}
            <Clients />
            {/* Clients section - end */}
        </>
    );
};

export default Home1;
