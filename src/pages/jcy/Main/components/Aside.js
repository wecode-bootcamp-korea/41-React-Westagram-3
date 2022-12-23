import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Aside = () => {
  return (
    <aside className="main_right">
      <div className="AD">
        <img className="AD_IMG" src="/images/Jcy/profile_3.jpg" />

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
  );
};

export default Aside;
