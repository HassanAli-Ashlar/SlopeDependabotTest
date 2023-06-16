import React from 'react';

function Testimonialtemplate(props) {
    return (
        <>
            <React.Fragment>
                <div className="testimonial-image">
                    <img
                        src={`../assets/images/${props.imageName}`}
                        alt="people_img_4"
                    />
                </div>
                <div className="testimonial-content">
                    <div>
                        <span>“</span>
                        {props.saying}
                        <span>”</span>
                    </div>
                    <h3>{props.name}</h3>
                    <h4>{props.designation}</h4>
                </div>
            </React.Fragment>
        </>
    );
}

export default Testimonialtemplate;
