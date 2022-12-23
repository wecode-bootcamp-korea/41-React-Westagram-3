import './MainArticle-Header.scss';

function MainArticleHeader() {
  return (
    <div className="article-header">
      <div className="article-header-profile">
        <img src="images/bgm/userimg.png" alt="#" />
        <span>
          <strong>97bhh</strong>
        </span>
      </div>
      <div className="article-header-more">
        <img src="images/bgm/dots.png" alt="#" />
      </div>
    </div>
  );
}

export default MainArticleHeader;
