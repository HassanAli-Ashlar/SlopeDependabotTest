import React from 'react';
import BlogWidgetsContainer from './BlogWidgetsContainer';

function BlogSidebarColumn({ handleFilterKeyChange }) {
    return (
        <>
            <div className="col-lg-4 sidebar-column">
                <div className="sidebar-column-wrapper">
                    <BlogWidgetsContainer
                        handleFilterKeyChange={handleFilterKeyChange}
                    />
                </div>
            </div>
        </>
    );
}

export default BlogSidebarColumn;
