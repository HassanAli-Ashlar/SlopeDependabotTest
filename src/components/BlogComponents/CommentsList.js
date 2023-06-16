import React from 'react';

function CommentsList(props) {
    return (
        <div>
            <div className="comment-list ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3 className="comment-list--heading">
                                {props.numOfReplies} Replies
                            </h3>

                            <div className="comment even thread-even depth-1 has-reply comment">
                                <div className="parent--comment">
                                    <div className="comment--avatar">
                                        <img
                                            alt="commenter-1"
                                            src={`assets/images/${props.commenterImage}`}
                                            height="64"
                                            width="64"
                                        />
                                    </div>
                                    <div className="comment--content">
                                        <div className="comment-inner-wrapper">
                                            <a href="/#">
                                                <h4 className="name">
                                                    {props.name}
                                                </h4>
                                            </a>
                                            <h5 className="date">
                                                {props.date}
                                            </h5>
                                        </div>
                                        <p>{props.comment}</p>

                                        <div className="reply-button">
                                            <a
                                                className="comment-reply-link"
                                                href="/#"
                                            >
                                                Reply
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommentsList;
