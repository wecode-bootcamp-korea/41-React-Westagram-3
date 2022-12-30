import React from 'react';

function CommentList({ userName, userComment }) {
  return (
    <li className="commentor_nickname comment3">
      <span>
        <span className="strong">{userName}</span>
        <span>&nbsp;{userComment}</span>
      </span>
      <img src="images/ohj/like_heart.png" alt="댓글 좋아요" />
    </li>
  );
}

export default CommentList;
