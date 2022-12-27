import React, { useState } from 'react';
import './Login.scss';
import '../../../styles/reset.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Router from '../../../Router';

function OhjLogin(props) {
  const navigate = useNavigate();

  const [idState, setIdState] = useState('');
  // idState 는 id 인풋 value 값을 가리킨다. 그러려면 아이디인풋태그에 value 값을 idState 로 지정해줘야함
  // (초기값은 '' <- 빈값이다)setIdState 는 idState 값을 실시간 변경해주는 것임
  // serIdState 가 받는 값은 족족 idState로 들어간다
  const [pwState, setPwState] = useState('');
  // pwState 도 이하동문
  const [active, setActive] = useState(false);
  // active의 초기값은 false
  // 이 useState 는 로그인버튼의 disabled 에 쓰일 것이당다라당당당

  // 로긴버튼을 누르면 메인페이지로 넘어가는 함수
  // activeLogin 이 true 면 navigate / false 면 alert 로
  const goToMain = () => {
    if (activeLogin) {
      navigate('/OhjMain');
    } else {
      alert('아이디와 비밀번호를 제대로 입력해주세요.');
    }
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      return goToMain();
    }
  };
  // idState 에는 setIdState 가 계속 들어오고 있다. (saveUserId 함수에서, e.target.value 를 계속 받는 중)
  // 계속 변경되는 setIdState (곧 idState) 에 @가 포함되어있거나 패스워드글자가 5개이상이면, setActive 가 true가 된다. (active의 값이 true가 된다. 기본값은 false)
  // setActive 의 값(true or false)은 active로 속속 전달되는데, 그것은 버튼의 disabled 속성에 갖다넣어주기로 한다. 밑으로 ㄱㄱ
  const activeLogin = () => {
    return idState.includes('@') && pwState.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  // 여기서 e는 onChange 다. onChange 는 해당 타겟 태그에서 일어나는 모든 일들을 감지하는 기능이 있다 = 변경될때마다 발생하는 이벤트
  // 변경되는 인풋벨류값을 실시간 받아줌. 그러고 위 activeLogin 함수를 실행하여 true인지 false인지 구분해줌
  function saveUserId(e) {
    setIdState(e.target.value);
    activeLogin();
  }

  // 변경되는 인풋벨류값을 실시간 받아줌. 그러고 위 activeLogin 함수를 실행하여 true인지 false인지 구분해줌
  // 인풋창에서 일어나는 이벤트에 의해 로그인버튼의 활성화가 결정되는 것이기 때문에!!!!!! 인풋에 넣어놓은 이 함수에, activeLogin 까지 넣어줘야 하는 것이다
  function saveUserPw(e) {
    setPwState(e.target.value);
    activeLogin();
  }

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
            onClick={goToMain}
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
