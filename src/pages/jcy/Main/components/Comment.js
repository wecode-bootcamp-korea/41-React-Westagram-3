import React from 'react';
import { useEffect, useState } from 'react';

const Comment = ({ comments }) => {
  const [heart, setheart] = useState(false);

  const remove = (e) => {
    e.target.parentElement.remove();
  };

  return (
    <>
      <p className="NewCommentLine">
        {comments}

        <img
          src="/images/Jcy/trash.png"
          style={{ width: '20px', height: '20px' }}
          setcommentArray=""
          onClick={remove}
        />
        <img
          src={heart ? '/images/Jcy/redheart.png' : '/images/Jcy/emtyheart.png'}
          style={{ width: '20px', height: '20px' }}
          onClick={() => {
            setheart((e) => !e);
          }}
        />
      </p>
    </>
  ); //9
};

export default Comment;
