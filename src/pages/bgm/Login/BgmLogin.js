import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
// import { Link } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

function BgmLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const btn = id.includes('@') && pw.length >= 5;

  const realId = 'bjy6439@naver.com';
  const realPw = 'qowoduf729';

  // 메인페이지 이동

  return (
    <div className="loginPage">
      <form className="lgnForm">
        <div className="titleImg" />
        <input
          id="idInput"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <input
          id="pwInput"
          type="password"
          placeholder="비밀번호"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
        <button
          className="loginBtn"
          disabled={!btn}
          onClick={(e) => {
            if (id === realId && pw === realPw) {
              navigate('/BgmMain');
            } else {
              alert('아이디와 비밀번호가 일치하지 않습니다.');
              e.preventDefault();
            }
          }}
        >
          로그인
        </button>
        <div>------------ 또는 -----------</div>
        <div className="imgbox" />
      </form>
      <div className="LoginSignupBox">
        <div>
          계정이 없으신가요?
          <a href="http://localhost:3000/BgmSignup">
            <span> 가입하기</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BgmLogin;
