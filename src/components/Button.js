import React from 'react';
import { Link } from 'react-router-dom';

function Button(props) {
    return (
        <div>
            <Link
                className={`button button-${props.btntype}`}
                to={`/${props.link}`}
            >
                {props.btnText}
            </Link>
        </div>
    );
}

export default Button;
