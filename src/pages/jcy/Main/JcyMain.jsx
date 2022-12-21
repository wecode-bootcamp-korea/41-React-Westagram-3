import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';

function JcyMain() {
  return (
    <>
      <nav className="navigation">
        <div className="frontBar">
          <img className="insta" src="../../../assets/jcy/instagram.png" />
          <div className="border_1"></div>
          <span className="LogoHead">instagram</span>
        </div>
        <div className="centerBar">
          <input className="search" type="text" placeholder="검색" />
        </div>
        <div className="buttonBar">
          <img className="explore" src="../../../assets/jcy/explore.png" />
          <img className="heart" src="../../../assets/jcy/heart.png" />
          <img className="user_profile" src="../../../assets/jcy/profile.png" />
        </div>
      </nav>
      <div className="main">
        <section className="feeds">
          <article className="article">
            <div className="user_info">
              <div className="top_left">
                <img
                  className="user_img"
                  src="../../../assets/jcy/profile_1.jpg"
                />
                <span className="user_name">
                  JangChan__0 <br />
                  <span className="user_place">snow town</span>
                </span>
              </div>

              <img className="more_Info" src="../../../assets/jcy/more.png" />
            </div>
            <div className="content">
              <img
                className="content_IMG"
                src="../../../assets/jcy/content_IMG.jpg"
              />
            </div>
            <div className="rection">
              <div className="top">
                <div className="left">
                  <div className="rection_Btn">
                    <img src="../../../assets/jcy/heart (1).png" />
                    <img src="../../../assets/jcy/speech-bubble.png" />
                    <img src="../../../assets/jcy/share.png" />
                  </div>
                </div>
                <div className="right">
                  <img src="../../../assets/jcy/bookmark.png" />
                </div>
              </div>

              <div className="middle">
                <div className="rection_middle">
                  <img src="../../../assets/jcy/profile_2.jpg" />
                  <b>Wecode</b>님&nbsp;
                  <b>외 10명</b>이 좋아합니다
                </div>
                <div className="m_b">
                  <div className="ps_id">
                    <b>JangChan__0</b>
                  </div>
                  <div className="ps_ct">펑펑&nbsp;눈</div>
                </div>
                <div className="friendComment">
                  <div className="friend_id">
                    <b>Chanwoo</b>
                  </div>
                  <div className="friend_ct">와 예쁘다~~~~</div>
                </div>
                <div className="time">
                  <b>5분&nbsp;전</b>
                </div>
              </div>
              <div className="newComment"></div>
              <input
                className="comment_maker"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="commentBtn">게시</button>
            </div>
          </article>
        </section>
        <aside className="main-right">
          <div className="AD">
            <img className="AD_IMG" src="../../../assets/jcy/profile_3.jpg" />

            <div className="AD_Info">
              <div className="AD_Info_name">
                <b>Wecode_bootcamp</b>
              </div>
              <div className="AD_Info_in">WECODE&nbsp;&nbsp;&nbsp;위코드</div>
            </div>
          </div>
          <div className="story">
            <div className="story_top">
              <div className="story_name">스토리</div>
              <div className="story_more">
                <b>모두 보기</b>
              </div>
            </div>
            <div className="story_user"></div>
          </div>
          <div className="advice"></div>
          <div className="insta_Info">
            Westagram &nbsp;정보,&nbsp; 지원,&nbsp;
            홍보&nbsp;센터,&nbsp;API&nbsp;채용&nbsp;정보,&nbsp;개인정보처리방침,&nbsp;약관,&nbsp;디렉터리,&nbsp;프로필,&nbsp;해시태그,&nbsp;언어
          </div>
        </aside>
      </div>
    </>
  );
}
export default JcyMain;
