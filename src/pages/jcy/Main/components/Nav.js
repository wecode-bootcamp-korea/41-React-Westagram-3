import { BrowserRouter, Routes } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <>
      <nav className="navigation">
        <div className="frontBar">
          <img className="insta" src="/images/Jcy/instagram.png" />
          <div className="border_1"></div>
          <span className="LogoHead">instagram</span>
        </div>
        <div className="centerBar">
          <input className="search" type="text" placeholder="검색" />
        </div>
        <div className="buttonBar">
          <img className="explore" src="/images/Jcy/explore.png" />
          <img className="heart" src="/images/Jcy/emtyheart.png" />
          <img className="user_profile" src="/images/Jcy/profile.png" />
        </div>
      </nav>
    </>
  );
};
export default Nav;
