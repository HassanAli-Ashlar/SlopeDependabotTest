import React from 'react';
import BlogCard from './BlogCard';
import RelatedBlogs from '../../Data/RelatedBlogs.json';

function BlogContainer(props) {
    return (
        <div
            className="row blog-list-container blog-isotope-container blog-list-container-7bddf04 blog-list-container-grid-1"
            id="7bddf04"
        >
            {RelatedBlogs.map((item, index) => {
                return index < 2 ? (
                    <React.Fragment key={index}>
                        <BlogCard
                            width={props.width}
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
        </div>
    );
}

export default BlogContainer;
