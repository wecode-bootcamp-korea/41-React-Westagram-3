import React, { useState } from 'react';
import CommentAdd from './CommentAdd';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);

  const editCommentList = (index, value) => {
    const next = commentList.map((comment, i) => {
      if (index === i) return value;
      return comment;
    });
    setCommentList(next);
  };

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      createComment(e);
    }
  };

  const createComment = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (comment === '') {
      return;
    }

    setCommentList([...commentList, comment]);
    setComment('');
  };
  return (
    <div id="commentForm">
      {commentList.map((comment, index) => (
        <CommentAdd
          key={`${index}${comment}`}
          comment={comment}
          index={index}
          editCommentList={editCommentList}
        />
      ))}
      <div id="commentInputForm">
        <input
          onChange={onChange}
          onKeyDown={onKeyDown}
          id="comment"
          value={comment}
          placeholder="댓글 달기.."
        />
        <button onClick={createComment} id="commentSubmit" type="Submit">
          게시
        </button>
      </div>
    </div>
  );
};

export default Comments;
