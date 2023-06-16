import React from 'react';
import { Link } from 'react-router-dom';

function BlogPostTags(props) {
    const tags = props.tags;
    return (
        <div>
            <div className="post-tags">
                <h6>Tags: </h6>
                <ul>
                    {tags.map((item, index) => (
                        <li>
                            <Link to="/BlogDetailed" rel="tag" key={index}>
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default BlogPostTags;
