import React from 'react';
import Services1Header from '../components/ServicesComponents/Services1Header';
import Cta from '../components/CTA/Cta';
import ServiceBox from '../components/ServicesComponents/ServiceBox';
import TextContent from '../components/TextContent/TextContent';
import Heading from '../components/Headers/Heading';
import TabsSection from '../components/TabsSection';
import { ServicesImageData } from '../Data/ServicesData';

function ServiceStyle2() {
    return (
        <>
            <Services1Header />

            <div className="services">
                <div className="services-wrapper">
                    <div className="services-header-wrapper">
                        <div className="container">
                            <Heading heading="We create valuable experiences pushing brands forward." />
                        </div>
                    </div>
                    <div className="service-section service-image">
                        {ServicesImageData.map((item, index) => (
                            <React.Fragment key={index}>
                                <ServiceBox
                                    index={item.index}
                                    imagePath={item.imagePath}
                                    icon={item.icon}
                                    heading={item.heading}
                                    para={item.para}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>

            <TextContent />

            <div className="tab-section">
                <div className="tab-section-wrapper">
                    <div className="container">
                        <Heading heading="Impactful approach to problem solving." />
                        <TabsSection />
                    </div>
                </div>
            </div>
            <Cta />
        </>
    );
}

export default ServiceStyle2;
