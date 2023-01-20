import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SoominLogin.scss';

export default function SoominLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
  };
  console.log('id', id);
  const saveUserPassword = event => {
    setPassword(event.target.value);
  };
  console.log('password', password);

  return (
    <div className="soominlogin">
      <h1 className="logo">westagram</h1>
      <main className="user-info">
        <input
          className="we-id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          value={id}
        />
        <input
          className="we-password"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPassword}
          value={password}
        />
        <button id="login-button" className="login-button" type="submit">
          로그인
        </button>
      </main>
      <footer>
        <Link className="find-password" to="/">
          비밀번호를 잊으셨나요?
        </Link>
      </footer>
    </div>
  );
}
