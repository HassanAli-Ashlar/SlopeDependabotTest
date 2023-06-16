import React from 'react';
import RelatedBlogs from '../components/BlogComponents/RelatedBlogs';
import BlogPost from '../Data/BlogPost';
import BlogDetailedHeader from '../components/BlogComponents/BlogDetailedHeader';
import BlogTags from '../components/BlogComponents/BlogTags';
import BlogSidebarColumn from '../components/BlogComponents/BlogSidebarColumn';
import CommentForm from '../components/Forms/CommentForm';
import CommentsSection from '../components/BlogComponents/CommentsSection';

function BlogDetailed() {
    return (
        <>
            <BlogDetailedHeader
                heading="New developments on the way and the team couldn’t be more excited."
                author="Khalil"
                category="Company"
                date="23 Sep. 2020"
                authorImage="author.png"
                thumbnail="blog_thumbnail_img_1.jpg"
            />

            <div class="container sidebar-page blog-single-page">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog-single-page-wrapper blog-single-page-wrapper-right">
                            {BlogPost.content}
                            <BlogTags
                                detailPageStatus="true"
                                tags={['agency', 'development', 'technology']}
                            />

                            <CommentsSection />

                            <CommentForm />
                        </div>
                    </div>
                    <BlogSidebarColumn />
                </div>
            </div>

            <RelatedBlogs />
        </>
    );
}

export default BlogDetailed;
