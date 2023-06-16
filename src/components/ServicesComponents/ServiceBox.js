import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import gsap from 'gsap';
import { service_no_image_anim } from '../../utils';

function ServiceBox(props) {
    function service_image_anim(e) {
        if ($(window).width() < 992) {
            return;
        }
        let selector = $(e.target).parents('.service--box')[0];

        let selectorClass = selector.className.replace('service--box ', '');
        let iconImage = `.${selectorClass} > .service--box--image`;
        let iconBox = `.${selectorClass} > .service--box--image .icon`;
        let icon = `.${selectorClass} > .service--box--image .icon > i`;
        let iconSVG = `.${selectorClass} > .service--box--image .icon > svg`;
        let iconSVGPath = `.${selectorClass} > .service--box--image .icon svg path`;

        let selectorPosition = $(selector).index() + 1;

        const tl = new gsap.timeline({
            defaults: { duration: 0.5, ease: 'power4.out' },
        });

        tl.fromTo(
            iconBox,
            {
                width: '13.5rem',
                height: '13.5rem',
                opacity: 1,
                backgroundColor: 'rgba(0,246,255,1)',
            },
            {
                width: '100%',
                height: '100%',
                opacity: 1,
                backgroundColor: 'rgba(0,246,255,.5)',
            }
        );

        if ($(icon).length > 0) {
            tl.fromTo(
                icon,
                {
                    fontSize: '7rem',
                    color: 'var(--slope-foreground)',
                },
                {
                    fontSize: '10rem',
                    delay: -0.5,
                    color: '#ffffff',
                }
            );
        }
        if ($(iconSVG).length > 0) {
            tl.fromTo(
                iconSVGPath,
                {
                    fill: 'var(--slope-foreground)',
                    delay: -0.5,
                },
                {
                    fill: '#ffffff',
                    delay: -0.5,
                }
            ).fromTo(
                iconSVG,
                {
                    x: '-50%',
                    y: '-50%',
                    scale: 1,
                    delay: -0.5,
                },
                {
                    x: '-50%',
                    y: '-50%',
                    scale: 1.5,
                    delay: -0.5,
                }
            );
        }

        $(selector).on('mouseleave', () => {
            tl.reverse();
        });
    }

    useEffect(() => {
        let main_color = '--slope-main-color';
        let hover_color = '--slope-main-color-50';

        main_color = getComputedStyle(document.body)
            .getPropertyValue(main_color)
            .trim();
        hover_color = getComputedStyle(document.body)
            .getPropertyValue(hover_color)
            .trim();

        $('.service-image .service--box').on('mouseenter', service_image_anim);

        return () => {
            $('.service-image .service--box').off(
                'mouseenter',
                service_image_anim
            );
        };
    }, []);
    useEffect(() => {
        let main_color_hover = '--slope-main-color';
        main_color_hover = getComputedStyle(document.body)
            .getPropertyValue(main_color_hover)
            .trim();

        $('.service-withoutimage .service--box-icon').on(
            'mouseenter',
            service_no_image_anim
        );

        return () => {
            $('.service-withoutimage .service--box-icon').off(
                'mouseenter',
                service_no_image_anim
            );
        };
    }, []);

    if (props.imagePath) {
        return (
            <>
                <div className={`service--box service--box--${props.index}`}>
                    <div className="service--box--image">
                        <Link to="/ServicesDetailed">
                            <img
                                src={`../assets/images/${props.imagePath}`}
                                alt="service-image-1"
                            />
                            <div className="icon">{props.icon}</div>
                        </Link>
                    </div>

                    <a href="service-detailed.html">
                        <div className="service--box--content">
                            <h4>{props.heading}</h4>
                            <p>{props.para}</p>
                        </div>
                    </a>
                </div>
            </>
        );
    } else
        return (
            <>
                <div className="col-lg-4">
                    <div
                        className={`service--box-icon service--box--${props.index}`}
                    >
                        <a href="services-detailed.html">
                            <div className="icon">{props.icon}</div>
                            <div className="text">
                                <h4>{props.title}</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </>
        );
}

export default ServiceBox;
