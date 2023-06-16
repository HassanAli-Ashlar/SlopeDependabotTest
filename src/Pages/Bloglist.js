import React, { useEffect } from 'react';
import Heading from '../components/Headers/Heading';
import Cta from '../components/CTA/Cta';
import BlogSidebarPage from '../components/BlogComponents/BlogSidebarPage';
import BlogSidebarColumn from '../components/BlogComponents/BlogSidebarColumn';
import Isotope from 'isotope-layout';

function Bloglist() {
    // init one ref to store the future isotope object
    const isotope = React.useRef();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*');

    // initialize an Isotope object with configs
    useEffect(() => {
        isotope.current = new Isotope('.blog-list-container', {
            itemSelector: '.blog-list-item',
            layoutMode: 'fitRows',
        });
        // cleanup
        // cleanup
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
                isotope.current = null;
            }
        };
    }, []);

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = (key) => () => setFilterKey(key);

    return (
        <>
            <div className="container">
                <Heading
                    listHeaderStatus="true"
                    className="col-lg-8"
                    heading="Read from recent blog writings."
                />
            </div>

            <div class="container sidebar-page">
                <div class="row ">
                    <BlogSidebarPage />
                    <BlogSidebarColumn
                        handleFilterKeyChange={handleFilterKeyChange}
                    />
                </div>
            </div>

            <Cta />
        </>
    );
}

export default Bloglist;
