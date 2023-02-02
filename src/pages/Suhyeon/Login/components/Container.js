import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Container.scss';

function Container() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

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
  const signUpKeyPress = e => {
    e.preventDefault();
    fetch('http://10.58.52.224:8000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: inputId,
        password: inputPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  };

  const login = e => {
    e.preventDefault();
    fetch('http://10.58.52.224:8000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ email: inputId, password: inputPw }),
    })
      .then(response => response.json())
      .then(data => {
        // if ('token') {
        //   localStorage.setItem('token', data.token);
        //   alert('로그인 성공');
        //   goToMain();
        // } else {
        //   alert('아이디/비번 확인해주세요');
        // }
        localStorage.setItem('token', data.token);
        goToMain();
      });
  };

  return (
    <form className="container">
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
      />
      <button className="btn_abled" onClick={signUpKeyPress}>
        회원가입
      </button>
      <button className="btn_abled" onClick={login}>
        로그인
      </button>
    </form>
  );
}

export default Container;
