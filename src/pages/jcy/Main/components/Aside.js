import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Aside = () => {
  const [aside, setAside] = useState([]);

  useEffect(() => {
    fetch('data/Aside.json')
      .then((result) => result.json())
      .then((data) => setAside(data));
  }, []);
  console.log(aside);

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
        <ul className="Foot">
          {aside.map((item, key) => {
            return <Foot key={key} id={item.id} category={item.category} />;
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;

const Foot = ({ id, category }) => {
  return (
    <li className="foot_li">
      <span>{category}.</span>
    </li>
  );
};
