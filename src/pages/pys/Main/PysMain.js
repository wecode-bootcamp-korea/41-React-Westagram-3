import React, { useState } from 'react';
import MainSide from './MainSide';
import Nav from '../../../components/Nav/Nav/Nav';
import Comments from './Comments';
import './PysMain.scss';

const PysMain = () => {
  const [heart, setHeart] = useState(true);
  const [like, setLike] = useState('368');

  const handleHeartClick = (e, like) => {
    return setHeart(!heart);
  };
  return (
    <div>
      <Nav />
      <div>
        <main>
          <div id="feeds">
            <article>
              <div id="articleTop">
                <div id="articleTopLeft">
                  <img src="images/pys/profile.jpeg" alt="profileImg" />
                  <div className="id-location">
                    <div className="westagramId">hi._.hailey</div>
                    <div className="westagramLocate">wework2호점</div>
                  </div>
                </div>
                <div id="threeDot">•••</div>
              </div>
              <div id="articleCenter">
                <img src="images/pys/main.jpeg" alt="firstmeal" id="feedImg" />
                <div>
                  <div id="articleCenterIcon-L">
                    {heart ? (
                      <img
                        onClick={handleHeartClick}
                        src="images/pys/like.png"
                        alt="likeBtn"
                      />
                    ) : (
                      <img
                        onClick={handleHeartClick}
                        src="images/liked.png"
                        alt="likeBtn"
                      />
                    )}
                    <img src="images/pys/comment.png" alt="commentBtn" />
                    <img src="images/pys/dm.png" alt="img" />
                  </div>
                  <div id="articleCenterIcon-R">
                    <img src="images/pys/bookmark.png" alt="bookmark" />
                  </div>
                </div>
              </div>
              <div id="articleBottom">
                <div id="like">{like}개</div>
                <div id="content">
                  <div className="westagramId">hi._.hailey</div>
                  <p>첫 날 시이작-!</p>
                </div>
              </div>
              <Comments />
            </article>
          </div>
          <MainSide />
        </main>
      </div>
    </div>
  );
};

export default PysMain;
