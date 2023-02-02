import React from 'react';
import Container from './components/Container';
import './SuhyeonLogin.scss';

const Login = () => (
  <main>
    <div className="box">
      <h1 className="title">westagram</h1>
      <Container />
      <a href="help.html">비밀번호를 잊으셨나요?</a>
    </div>
  </main>
);

export default Login;
