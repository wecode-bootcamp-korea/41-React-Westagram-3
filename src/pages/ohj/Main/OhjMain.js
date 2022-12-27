import React, { useState } from 'react';
import './Main.scss';
import '../../../styles/reset.scss';
import { useNavigate } from 'react-router-dom';
import CommentList from './components/CommentList';
import { RIGHT_FOOTER_LIST } from './components/RightFooter';

function OhjMain() {
  const navigate = useNavigate();

  const [userName] = useState('hacker');
  const [comment, setComment] = useState('');
  const [feedComments, setFeedComments] = useState([]);
  const [isValid, setIsValid] = useState(false);

  const saveComment = (e) => {
    setComment(e.target.value);
    console.log(comment);
    activePublishBtn();
  };
  // 댓글 인풋창의 값이 계속 setComment -> comment 로 들어온다

  const activePublishBtn = (e) => {
    comment.length > 0 ? setIsValid(true) : setIsValid(false);
  };
  // 댓글 인풋창의 값 길이가 0이상이면 true or false

  const post = (e) => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  {
    feedComments.map((commentArr, i) => {
      return (
        <CommentList userName={userName} userComment={commentArr} key={i} />
      );
    });
  } // 죽여버려 ㅎㅎ

  return (
    <div id="wrap">
      <header>
        <nav>
          <div id="logo">
            <div className="icon_logo">
              <a href="#">
                <img
                  src="images/ohj/westagram_icon_logo.png"
                  alt="인스타그램 그림로고"
                />
              </a>
            </div>
            <span />
            <div className="letter_logo">
              <a href="#">
                <img
                  src="images/ohj/westagram_letter_logo.png"
                  alt="인스타그램 글자로고"
                />
              </a>
            </div>
          </div>
          <div id="nav_search">
            <input type="text" placeholder="검색" />
            <img src="images/ohj/search_icon.png" alt="검색돋보기" />
          </div>
          <div id="nav_icons">
            <span className="icon1">
              <img src="images/ohj/compass.png" alt="탐색" />
            </span>
            <span className="icon2">
              <img src="images/ohj/like_heart.png" alt="좋아요" />
              <span className="red_dot" />
            </span>
            <span className="icon3">
              <img src="images/ohj/dm.png" alt="다이렉트메세지" />
            </span>
            <button
              className="btn_toLogin"
              onClick={() => {
                navigate('/OhjLogin');
              }}
            >
              로그인하기
            </button>
          </div>
        </nav>
      </header>
      <main>
        <div className="feeds">
          <article>
            <div id="post_host">
              <a className="post_host_pic" href="#">
                <img src="images/ohj/post_host_pic.jpeg" alt="포스트주인" />
              </a>
              <a className="post_host_nickname" href="#">
                <span>ohaangdoo</span>
              </a>
              <div className="dots">
                <span className="dot_black" />
                <span className="dot_black" />
                <span className="dot_black" />
              </div>
            </div>

            <div id="post_pic">
              <img src="images/ohj/post_pic.jpeg" alt="포스팅사진" />
            </div>

            <div id="post_txt">
              <div className="post_txt_icons">
                <div className="post_txt_icon_left">
                  <span className="post_txt_icon1">
                    <img
                      src="images/ohj/post_like_heart.png"
                      alt="포스트좋아요"
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
                  <img src="images/ohj/like_pic.jpeg" alt="좋아요 누른 사람" />
                </a>
                <span className="like">
                  <span className="strong">seorina</span>님 외
                  <span className="strong"> 62명</span>이 좋아합니다
                </span>
                <ul className="comment">
                  <li className="post_host_nickname">
                    <span className="strong">ohaangdoo</span>
                    <span>
                      &nbsp;4년만에 다시 온 파리! 에펠탑 앞에서 한 컷!
                    </span>
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
                  <CommentList />
                </ul>
              </div>
              <div className="comment_window">
                <input
                  className="comment_write"
                  type="text"
                  placeholder="댓글 달기..."
                  value={comment}
                  onChange={saveComment}
                  onKeyUp={activePublishBtn}
                />
                <button
                  type="button"
                  className={
                    comment.length > 0 ? 'activePublish' : 'noActivePublish'
                  }
                  disabled={isValid ? false : true}
                >
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>

        <div className="main_right">
          <div id="right_my_account_pic">
            <a href="#">
              <img src="images/ohj/post_host_pic.jpeg" alt="내 사진" />
            </a>
            <div className="right_my_account_txt">
              <p>ohaangdoo</p>
              <p>프론트엔드 개발자 ✨</p>
            </div>
          </div>
          <div id="story_board">
            <p className="story_top">
              <span>스토리</span>
              <span>모두 보기</span>
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="images/ohj/honghong.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>honghong</p>
                  <p>3분 전</p>
                </div>
              </li>
              <li>
                <a href="#">
                  <img src="images/ohj/ky_resto.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>ky_resto</p>
                  <p>17분 전</p>
                </div>
              </li>
              <li>
                <a href="#">
                  <img src="images/ohj/mujagi.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>mujagi_official</p>
                  <p>1시간 전</p>
                </div>
              </li>
              <li>
                <a href="#">
                  <img src="images/ohj/ozzi_chego.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>ozzi_chego</p>
                  <p>3시간 전</p>
                </div>
              </li>
            </ul>
          </div>
          <div id="recommand_board">
            <p className="recommand_top">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </p>
            <ul>
              <li>
                <a href="#">
                  <img src="images/ohj/ohmarigod.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>ohmarigod</p>
                  <p>seo_k님 외 3명이 알고있어요</p>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/ohj/rollipop933.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>rollipop933</p>
                  <p>mujagi_official님 외 24명이 알고있어요</p>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <a href="#">
                  <img src="images/ohj/donggurami.jpeg" alt="팔로잉 스토리" />
                </a>
                <div>
                  <p>donggurami</p>
                  <p>baeterang님 외 7명이 알고있어요</p>
                </div>
                <span>팔로우</span>
              </li>
            </ul>
          </div>
          <div id="right_footer">
            {RIGHT_FOOTER_LIST.map((footerList) => {
              return <span key={footerList.id}>{footerList.info}</span>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OhjMain;
