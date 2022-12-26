import React, { useState } from 'react';
import './PysMain.scss';

const MainSide = () => {
  const [follow, setFollow] = useState(true);

  const handleFollow = () => {
    return setFollow(!follow);
  };
  return (
    <div className="side-main-right">
      <div id="main-right-top" className="profile">
        <img
          className="profile-img"
          src="/images/pys/1.jpeg"
          alt="profileIMG"
        />
        <div className="id-location">
          <div className="westagramId">hellohaileyworld</div>
          <div className="westagramLocate">Frontend 개발자</div>
        </div>
      </div>

      <div id="story" className="sideForm">
        <div className="side-title">
          <p>회원님을 위한 추천</p>
          <p className="black">모두 보기</p>
        </div>
        <div className="story-list side-main-right">
          <div className="story-list-item profile">
            <img
              className="profile-img"
              src="/images/pys/IUprofile.jpeg"
              alt="userIMG"
            />
            <div className="id-location">
              <div className="westagramId">dlwldms</div>
              <div className="westagramLocate">가수</div>
            </div>
          </div>
          {follow ? (
            <button className="follow-button" onClick={handleFollow}>
              팔로우
            </button>
          ) : (
            <button className="follow-button" onClick={handleFollow}>
              팔로잉
            </button>
          )}
        </div>
      </div>

      <footer>
        <div id="footer-info">
          소개・도움말・홍보 센터・API・채용 정보・개인정보처리방침・
          <br />
          약관・위치・언어
        </div>
        <div id="footer-info-bottom">© 2022 INSTAGRAM FROM META</div>
      </footer>
    </div>
  );
};

export default MainSide;
