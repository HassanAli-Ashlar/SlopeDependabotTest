import React from 'react';
import { Link } from 'react-router-dom';

function Tagline() {
    return (
        <>
            <p>We’re available for partnerships and open for new projects.</p>
            <p>
                <Link to="/Contact">
                    <strong>
                        If you have an idea you’d like to discuss, share it with
                        our team!
                    </strong>
                </Link>
            </p>
        </>
    );
}

export default Tagline;
