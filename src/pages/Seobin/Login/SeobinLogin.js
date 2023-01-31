import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeobinLogin.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
  };
  const InputValue = id.includes('@') && pw.length >= 5;
  return (
    <div className="login">
      <h1>instargram</h1>
      <input
        className="loginId inputId"
        value={id}
        onChange={saveUserId}
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        className="loginPw inputPw"
        value={pw}
        onChange={saveUserPw}
        type="password"
        placeholder="비밀번호"
      />
      <button
        onClick={() => navigate('/seobin-main')}
        type="submit"
        className={InputValue ? 'loginBtn' : 'loginDisabled'}
        disabled={InputValue ? false : true}
      >
        로그인
      </button>
      <span>비밀번호를 잊으셨나요?</span>
    </div>
  );
};

export default Login;
