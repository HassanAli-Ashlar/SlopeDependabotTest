import React, { useEffect } from 'react';
import Heading from '../components/Headers/Heading';
import PostFilterDropDown from '../components/Navs/PostFilterDropDown';
import BlogContainer from '../components/BlogComponents/BlogContainer';
import Cta from '../components/CTA/Cta';
import BlogPagination from '../components/BlogComponents/BlogPagination';
import PostFilterNav from '../components/Navs/PostFilterNav';
import Isotope from 'isotope-layout';

function Bloggrid() {
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
            <div className="blog-heading">
                <div className="container">
                    <Heading
                        className="col-lg-8"
                        heading="Read from recent blog writings."
                    />
                </div>
            </div>

            <div className="blog-section blog-section-grid">
                <div className="blog-section-wrapper">
                    <div className="blog-list blog-grid">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <PostFilterNav
                                        handleFilterKeyChange={
                                            handleFilterKeyChange
                                        }
                                    />
                                    <PostFilterDropDown
                                        handleFilterKeyChange={
                                            handleFilterKeyChange
                                        }
                                    />
                                </div>
                            </div>

                            <BlogContainer width="6" />
                            <BlogPagination />
                        </div>
                    </div>
                </div>
            </div>

            <Cta />
        </>
    );
}

export default Bloggrid;
