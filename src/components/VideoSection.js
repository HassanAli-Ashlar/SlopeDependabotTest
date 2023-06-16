import React from 'react';
import video from '../assets/video.mp4';
import Heading from './Headers/Heading';
import Art from './Art';

function VideoSection() {
    return (
        <>
            <div className="video-section top-section position-relative">
                <div className="top-heading">
                    <div className="container">
                        <Heading heading="Your ideas realized for the real world." />
                    </div>
                </div>
                <div className="video-container">
                    <video
                        muted
                        autoPlay
                        playsInline=""
                        preload="auto"
                        id="ec7cb14"
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <Art art1="true" />
            </div>
        </>
    );
}

export default VideoSection;
