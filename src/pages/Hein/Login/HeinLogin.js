import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Hein/Login/HeinLogin.scss';

function Login() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <div className="container">
      <div className="Westagram2">
        <a href="#none">Westagram</a>
      </div>
      <input
        className="id"
        type="text"
        placeholder=" 전화번호, 사용자 이름 또는 이메일"
      />
      <input className="pw" type="password" placeholder=" 비밀번호" />
      <button onClick={goToMain}>로그인</button>
      <div className="forgot">
        <Link to="#">비밀번호를 잊으셨나요?</Link>
      </div>
    </div>
  );
}
export default Login;
