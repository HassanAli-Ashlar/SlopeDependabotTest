import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import Testimonialtemplate from './Testimonialtemplate';
import testimonialdata from '../../Data/Testimonialdata.json';
import Art from '../Art';

function Testimonial() {
    const [totalSlides, setTotalSlides] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef(null);

    useEffect(() => {
        const updateSliderNav = () => {
            setActiveSlide(swiperRef.current?.swiper?.activeIndex);
            setTotalSlides(swiperRef.current?.swiper?.slides?.length);
        };

        if (swiperRef.current?.swiper) {
            updateSliderNav();
            swiperRef.current.swiper.on('slideChange', updateSliderNav);
        }
    }, [swiperRef.current]);

    const handlePrevSlide = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNextSlide = () => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const formatSlideNumber = (number) => {
        return number.toString().padStart(2, '0');
    };

    return (
        <div className="testimonial-section">
            <div className="testimonial-section-wrapper bg-grey position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper
                                ref={swiperRef}
                                className="testimonial-slider"
                                modules={[Navigation, Scrollbar, Autoplay]}
                                slidesPerView={1}
                                grabCursor={true}
                                autoplay={{ delay: 5000 }}
                                loop={false}
                                speed={2500}
                            >
                                {testimonialdata.map((item, index) => (
                                    <SwiperSlide
                                        className="testimonial-slide"
                                        key={index}
                                    >
                                        <Testimonialtemplate
                                            name={item.name}
                                            saying={item.saying}
                                            designation={item.designation}
                                            imageName={item.imageName}
                                        />
                                    </SwiperSlide>
                                ))}

                                <div className="slider--nav slider--nav-561011f">
                                    <div
                                        className="slider--nav-prev "
                                        onClick={handlePrevSlide}
                                    >
                                        <i className="fas fa-arrow-left"></i>
                                    </div>
                                    <h6 className="slider--nav-numbers">
                                        {formatSlideNumber(activeSlide + 1)} /{' '}
                                        {formatSlideNumber(totalSlides)}
                                    </h6>
                                    <div
                                        className="slider--nav-next "
                                        onClick={handleNextSlide}
                                    >
                                        <i className="fas fa-arrow-right"></i>
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <Art art5="true" />
            </div>
        </div>
    );
}

export default Testimonial;
