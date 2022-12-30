import React, { useState } from 'react';

function LikeHeart() {
  const [postLike, setPostLike] = useState('images/ohj/like_heart.png');

  const colorHeart = (e) => {
    postLike === 'images/ohj/like_heart.png'
      ? setPostLike('images/ohj/post_like_heart.png')
      : setPostLike('images/ohj/like_heart.png');
  };
  return (
    <span className="post_txt_icon1">
      <img src={postLike} alt="포스트좋아요" onClick={colorHeart} />
    </span>
  );
}

export default LikeHeart;
