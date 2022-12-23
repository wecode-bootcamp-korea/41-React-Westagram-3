import React from 'react';
import './Comment.scss';

function Comment(s) {
  // ㄴComment라는 컴포넌트 생성
  return (
    <ul className="content">
      <img src="images/bgm/userimg.png" alt="asd" className="comentImg" />
      <li className="commentName">97_bhh</li>
      <li className="commentText">{s.i}</li>
      {/* ㄴ부모 컴포넌트에서 받아온 i값을 출력한다. */}
    </ul>
  );
}

export default Comment;
