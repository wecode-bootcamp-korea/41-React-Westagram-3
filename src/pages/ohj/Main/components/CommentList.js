import React, { useState } from 'react';
import OhjLogin from '../../Login/OhjLogin';

function CommentList({ userName, userComment }) {
  return (
    <li className="commentor_nickname comment3">
      <span>
        <span className="strong">{userName}</span>
        <span>{userComment}</span>
      </span>
      <img src="images/ohj/like_heart.png" alt="댓글 좋아요" />
    </li>
  );
}

export default CommentList;
