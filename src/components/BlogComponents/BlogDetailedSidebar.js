import React from 'react';
import Tagline from '../Tagline';
import BlogPostTags from './BlogPostTags';
import CommentsList from './CommentsList';
import CommentForm from '../Forms/CommentForm';

function BlogDetailedSidebar(props) {
    let tagarray = ['Agency', 'Development', 'Technology'];
    return (
        <>
            <div className="col-lg-8">
                <div className="blog-single-page-wrapper blog-single-page-wrapper-right">
                    <div className="blog-single-content-wrapper">
                        <div className="heading heading-large dark-1 quote">
                            <p>{props.heading}</p>
                        </div>
                        <div className="paragraph dark-1">
                            <p>{props.para1}</p>
                        </div>
                        <div className="heading heading-medium dark-1 ">
                            <p>{props.headingmini1}</p>
                        </div>
                        <div className="paragraph dark-1">
                            <p>{props.para2}</p>
                            <p style={{ height: 'auto' }}>&nbsp;</p>
                            <p>{props.para3}</p>
                        </div>

                        <div className="heading heading-medium dark-1 ">
                            <p>{props.headingmini2}</p>
                        </div>
                        <div className="paragraph dark-1">
                            <p>{props.para4}</p>
                            <p style={{ height: 'auto' }}>&nbsp;</p>
                            <p>{props.para5}</p>
                        </div>
                        <div className="heading heading-medium dark-1">
                            <p>{props.headingmini3}</p>
                        </div>
                        <div className="paragraph dark-1">
                            <p>{props.para6}</p>
                            <p style={{ height: 'auto' }}>&nbsp;</p>
                            <Tagline />
                        </div>
                    </div>

                    <BlogPostTags tags={tagarray} />

                    <CommentsList
                        numOfReplies="3"
                        commenterImage="testimonial-img-2.png"
                        name="Mark Stewart"
                        date="Dec 8, 2020"
                        comment="Were make night hath thing you’ll you night beast moving seasons over you’re face is said also to light first multiply that their wherein deep, green under there darkness you."
                    />

                    <CommentForm />
                </div>
            </div>
        </>
    );
}

export default BlogDetailedSidebar;
