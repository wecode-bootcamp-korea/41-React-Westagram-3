import React, { useState } from 'react';
import './Comment.scss';

function Comment({ i, index, onDelete }) {
  const [toggle, setToggle] = useState(false);

  const btnToggle = () => {
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <ul className="content" value={i}>
      <img src="images/bgm/userimg.png" alt="asd" className="comentImg" />
      <li className="commentName">97_bhh</li>
      <li className="commentText">{i}</li>
      <div className="contentLikeTresh">
        <button
          className={
            'contentLikeTreshHeartBtn' + (toggle === true ? ' red' : '')
          }
          onClick={btnToggle}
        />
        <button
          className="contentLikeTreshDelBtn"
          onClick={() => onDelete(index)}
        >
          <img src="images/bgm/delete.png" alt="none" />
        </button>
      </div>
      {/* ㄴ부모 컴포넌트에서 받아온 i값을 출력한다. */}
    </ul>
  );
}

export default Comment;
