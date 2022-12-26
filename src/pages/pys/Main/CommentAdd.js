import React, { useState } from 'react';

const CommentAdd = ({ comment, index, editCommentList }) => {
  const [heart, setHeart] = useState(true);
  const [editing, setEditing] = useState(true);
  const [editCommentValue, setEditCommentValue] = useState('');

  const editComment = (e) => {
    setEditCommentValue(e.target.value);
  };
  const handleHeartClick = () => {
    return setHeart(!heart);
  };

  const onClickEdit = (e) => {
    setEditing(!editing);
  };

  const onClickDelete = (e) => {
    return e.target.parentElement.parentElement.parentElement.remove();
  };

  const onSubmit = (index, editCommentValue) => (e) => {
    e.preventDefault();
    setEditing(true);
    editCommentList(index, editCommentValue);
  };

  return (
    <div>
      <ul id="commentList">
        <li className="comment-list">
          <div className="comment-list-form">
            <span className="comment-list-id"> hellohaileyworld </span>
            {editing ? (
              <div>
                <span className="comment-list-item">{comment}</span>
                <div>
                  <button
                    onClick={onClickEdit}
                    type="button"
                    className="edit-button"
                  >
                    edit
                  </button>
                  <button
                    onClick={onClickDelete}
                    type="button"
                    className="remove-button"
                  >
                    x
                  </button>
                  {heart ? (
                    <img
                      onClick={handleHeartClick}
                      value={heart}
                      id="comment-like-btn"
                      src="images/pys/like.png"
                      alt="likeButton"
                    />
                  ) : (
                    <img
                      onClick={handleHeartClick}
                      value={heart}
                      id="comment-like-btn"
                      src="images/pys/liked.png"
                      alt="likedButton"
                    />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <input
                  className="comment-list-item"
                  placeholder={comment}
                  onChange={editComment}
                  value={editCommentValue}
                />
                <button onClick={onSubmit(index, editCommentValue)}>
                  수정완료
                </button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CommentAdd;
