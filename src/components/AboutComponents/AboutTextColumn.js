import React from 'react';

function AboutTextColumn(props) {
    return (
        <>
            <div className="col-lg-6">
                <h4 className="heading heading-small light-2">{props.title}</h4>
                <div className="paragraph light-1">
                    <p>{props.para}</p>
                </div>
            </div>
        </>
    );
}

export default AboutTextColumn;
