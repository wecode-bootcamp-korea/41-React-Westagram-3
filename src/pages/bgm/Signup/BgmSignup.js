import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BgmSignup.scss';

const BgmSignup = () => {
  const [MailNum, setMailNum] = useState('');
  const [id, setId] = useState('');
  const [userName, setUserName] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const onClick = (e) => {
    e.preventDefault();

    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        let result;
        data.map((i) => {
          if (
            i.name === MailNum &&
            id.length > 0 &&
            userName.length > 0 &&
            pw.length > 5
          ) {
            result = true;
            if (result === true) {
              return alert('이미 생성된 아이디 입니다.');
            }
          } else if (i.name !== MailNum) {
            alert('회원가입 완료');
            navigate('/');
          }
        });
      });
  };

  const saveMailNum = (e) => setMailNum(e.target.value);
  const saveId = (e) => setId(e.target.value);
  const saveUserName = (e) => setUserName(e.target.value);
  const savePw = (e) => setPw(e.target.value);

  return (
    <form className="signupBox">
      <img src="/images/bgm/mark.png" alt="logo" />
      <h2 className="signupBoxText">
        친구들의 사진과 동영상을 보려면 가입하세요.
      </h2>
      <button className="signupBoxLoginBtn">facebook으로 로그인</button>
      <div className="signupBoxAnd">------------ 또는 -----------</div>
      <div className="signupBoxInputArea">
        <input
          onChange={saveMailNum}
          placeholder="휴대폰 번호 또는 이메일 주소"
        />
        <input onChange={saveUserName} placeholder="성명" />
        <input onChange={saveId} placeholder="사용자 이름" />
        <input onChange={savePw} placeholder="비밀번호" />
      </div>
      <div className="signupBoxMorePage">
        저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에
        업로드했을 수도 있습니다.
        <a href="https://www.facebook.com/help/instagram/261704639352628">
          더 알아보기
        </a>
      </div>
      <button onClick={onClick} className="signupBoxLoginBtn">
        가입
      </button>
    </form>
  );
};

export default BgmSignup;
