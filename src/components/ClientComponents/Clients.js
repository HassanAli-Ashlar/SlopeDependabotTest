import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Clientstemplate from './Clientstemplate';
import Heading from '../Headers/Heading';
import HeadingLight from '../Headers/HeadingLight';

function Clients() {
    return (
        <>
            <div className="client-section">
                <div className="client-section-wrapper">
                    <div className="container">
                        <div className="client-section-header">
                            <HeadingLight
                                heading="Our clients"
                                phrase="We’ve built strong relationships with our clients. Become our new client and expect nothing less than industry’s best."
                            />
                        </div>
                        <Clientstemplate />
                        <div className="d-none client-slider-1 d-lg-block">
                            <Clientstemplate />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clients;
