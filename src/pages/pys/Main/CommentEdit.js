import React, { useState } from 'react';

const CommentEdit = ({ comment }) => {
  const [editComment, setEditComment] = useState('comment');
  const handleCommentEdit = (e) => {
    setEditComment(e.target.value);
  };
  return (
    <div>
      <ul id="commentList">
        <li className="comment-list">
          <div className="comment-list-form">
            <span className="comment-list-id"> hellohaileyworld </span>
            <input
              className="comment-list-item"
              onChange={handleCommentEdit}
              value={editComment}
            >
              {comment}
            </input>
          </div>
          <div>
            <button type="button" className="edit-button">
              완료
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommentEdit;
