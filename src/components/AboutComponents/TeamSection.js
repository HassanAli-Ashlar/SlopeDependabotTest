import React from 'react';
import AboutTeamMember from './AboutTeamMember';
import AboutTeamData from '../../Data/AboutTeamData.json';
import HeadingLight from '../Headers/HeadingLight';

function TeamSection() {
    return (
        <>
            <div className="team">
                <div className="team-wrapper">
                    <div className="team-header">
                        <div class="container">
                            <HeadingLight
                                heading="Our team"
                                phrase="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                            />
                        </div>
                    </div>
                    <div className="team-content">
                        <div className="container">
                            <div className="row">
                                {AboutTeamData.map((item, index) => (
                                    <AboutTeamMember
                                        key={index}
                                        name={item.name}
                                        designation={item.designation}
                                        imageName={item.imageName}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamSection;
