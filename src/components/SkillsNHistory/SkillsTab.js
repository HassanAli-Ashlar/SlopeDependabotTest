import React from 'react';
import { Link } from 'react-router-dom';

function SkillsTab() {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <h4 className="content-heading heading heading-small light-2">
                    SKILLS
                </h4>
                <div className="text-list text-list-large dark-1">
                    <ul>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Strategy</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Brand Identities</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Print Design</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>UI/UX Design</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Art Direction</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Back End</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Admin System</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/ServicesDetailed">
                                <span>Front End</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default SkillsTab;
