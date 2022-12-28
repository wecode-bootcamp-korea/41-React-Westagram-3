import React from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Nav;
