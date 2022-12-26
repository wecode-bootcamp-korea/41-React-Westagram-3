import React, { useState } from 'react';
import './Comment.scss';

function Comment(props) {
  const [toggle, setToggle] = useState(false);
  const btnToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  // const deleteBtn = () => {};

  return (
    <ul className="content">
      <img src="images/bgm/userimg.png" alt="asd" className="comentImg" />
      <li className="commentName">97_bhh</li>
      <li className="commentText">{props.i}</li>
      <div className="contentLikeTresh">
        <button
          className={
            'contentLikeTreshHeartBtn' + (toggle === true ? ' red' : '')
          }
          onClick={btnToggle}
        />
        <button>
          <img src="images/bgm/delete.png" />
        </button>
      </div>
      {/* ㄴ부모 컴포넌트에서 받아온 i값을 출력한다. */}
    </ul>
  );
}

export default Comment;
