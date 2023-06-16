import React from 'react';
import BlogSearch from './BlogSearch';
import BlogCategoryList from './BlogCategoryList';
import BlogRecentPosts from './BlogRecentPosts';
import BlogTags from './BlogTags';

function BlogWidgetsContainer({ handleFilterKeyChange }) {
    let tagarray = ['company', 'technology', 'development', 'agency'];
    return (
        <>
            <ul className="widget widget-container">
                <BlogSearch />
                <BlogCategoryList
                    handleFilterKeyChange={handleFilterKeyChange}
                />
                <BlogRecentPosts />
                <BlogTags tags={tagarray} />
            </ul>
        </>
    );
}

export default BlogWidgetsContainer;
