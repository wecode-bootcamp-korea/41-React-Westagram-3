import React from 'react';
import './MainRight.scss';
import { FOOTER_LIST } from './FOOTER_LIST';

function MainRight() {
  return (
    <aside className="main_right">
      <div id="my_account">
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
      <div id="footer">
        {FOOTER_LIST.map((item) => {
          return <a key={item.id}>{item.info}</a>;
        })}
      </div>
    </aside>
  );
}

export default MainRight;
