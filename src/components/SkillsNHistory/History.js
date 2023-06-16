import React from 'react';
import { Link } from 'react-router-dom';

function History() {
    return (
        <>
            <div className="col-lg-6 col-md-6 content-second-column">
                <h4 className="content-heading heading heading-small light-2">
                    HISTORY
                </h4>
                <div className="paragraph dark-1">
                    <p>
                        We help transform your ideas into real world
                        applications that will outperform your toughest
                        competition and help you achieve your strategic goals in
                        short period of time.
                    </p>
                    <p style={{ height: 'auto' }}>&nbsp;</p>
                    <p>
                        We have been creating award-winning brands, websites,
                        digital products, mobile apps and custom software since
                        2009.
                    </p>
                </div>
                <Link className="button" to="/About">
                    Learn More
                </Link>
            </div>
        </>
    );
}

export default History;
