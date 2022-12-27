import React, { useState } from 'react';
import OhjLogin from '../../Login/OhjLogin';

function CommentList(props) {
  return (
    <div>
      <li className="commentor_nickname comment3">
        <span>
          <span className="strong">{props.userName}</span>
          <span>{props.userComment}</span>
        </span>
        <img src="images/ohj/like_heart.png" alt="댓글 좋아요" />
      </li>
    </div>
  );
}

export default CommentList;
