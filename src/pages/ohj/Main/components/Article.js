import React, { useState, useEffect } from 'react';
import './Article.scss';
import CommentList from './CommentList';

function Article() {
  const [userName] = useState('user1');
  const [comment, setComment] = useState('');
  const [feedComments, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);
  // ㄴ댓글 기능 구현을 위한 useState(구글링)

  const [feeds, setFeeds] = useState([]);
  const [postLike, setPostLike] = useState('images/ohj/like_heart.png');

  useEffect(() => {
    fetch('data/ohjFeedsDatas.json')
      .then((response) => response.json())
      .then((result) => setFeeds(result));
  }, []);
  // ㄴ피드데이터 Mock Data 로 활용

  const saveComment = (e) => {
    setComment(e.target.value);
    activePublishBtn();
  };
  // 댓글 인풋창의 값이 계속 setComment -> comment 로 들어온다

  const activePublishBtn = (e) => {
    comment.length > 0 ? setIsValid(true) : setIsValid(false);
  };
  // 댓글 인풋창의 값 길이가 0이상이면 true or false

  const post = (e) => {
    // const copyFeedComments = [...feedComments];
    // copyFeedComments.push(comment);
    // setFeedComments(copyFeedComments);
    setFeedComments([...feedComments, comment]);
    setComment('');
  };

  const postEnter = (e) => {
    if (e.keyCode === 13) {
      return post();
    }
  };

  const colorHeart = (e) => {
    postLike === 'images/ohj/like_heart.png'
      ? setPostLike('images/ohj/post_like_heart.png')
      : setPostLike('images/ohj/like_heart.png');
  };

  return (
    <article className="article">
      {feeds.map((feed) => {
        return (
          <div className="feeds" key={feed.id}>
            <div id="post_host">
              <a className="post_host_pic" href="#">
                <img src={feed.user_img} alt="포스트주인" />
              </a>
              <a className="post_host_nickname" href="#">
                <span>{feed.user_name}</span>
              </a>
              <div className="dots">
                <span className="dot_black" />
                <span className="dot_black" />
                <span className="dot_black" />
              </div>
            </div>

            <div id="post_pic">
              <img src={feed.user_feed_pic} alt="포스팅사진" />
            </div>

            <div id="post_txt">
              <div className="post_txt_icons">
                <div className="post_txt_icon_left">
                  <span className="post_txt_icon1">
                    <img
                      src={postLike}
                      alt="포스트좋아요"
                      onClick={colorHeart}
                    />
                  </span>
                  <span className="post_txt_icon2">
                    <img src="images/ohj/comment.png" alt="포스트좋아요" />
                  </span>
                  <span className="post_txt_icon3">
                    <img src="images/ohj/upload.png" alt="포스트좋아요" />
                  </span>
                </div>
                <div className="post_txt_icon_right">
                  <span className="post_txt_icon4">
                    <img src="images/ohj/bookmark.png" alt="포스트좋아요" />
                  </span>
                </div>
              </div>
              <div className="post_txt_comment">
                <a href="#">
                  <img src={feed.liked_user_pic} alt="좋아요 누른 사람" />
                </a>
                <span className="like">
                  <span className="strong">{feed.liked_user_name}</span>님 외
                  <span className="strong"> {feed.liked_num}</span>이 좋아합니다
                </span>
                <ul className="comment">
                  <li className="post_host_nickname">
                    <span className="strong">{feed.user_name}</span>
                    <span>&nbsp;{feed.post_content}</span>
                  </li>
                  <span className="more">더 보기</span>
                  <li className="commentor_nickname comment1">
                    <span>
                      <span className="strong">honghong</span>
                      <span>&nbsp;언제 돌아와 ??</span>
                    </span>
                    <img src="images/ohj/like_heart.png" alt="댓글 좋아요" />
                  </li>
                  <li className="commentor_nickname comment2">
                    <span>
                      <span className="strong">baeterang</span>
                      <span>&nbsp;건강히! 조심히! 즐겁게 🙏🏻</span>
                    </span>
                    <img src="images/ohj/like_heart.png" alt="댓글 좋아요" />
                  </li>
                  {feedComments.map((feedComment) => {
                    return (
                      <CommentList
                        userName={userName}
                        userComment={feedComment}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className="comment_window">
                <input
                  className="comment_write"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={saveComment}
                  onKeyDown={activePublishBtn}
                  onKeyUp={postEnter}
                />
                <button
                  type="button"
                  className={
                    comment.length > 0 ? 'activePublish' : 'noActivePublish'
                  }
                  onClick={post}
                  disabled={isValid ? false : true}
                >
                  게시
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </article>
  );
}

export default Article;
