import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import $ from 'jquery';
import { team_member_anim } from '../../utils';

function AboutTeamMember(props) {
    useEffect(() => {
        $(document).on('mouseenter', '.team-member', team_member_anim);

        return () => {
            $(document).off('mouseenter', '.team-member', team_member_anim);
        };
    }, []);

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="team-member">
                    <div className="team-member-image">
                        <img
                            width="370"
                            height="455"
                            src={`../assets/images/${props.imageName}`}
                            alt="team-member"
                        />
                        <div className="team-member-social">
                            <ul>
                                <li>
                                    <a href="/#">
                                        <i
                                            aria-hidden="true"
                                            className="fab fa-facebook-f"
                                        ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i
                                            aria-hidden="true"
                                            className="fab fa-instagram"
                                        ></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#">
                                        <i
                                            aria-hidden="true"
                                            className="fab fa-twitter"
                                        ></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="team-member-content">
                        <h5>{props.name}</h5>
                        <h6>{props.designation}</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutTeamMember;
