import React, { useEffect, useState } from 'react';
import MainArticleBottom from './MainArticle-Bottom';
import './MainArticle.scss';

function MainArticle() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);

  return (
    <div id="article">
      {userList.map((i) => {
        return (
          <div id="articleFeeds" key={i.id}>
            <div id="articleBox">
              <div className="articleHeader">
                <div className="articleHeaderProfile">
                  <img
                    src={`https://robohash.org/${i.id}?set=set2&size=180x180`}
                    alt="#"
                  />
                  <span>
                    <strong>{i.username}</strong>
                  </span>
                </div>
                <div className="articleHeaderMore">
                  <img src="images/bgm/dots.png" alt="#" />
                </div>
              </div>
              <div className="articleImgBox">
                <img
                  src={`https://robohash.org/${i.id}?set=set2&size=180x180`}
                  alt="#"
                />
              </div>
              <MainArticleBottom />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MainArticle;
