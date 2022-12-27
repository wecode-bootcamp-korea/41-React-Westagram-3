import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainSide from './MainSide';
import FeedList from './FeedList';
import './PysMain.scss';
import './../../../components/Nav/Nav/Nav.scss';

const PysMain = () => {
  const [userList, setUserList] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((result) => result.json())
      .then((data) => setUserList(data));
  }, []);

  const searchUser = (e) => {
    setSearchKeyword(e.target.value);
  };

  const filteredUser = userList.filter((user) =>
    user.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <nav>
        <div id="navLeft">
          <i className="fa-brands fa-instagram fa-xl" /> <div>|</div>
          <button id="logo" onClick={goToHome}>
            Instagram
          </button>
        </div>
        <div id="navCenter">
          <input
            value={searchKeyword}
            onChange={searchUser}
            type="input"
            placeholder="검색"
          />
        </div>
        <div id="navRight">
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="profile"
          />
        </div>
      </nav>
      <div>
        <main>
          <FeedList userList={filteredUser} />
          <MainSide />
        </main>
      </div>
    </div>
  );
};

export default PysMain;
