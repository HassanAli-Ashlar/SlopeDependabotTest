import React from 'react';
import { Link } from 'react-router-dom';

function MiniNav() {
    return (
        <div>
            <div className="navigation-menu-menu">
                <div className="navigation-menu-menu--wrapper">
                    <ul id="menu-main-menu-1" className="menu">
                        <li className="menu-item">
                            <Link to="/">
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/About">
                                <span>Pages</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/Services1">
                                <span>Services</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/Projects1">
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/Bloggrid">
                                <span>Blog</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MiniNav;
