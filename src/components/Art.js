import React from 'react';
import art1 from '../assets/images/art_1.png';
import art2 from '../assets/images/art_2.png';
import art3 from '../assets/images/art_3.png';

const Art = (props) => {
    if (props.art1) {
        return (
            <>
                <div className="artwork artwork-1">
                    <img src={art1} width="582" height="669" alt="artwork" />
                </div>
            </>
        );
    }
    if (props.art2) {
        return (
            <>
                <div className="artwork artwork-2">
                    <img src={art2} alt="artwork-2" />
                </div>
            </>
        );
    }
    if (props.art3) {
        return (
            <>
                <div className="artwork artwork-3">
                    <img src={art1} width="582" height="669" alt="artwork" />
                </div>
            </>
        );
    }
    if (props.art4) {
        return (
            <div className="artwork artwork-4">
                <img src={art3} alt="artwork" />
            </div>
        );
    }
    if (props.art5) {
        return (
            <>
                <div className="artwork artwork-5">
                    <img src={art2} alt="artwork-5" />
                </div>
            </>
        );
    }
};

export default Art;
