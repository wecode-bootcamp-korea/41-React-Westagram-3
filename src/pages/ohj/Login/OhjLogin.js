import React, { useEffect, useState } from 'react';
import './OhjLogin.scss';
import '../../../styles/reset.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function OhjLogin(props) {
  const navigate = useNavigate();

  const [idState, setIdState] = useState('');
  const [pwState, setPwState] = useState('');
  const [active, setActive] = useState(false);

  const goToMain = () => {
    if (activeLogin) {
      navigate('/OhjMain');
    }
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      idState.includes('@') && pwState.length >= 5
        ? goToMain()
        : alert('아이디와 비밀번호를 제대로 입력해주세요.');
    }
  };

  const activeLogin = () => {
    return idState.includes('@') && pwState.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  function saveUserId(e) {
    setIdState(e.target.value);
    activeLogin();
  }

  function saveUserPw(e) {
    setPwState(e.target.value);
    activeLogin();
  }

  // 로그인 & 회원가입 통신
  const handleClick = () => {
    fetch('http://10.58.52.154:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: idState,
        password: pwState,
      }),
    })
      .then((response) => response.json())
      // .then((data) => localStorage.setItem('wtw-token', data.token));
      // ㄴ 토큰 로컬스토리지에 저장하는 코드
      .then((data) => console.log(data));
    goToMain();
  };

  return (
    <div>
      <section id="login_page">
        <div id="login_logo">
          <Link to="/OhjMain">
            <span>Westagram</span>
          </Link>
        </div>
        <div id="id_pw_window">
          <input
            name="identy"
            className="id"
            type="text"
            value={idState}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            onKeyUp={enter}
          />
          <input
            name="password"
            className="pw"
            type="password"
            value={pwState}
            placeholder="비밀번호"
            onChange={saveUserPw}
            onKeyUp={enter}
          />
          <button
            type="button"
            className="login_btn"
            onClick={handleClick}
            disabled={active ? false : true} // active 값이 true 면 false 로, false 면 true 로 !
          >
            로그인
          </button>
        </div>
        <a className="forget_pw" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </section>
    </div>
  );
}

export default OhjLogin;
