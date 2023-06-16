import React from 'react';
import Services1Header from '../components/ServicesComponents/Services1Header';
import Cta from '../components/CTA/Cta';
import TextContent from '../components/TextContent/TextContent';
import Heading from '../components/Headers/Heading';
import TabsSection from '../components/TabsSection';
import { ServicesData } from '../Data/ServicesData';
import ServiceBox from '../components/ServicesComponents/ServiceBox';

function ServicesStyle1() {
    return (
        <>
            <Services1Header />
            <div className="services-section">
                <div className="services-section-wrapper">
                    <div className="container">
                        <Heading heading="We create valuable experiences pushing brands forward." />
                        <div className="row service-withoutimage">
                            {ServicesData.map((item, index) => (
                                <React.Fragment key={index}>
                                    <ServiceBox
                                        index={item.index}
                                        icon={item.icon}
                                        title={item.title}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
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

export default ServicesStyle1;
