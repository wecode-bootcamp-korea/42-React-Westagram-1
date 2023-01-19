import React from 'react';
import { useState } from 'react';
import './Container.scss';
import { useNavigate } from 'react-router-dom';

function Container() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/suhyeon-main');
  };

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [btnState, setBtnState] = useState(true);

  const saveUserId = event => {
    const state = event.target.value;
    setInputId(state);
  };

  const saveUserPw = event => {
    const state = event.target.value;
    setInputPw(state);
  };

  const isLoginOk = () => {
    inputId.indexOf('@') >= 0 && inputPw.length >= 5
      ? setBtnState(false)
      : setBtnState(true);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        className="userId account"
        onChange={saveUserId}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="userPw account"
        onChange={saveUserPw}
        onKeyUp={isLoginOk}
      />
      <button id="btn" onClick={goToMain} disabled={btnState}>
        로그인
      </button>
    </div>
  );
}

export default Container;
