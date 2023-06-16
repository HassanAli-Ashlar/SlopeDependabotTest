import React from 'react';
import BlogContainer from './BlogContainer';
import BlogPagination from './BlogPagination';
function BlogSidebarPage() {
    return (
        <>
            <div class="col-lg-8">
                <div class="content-column right-sidebar">
                    <div class="page-content-wrapper">
                        <div class="blog-list">
                            <div class="container">
                                <BlogContainer width="12" />
                                <BlogPagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogSidebarPage;
