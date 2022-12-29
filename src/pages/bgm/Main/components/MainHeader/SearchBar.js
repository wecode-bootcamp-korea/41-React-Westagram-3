import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ values }) => {
  const onOff = values.length <= 0 ? '' : ' on';
  return (
    <div>
      <ul className={'searchList' + onOff}>
        <button>
          <li style={{ color: 'black' }} className="searchListChild">
            <img src="images/bgm/user.png" alt="프로필사진" />
            <p>d.j_han</p>
          </li>
        </button>
        <button>
          <li className="searchListChild">
            <img src="images/bgm/user.png" alt="프로필사진" />
            <p>e_u_n_h_o_o</p>
          </li>
        </button>
        <button>
          <li className="searchListChild">
            <img src="images/bgm/user.png" alt="프로필사진" />
            <p>97bhh</p>
          </li>
        </button>
      </ul>
    </div>
  );
};

export default SearchBar;
