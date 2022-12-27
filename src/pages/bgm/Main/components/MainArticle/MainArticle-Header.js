import './MainArticle-Header.scss';

function MainArticleHeader() {
  return (
    <div className="articleHeader">
      <div className="articleHeaderProfile">
        <img src="images/bgm/userimg.png" alt="#" />
        <span>
          <strong>97bhh</strong>
        </span>
      </div>
      <div className="articleHeaderMore">
        <img src="images/bgm/dots.png" alt="#" />
      </div>
    </div>
  );
}

export default MainArticleHeader;
