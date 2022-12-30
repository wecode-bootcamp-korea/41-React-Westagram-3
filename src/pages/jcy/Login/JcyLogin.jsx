import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function JcyLogin() {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [item, setitem] = useState('');

  const saveUserId = (e) => {
    setId(e.target.value);
    console.log('id', id);
  };

  const saveUserPw = (e) => {
    setPw(e.target.value);
    console.log('pw', pw);
  };

  const active = id.includes('@') && pw.length >= 5;
  let block;
  let Color;

  active ? (block = false) : (block = true);
  block
    ? (Color = { backgroundColor: '#b2dffc' })
    : (Color = { backgroundColor: '#2aa4f5' });

  const response = () => {
    fetch('http://10.58.52.73:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        password: pw,
        email: id,
      }),
    })
      .then((a) => a.json())
      .then((data) => {
        if (data.accessToken.length >= 5) {
          localStorage.setItem('accessToken', data.accessToken);
          alert('로그인 성공');
        } else if (data.accessToken.length < 4) {
          alert('아이디 혹은 비밀번호를 확인해주세요.');
        }
        console.log(data);
      });
  };

  console.log(localStorage.getItem('accessToken'));

  return (
    <>
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
            onChange={saveUserId}
          />
          <input
            className="passward"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
        </div>
        <button
          className="loginBtn"
          disabled={block}
          style={Color}
          onClick={response}
        >
          로그인
        </button>
        <br />
        <div className="forget">비밀번호를 잊으셨나요?</div>
        <br />
      </div>
    </>
  );
}
export default JcyLogin;
