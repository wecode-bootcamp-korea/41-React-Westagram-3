import React, { useState, useEffect } from 'react';
import './Article.scss';
import Feed from './Feed';

function Article() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('data/ohjFeedsDatas.json')
      .then((response) => response.json())
      .then((result) => setFeeds(result));
  }, []);
  // ㄴ피드데이터 Mock Data 로 활용

  return (
    <article className="article">
      {feeds.map((feed) => {
        return <Feed feed={feed} />;
      })}
    </article>
  );
}

export default Article;
