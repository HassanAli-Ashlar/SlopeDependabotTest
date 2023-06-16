import React from 'react';
import RelatedReads from './RelatedReads';

function RelatedBlogs() {
    return (
        <>
            <div className="related-posts">
                <div className="container">
                    <div className="related-posts--heading">
                        <h2>Related Reads.</h2>
                    </div>

                    <RelatedReads width="6" />
                </div>
            </div>
        </>
    );
}

export default RelatedBlogs;
