import React, { useState } from 'react';
import '../../css/Post.css';

const Post = ({ content, comments }) => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-info">
          <img src="https://via.placeholder.com/40" alt="User" className="profile-pic" />
          <span className="username">Username</span>
        </div>
        <span className="options">...</span> {/* Options icon or menu */}
      </div>

      <div className="post-body">
        <div className="post-image">
          <img src="https://via.placeholder.com/500" alt="Post" />
        </div>
        <div className="post-content">
          {content}
        </div>
      </div>

      <div className="post-footer">
        <div className="post-actions">
          <button className="like-button">Like</button>
          <button className="reply-button">Reply</button>
          <button onClick={toggleComments} className="comment-toggle">
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
        {showComments && (
          <div className="post-comments">
            {comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
