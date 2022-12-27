import React from 'react';
import MainArticleHeader from './MainArticle-Header';
import MainArticleImgBox from './MainArticle-ImgBox';
import MainArticleBottom from './MainArticle-Bottom';
import './MainArticle.scss';

function MainArticle() {
  return (
    <div id="article">
      <div id="articleFeeds">
        <div id="articleBox">
          <MainArticleHeader />
          <MainArticleImgBox />
          <MainArticleBottom />
        </div>
      </div>
    </div>
  );
}

export default MainArticle;
