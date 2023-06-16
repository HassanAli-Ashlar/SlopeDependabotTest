import React from 'react';
import Heading from '../components/Headers/Heading';
import AboutText from '../components/AboutComponents/AboutText';
import ImageSection from '../components/ImageSection';
import TextContent from '../components/TextContent/TextContent';
import TeamSection from '../components/AboutComponents/TeamSection';
import Testimonial from '../components/Testimonial/Testimonial';
import aboutheaderimage from '../assets/images/about-header.jpg';
import Art from '../components/Art';

function About() {
    return (
        <>
            <div className="page-header position-relative">
                <Heading
                    heading="About Us"
                    phrase="Our team helps companies develop their ideas into cutting-edge products that will cause customers to love and enjoy."
                />

                <div className="page-header-bottom">
                    <div className="single-image">
                        <img src={aboutheaderimage} alt="about-header" />
                    </div>
                    <Art art1="true" />
                </div>
            </div>
            <AboutText />
            <ImageSection
                heading="Rethink"
                para1="Over meat there under upon fish darkness void beast the above his greater deep don't midst don't good. Kind deep female signs said darkness seas very gathering isn't multiply fruitful."
                para2="Light fourth one female the stars from make saw years you'll light in them fourth likeness fruitful said herb creeping hath in."
                imagePath="image-text-1.jpg"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 60">
                        <title>bulb</title>
                        <path
                            d="M1521.5,1202.455H1514a1.875,1.875,0,0,1,0-3.75h7.5a1.875,1.875,0,0,1,0,3.75Zm3.753,11.25a1.875,1.875,0,0,1,1.875,1.875,2.052,2.052,0,0,1-1.039,1.678l-7.5,3.75a2.227,2.227,0,0,1-.839.2,1.876,1.876,0,0,1-1.875-1.876,2.05,2.05,0,0,1,1.037-1.677l7.5-3.75a2.227,2.227,0,0,1,.838-.2Zm1.873-28.125a1.876,1.876,0,0,1-1.875,1.875h0a2.247,2.247,0,0,1-.838-.2l-7.5-3.75a2.05,2.05,0,0,1-1.037-1.676,1.875,1.875,0,0,1,1.875-1.875,2.208,2.208,0,0,1,.839.2l7.5,3.75A2.05,2.05,0,0,1,1527.128,1185.58Zm22.512-5.625a20.62,20.62,0,0,1,20.613,20.613,23.864,23.864,0,0,1-5.105,13.579c-2.981,3.4-5.882,8.965-6.146,10.808l-.006,8.809a2.225,2.225,0,0,1-.316,1.034l-2.871,4.32a2.094,2.094,0,0,1-1.561.837h-9.243a2.1,2.1,0,0,1-1.559-.837l-2.871-4.317a2.191,2.191,0,0,1-.316-1.035l-.007-8.811c-.252-1.794-3.138-7.383-6.145-10.808a23.743,23.743,0,0,1-5.105-13.539v0a20.542,20.542,0,0,1,20.625-20.651Zm12.688,31.721a19.492,19.492,0,0,0,4.174-11.1,16.872,16.872,0,1,0-33.743,0v.016a19.461,19.461,0,0,0,4.168,11.08,39.994,39.994,0,0,1,5.929,9.526h13.55a39.89,39.89,0,0,1,5.926-9.526ZM1551.5,1189.33a1.875,1.875,0,0,1-1.875,1.875,9.393,9.393,0,0,0-9.375,9.375,1.875,1.875,0,0,1-3.75,0,13.154,13.154,0,0,1,13.125-13.125A1.874,1.874,0,0,1,1551.5,1189.33Zm3.75,35.625H1544l.006,3.75h11.25Zm0,7.5h-11.24v.739l2,3.011h7.233l2-3.011Zm18.753-45a1.876,1.876,0,0,1-1.875-1.875,2.05,2.05,0,0,1,1.037-1.677l7.5-3.75a2.208,2.208,0,0,1,.838-.2,1.874,1.874,0,0,1,1.875,1.875,2.049,2.049,0,0,1-1.036,1.676l-7.5,3.75a2.247,2.247,0,0,1-.839.2Zm9.376,31.875a1.876,1.876,0,0,1-1.876,1.876,2.227,2.227,0,0,1-.838-.2l-7.5-3.75a2.052,2.052,0,0,1-1.037-1.678,1.876,1.876,0,0,1,1.875-1.875,2.208,2.208,0,0,1,.839.2l7.5,3.75A2.05,2.05,0,0,1,1583.378,1219.33Zm3.749-18.75a1.875,1.875,0,0,1-1.875,1.875h-7.5a1.875,1.875,0,0,1,0-3.75h7.5A1.874,1.874,0,0,1,1587.127,1200.58Z"
                            transform="translate(-1512.127 -1179.955)"
                        ></path>
                    </svg>
                }
                title="bulb"
            />
            <ImageSection
                heading="Refresh"
                para1="Over meat there under upon fish darkness void beast the above his greater deep don't midst don't good. Kind deep female signs said darkness seas very gathering isn't multiply fruitful."
                para2="Light fourth one female the stars from make saw years you'll light in them fourth likeness fruitful said herb creeping hath in."
                imagePath="image-text-2.jpg"
                icon={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 60 59.611"
                    >
                        <title>arrows</title>
                        <path
                            d="M1511.848,1215.887l-.669.669a1.409,1.409,0,0,1-2.119-.149,18.741,18.741,0,0,1,14.956-30.046H1552.3l-7.992-7.992a1.407,1.407,0,0,1,0-1.989l.663-.663a1.406,1.406,0,0,1,1.988,0l11.525,11.525a1.406,1.406,0,0,1,0,1.988l-11.525,11.525a1.406,1.406,0,0,1-1.988,0l-.663-.663a1.406,1.406,0,0,1,0-1.988l7.992-7.993h-28.286a14.992,14.992,0,0,0-12.038,23.938A1.408,1.408,0,0,1,1511.848,1215.887Zm34.668,7.974H1518.23l7.993,7.993a1.406,1.406,0,0,1,0,1.988l-.663.663a1.407,1.407,0,0,1-1.989,0l-11.525-11.525a1.406,1.406,0,0,1,0-1.988l11.525-11.525a1.407,1.407,0,0,1,1.989,0l.663.663a1.407,1.407,0,0,1,0,1.989l-7.993,7.992h28.286a14.992,14.992,0,0,0,12.039-23.937,1.409,1.409,0,0,1,.129-1.839l.669-.668a1.408,1.408,0,0,1,2.119.149,18.74,18.74,0,0,1-14.956,30.045Z"
                            transform="translate(-1505.266 -1175.306)"
                        ></path>
                    </svg>
                }
                title="arrows"
                reverse="reverse"
            />
            <ImageSection
                heading="Respond"
                para1="Over meat there under upon fish darkness void beast the above his greater deep don't midst don't good. Kind deep female signs said darkness seas very gathering isn't multiply fruitful."
                para2="Light fourth one female the stars from make saw years you'll light in them fourth likeness fruitful said herb creeping hath in."
                imagePath="image-text-3.jpg"
                icon={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                        <title>rocket</title>
                        <path
                            d="M1562.231,1255.544c5.987,6.018,4.432,19.1-15.68,19.5v.027h-3.75v-3.75h.02c.218-14.143,6.35-18.754,11.984-18.754A10.721,10.721,0,0,1,1562.231,1255.544Zm40.568-28.559c0,12.033-6.494,19.309-15,24.735v12.238a6.165,6.165,0,0,1-3.1,5.021l-11.569,5.789a4.007,4.007,0,0,1-1.254.3,2.816,2.816,0,0,1-2.812-2.813v-12.186h0a11.252,11.252,0,0,0-11.248-11.248h-12.178a2.814,2.814,0,0,1-2.812-2.813,3.959,3.959,0,0,1,.3-1.253l5.789-11.578a6.17,6.17,0,0,1,5.025-3.105h12.208c5.413-8.53,12.665-15,24.757-15a42.523,42.523,0,0,1,9.641.8,2.126,2.126,0,0,1,1.458,1.457A41.617,41.617,0,0,1,1602.8,1226.985Zm-43.211,31.216a7.04,7.04,0,0,0-4.783-1.88c-8.387,0-8.248,14.571-8.256,14.988,7.7-.132,12.953-2.274,14.457-5.924A6.967,6.967,0,0,0,1559.588,1258.2Zm-1.247-13.083-.008-.053c1.857-3.75,3.94-7.961,5.573-11.249h-9.97a2.615,2.615,0,0,0-1.671,1.033l-5.11,10.216C1549.952,1245.065,1558.163,1245.112,1558.341,1245.118Zm40.709-18.133a40.77,40.77,0,0,0-.483-7.677,42.071,42.071,0,0,0-7.666-.491c-17.038,0-22.632,14.783-28.73,26.969a16.728,16.728,0,0,1,9.919,9.909C1584.169,1249.656,1599.05,1243.974,1599.05,1226.985Zm-15,26.978h-.015c-3.287,1.635-7.484,3.717-11.233,5.572l-.043-.006c.007.181.054,8.4.054,11.2l10.207-5.108a2.611,2.611,0,0,0,1.03-1.667Zm8.443-22.017a6.562,6.562,0,1,1-6.562-6.562h0A6.568,6.568,0,0,1,1592.5,1231.946Zm-3.75,0a2.812,2.812,0,1,0-2.812,2.812A2.814,2.814,0,0,0,1588.745,1231.946Z"
                            transform="translate(-1542.801 -1215.068)"
                        ></path>
                    </svg>
                }
                title="arrows"
            />
            <TextContent
                para1="Be heaven man be face fowl waters deep seas after seeing every she was for to behold days sixth sea said whose him fruitful forth good is very made in rule fill signs great spirit bring by beast abundantly heaven form in own seasons has saying man there said earth without set his is hath forth so image thing also blessed seas be creature of them man female their behold this third rule to give."
                para2="Be heaven man be face fowl waters deep seas after seeing every she was for to behold days sixth sea said whose him fruitful forth good is very made in rule fill signs great spirit bring by beast abundantly heaven form in own seasons has saying man there said earth without set his is hath forth so image thing also blessed seas be creature of them man female their behold this third rule to give."
            />
            <TeamSection />
            <Testimonial />
        </>
    );
}

export default About;
