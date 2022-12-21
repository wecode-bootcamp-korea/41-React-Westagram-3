import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function JcyLogin() {
  const navigate = useNavigate();

  return (
    <div className="all">
      <div className="Logo">
        instagram
        <div className="bgImg"></div>
      </div>
      <div id="login">
        <input
          id="id_login"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="passward" type="password" placeholder="비밀번호" />
      </div>
      <button
        className="loginBtn"
        onClick={() => {
          navigate('./Main');
        }}
      >
        로그인
      </button>{' '}
      <br />
      <div className="forget">비밀번호를 잊으셨나요?</div>
      <br />
    </div>
  );
}
export default JcyLogin;
