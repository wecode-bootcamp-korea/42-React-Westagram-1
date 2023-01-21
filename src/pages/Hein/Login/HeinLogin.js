import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Hein/Login/HeinLogin.scss';

const Login = a => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  function saveUserId(e) {
    setInputId(e.target.value);
    console.log(e.target.value);
  }
  function saveUserPw(e) {
    setInputPw(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="container">
      <div className="Westagram2">
        <a href="#none">Westagram</a>
      </div>
      <input
        onChange={e => {
          saveUserId(e);
        }}
        className="id"
        type="text"
        value={inputId}
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onChange={e => {
          saveUserPw(e);
        }}
        className="pw"
        type="password"
        value={inputPw}
        placeholder=" 비밀번호"
      />
      {inputId.includes('@') && inputPw.length > 4 ? (
        <button onClick={goToMain} disabled={false}>
          로그인
        </button>
      ) : (
        <button onClick={goToMain} disabled={true}>
          로그인
        </button>
      )}

      <div className="forgot">
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
};
export default Login;
