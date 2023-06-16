import React from 'react';
import BlogRecentPostTemplate from './BlogRecentPostTemplate';
import RelatedBlogs from '../../Data/RelatedBlogs.json';

function BlogRecentPosts() {
    return (
        <li className="widget widget_slope_recent_posts">
            <h2 className="widgettitle">Recent Posts</h2>
            <ul className="recent-posts">
                {RelatedBlogs.map((item, index) => {
                    return index < 3 ? (
                        <React.Fragment key={index}>
                            <BlogRecentPostTemplate
                                image={item.image}
                                date={item.date}
                                designation={item.designation}
                                category={item.category}
                                title={item.title}
                                description={item.description}
                            />
                        </React.Fragment>
                    ) : undefined;
                })}
            </ul>
        </li>
    );
}

export default BlogRecentPosts;
