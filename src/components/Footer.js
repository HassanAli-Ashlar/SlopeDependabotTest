import React from 'react';
import logo from '../assets/images/logo.png';
import links from '../Data/Links.json';

function Footer() {
    return (
        <footer
            className="footer"
            style={{ position: 'relative', width: '100%' }}
        >
            <div className="footer--wrapper">
                <div className="container">
                    <div className="footer--header">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="footer--logo">
                                    <a href="index.html">
                                        <img src={logo} alt="footer" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <div className="footer--paragraph">
                                    <h3 className="heading heading-large light-1">
                                        A young digital agency in the heart of
                                        Sydney.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer--details">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="detail-single footer-phone-number">
                                    <h6>PHONE</h6>
                                    <a href="tel:8039376963">
                                        <h4>(803) 937 6963</h4>
                                    </a>
                                </div>
                                <div className="detail-single footer-address">
                                    <h6>ADDRESS</h6>
                                    <h4>
                                        Baldwinsville, Sydney,
                                        <br />
                                        NSW, Australia
                                    </h4>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single footer-email">
                                    <h6>ENQUIRIES</h6>
                                    <a href="/mailto:hello@example.com">
                                        <h4>hello@example.com</h4>
                                    </a>
                                </div>
                                <div className="detail-single">
                                    <div className="navigation-menu-social">
                                        <h6>FOLLOW</h6>

                                        {links.map((items, index) => (
                                            <ul key={index}>
                                                <li>
                                                    <a
                                                        href={`/${items.facebooklink}`}
                                                    >
                                                        <i className="fab fa-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={`/${items.twitterlink}`}
                                                    >
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={`/${items.pintrestlink}`}
                                                    >
                                                        <i className="fab fa-pinterest"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href={`/${items.behancelink}`}
                                                    >
                                                        <i className="fab fa-behance"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="detail-single">
                                    <div className="email-form">
                                        <label>SUBSCRIBE</label>
                                        <div className="email-form-field">
                                            <span className="email">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                />
                                            </span>
                                            <button type="submit">
                                                <i className="fas fa-check-circle"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <h6>Copyright © 2022.</h6>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
