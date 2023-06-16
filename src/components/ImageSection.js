import React from 'react';

function ImageSection(props) {
    const reverse = props.reverse;
    const iconNum = props.iconNum;
    return (
        <>
            <div className="text-image">
                <div className="text-image-wrapper">
                    <div
                        className={`text-image-content  ${
                            reverse ? 'order-lg-2' : ''
                        }`}
                    >
                        <div className={`text-image-content-inner`}>
                            <h3 className="heading heading-large dark-1">
                                {props.heading}
                            </h3>
                            <div className="paragraph dark-1">
                                <p>{props.para1}</p>
                                <p style={{ height: 'auto' }}>&nbsp;</p>
                                <p>{props.para2}</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`text-image-image  ${
                            reverse ? 'order-lg-1' : ''
                        }`}
                    >
                        <img
                            src={`../assets/images/${props.imagePath}`}
                            alt="image-text"
                        />
                        <div
                            className={`icon ${
                                reverse ? 'reverse' : ' '
                            } ${iconNum}`}
                        >
                            {props.icon}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ImageSection;
