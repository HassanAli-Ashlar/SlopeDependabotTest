import React from 'react';
import blogimage from '../../assets/images/blog_content_img.jpg';
import TextContentHeader from './TextContentHeader';
import Cta from '../CTA/Cta';
import TextContentIInner from './TextContentIInner';
import Art from '../Art';

function TextContent() {
    return (
        <>
            <div className="text-content">
                <div className="text-content-wrapper position-relative bg-black">
                    <TextContentHeader />
                    <TextContentIInner
                        para1="Be heaven man be face fowl waters deep seas after seeing every she was for to behold days sixth sea said whose him fruitful forth good is very made in rule fill signs great spirit bring by beast abundantly heaven form in own seasons has saying man there said earth without set his is hath forth so image thing also blessed seas be creature of them man female their behold this third rule to give."
                        para2="Be heaven man be face fowl waters deep seas after seeing every she was for to behold days sixth sea said whose him fruitful forth good is very made in rule fill signs great spirit bring by beast abundantly heaven form in own seasons has saying man there said earth without set his is hath forth so image thing also blessed seas be creature of them man female their behold this third rule to give."
                    />
                    <Cta textContentFooter="true" dark="true" />
                    <Art art2="true" />
                </div>

                <div className="single-image ">
                    <img src={blogimage} alt="generic" />
                </div>
            </div>
        </>
    );
}

export default TextContent;
