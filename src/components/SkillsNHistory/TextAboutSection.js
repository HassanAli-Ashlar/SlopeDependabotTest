import React from 'react';
import History from './History';
import SkillsTab from './SkillsTab';
import Heading from '../Headers/Heading';

function TextAboutSection() {
    return (
        <>
            <div className="text-about-section">
                <div className="text-about-section-wrapper">
                    <div className="container">
                        <Heading heading="We're chilled and a laidback agency" />
                        <div className="content-wrapper">
                            <div className="row">
                                <SkillsTab />
                                <History />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TextAboutSection;
