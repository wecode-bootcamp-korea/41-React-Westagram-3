import React, { useState } from 'react';
import './MainHeader.scss';
import SearchBar from './SearchBar';

function MainHeader() {
  const [values, setValues] = useState('');

  const change = (e) => {
    setValues(e.target.value);
  };
  return (
    <header className="MainHeader">
      <ul className="leftHead">
        <li>
          <img
            className="leftHeadLogoImg"
            src="images/bgm/instagram.png"
            alt="#"
          />
        </li>
        <li>
          <img className="leftHeadMarkImg" src="images/bgm/mark.png" alt="#" />
        </li>
      </ul>
      <div id="headSearch">
        <input
          className="headSearchBar"
          type="text"
          value={values}
          onChange={change}
          placeholder="검색"
        />
        <SearchBar values={values} />
      </div>
      <ul id="rightHead">
        <li>
          <img src="images/bgm/compass.png" alt="#" />
        </li>
        <li>
          <img src="images/bgm/heart.png" alt="#" />
        </li>
        <li>
          <img src="images/bgm/user.png" alt="#" />
        </li>
      </ul>
    </header>
  );
}

export default MainHeader;
