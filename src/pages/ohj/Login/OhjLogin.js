import React from 'react';
import './Login.scss';
import '../../../styles/reset.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Router from '../../../Router';

function OhjLogin(props) {
  const navigate = useNavigate();

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
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={props.onSaveId}
          />
          <input
            name="password"
            className="pw"
            type="password"
            placeholder="비밀번호"
            onChange={props.onSavePw}
          />
          <button
            className="login_btn"
            onClick={() => {
              navigate('/OhjMain');
            }}
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
