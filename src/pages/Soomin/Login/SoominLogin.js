import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SoominLogin.scss';

export default function SoominLogin() {
  const [inputValues, setInputValues] = useState({ email: '', password: '' });

  const goToMain = () => {
    fetch('http://10.58.52.134:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputValues.email,
        password: inputValues.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.access.Token);
      });
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const inputValue =
    inputValues.email.includes('@') && inputValues.password.length >= 4;

  return (
    <div className="soominlogin">
      <h1 className="logo">westagram</h1>
      <main className="user-info">
        <input
          name="email"
          className="info-box"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleInput}
        />
        <input
          name="password"
          className="info-box"
          type="password"
          placeholder="비밀번호"
          onChange={handleInput}
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
        <div className="footer-box">
          <Link className="find-password" to="/">
            비밀번호를 잊으셨나요?
          </Link>
          <span className="sign-up-box">
            계정이 없으신가요?
            <button className="sign-up" type="button">
              회원가입
            </button>
          </span>
        </div>
      </footer>
    </div>
  );
}
