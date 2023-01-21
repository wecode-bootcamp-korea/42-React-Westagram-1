import React from 'react';
import { useState } from 'react';
import './Container.scss';
import { useNavigate } from 'react-router-dom';

function Container() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [btnState, setBtnState] = useState(true);
  const [btnColor, setBtnColor] = useState('btn_disabled');

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/suhyeon-main');
  };

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
    inputId.indexOf('@') >= 0 && inputPw.length >= 5
      ? setBtnColor('btn_abled')
      : setBtnColor('btn_disabled');
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      inputId.indexOf('@') >= 0 && inputPw.length >= 5
        ? goToMain()
        : window.alert('이메일과 비밀번호 5자 이상 입력해주세요');
    }
  };

  return (
    <form className="container" onKeyDown={handleOnKeyPress}>
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        className="userId account"
        onChange={saveUserId}
        onKeyUp={isLoginOk}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="userPw account"
        onChange={saveUserPw}
        onKeyUp={isLoginOk}
      />
      <button
        className={btnColor}
        onClick={goToMain}
        disabled={btnState}
        onKeyPress={handleOnKeyPress}
      >
        로그인
      </button>
    </form>
  );
}

export default Container;
