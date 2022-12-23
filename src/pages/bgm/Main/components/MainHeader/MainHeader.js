import React, { useState } from 'react';
import './MainHeader.scss';
import SearchBar from './SearchBar';

function MainHeader() {
  const [values, setValues] = useState('');
  const [user, setUser] = useState([]);

  const change = (e) => {
    setValues(e.target.value);
  };
  return (
    <header className="MainHeader">
      <ul className="lefthead">
        <li>
          <img
            className="lefthead-logoImg"
            src="images/bgm/instagram.png"
            alt="#"
          />
        </li>
        <li>
          <img className="lefthead-markImg" src="images/bgm/mark.png" alt="#" />
        </li>
      </ul>
      <div id="headsearch">
        <input
          className="headsearchBar"
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
