import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SoominLogin.scss';

export default function SoominLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const goToMain = () => {
    navigate('/soomin-main');
  };
  const saveUserId = event => {
    setId(event.target.value);
  };
  const saveUserPassword = event => {
    setPassword(event.target.value);
  };
  const inputValue = id.includes('@') && password.length >= 5;
  return (
    <div className="soominlogin">
      <h1 className="logo">westagram</h1>
      <main className="user-info">
        <input
          className="info-box"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
        />
        <input
          className="info-box"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPassword}
        />
        <button
          id="login-button"
          className="login-button"
          type="submit"
          disabled={inputValue ? false : true}
          onClick={goToMain}
        >
          로그인
        </button>
      </main>
      <footer className="login-footer">
        <Link className="find-password" to="/">
          비밀번호를 잊으셨나요?
        </Link>
      </footer>
    </div>
  );
}
