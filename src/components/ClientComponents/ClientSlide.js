import React from 'react';
import { Link } from 'react-router-dom';
import clientImage from '../../assets/images/client_logo_1.png';
import { SwiperSlide } from 'swiper/react';

function ClientSlide() {
    return (
        <>
            <Link to="#" className="client-image">
                <img src={clientImage} alt="client_logo" />
            </Link>
        </>
    );
}

export default ClientSlide;
