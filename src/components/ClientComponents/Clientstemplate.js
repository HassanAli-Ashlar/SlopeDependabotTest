import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar, Navigation } from 'swiper';
import '../../assets/css/swiper-bundle.min.css';
import ClientSlide from './ClientSlide';

function Clientstemplate() {
    const slides = [1, 2, 3, 4, 5, 6]; // an array of 6 elements

    const [slidesPerView, setSlidesPerView] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 767) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call initially to set the correct value on component mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="client-slider overflow-hidden">
                <div className="row">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[Navigation, Scrollbar, Autoplay]}
                            slidesPerView={slidesPerView}
                            grabCursor={true}
                            autoplay={{ delay: 5000 }}
                            loop={false}
                            speed={2500}
                        >
                            {/* use the map function to render an array of ClientSlide components */}
                            {slides.map((slide) => (
                                <SwiperSlide
                                    className="client-slide"
                                    key={slide}
                                >
                                    <ClientSlide />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Clientstemplate;
