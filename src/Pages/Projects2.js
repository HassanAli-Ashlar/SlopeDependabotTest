import React from 'react';
import $ from 'jquery';
import { useEffect } from 'react';
import Testimonial from '../components/Testimonial/Testimonial';
import Loadbtn from '../components/Loadbtn';
import Cta from '../components/CTA/Cta';
import ProjectsContent from '../components/ProjectComponents/ProjectsContent';
import Heading from '../components/Headers/Heading';
import { project_anim } from '../utils';
function Projects2() {
    useEffect(() => {
        // add the project_anim function to the project list
        $(document).on(
            'mouseenter mousedown',
            '.project-list-2 .project-list-single--wrapper',
            project_anim
        );

        // update project list item heights on window load and resize
        $(window).on('load resize', () => {
            if ($(window).width() > 1024) return;

            $('.project-list-2 .project-list-single--wrapper').each(
                (_, element) => {
                    let height = $(element)
                        .find('.project-list-single--content-inner')
                        .height();

                    $(element).height(height + 200);
                }
            );
        });
    }, []);
    return (
        <>
            <Heading
                heading="Projects"
                phrase="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
            />
            <div className="projects">
                <ProjectsContent />
            </div>
            <Loadbtn />
            <Testimonial />
            <Cta />
        </>
    );
}

export default Projects2;
