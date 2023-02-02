import React from 'react';
import './Nav.scss';

export default function Nav() {
  return (
    <div className="nav">
      <nav className="navbar">
        <h1 className="logo-box">
          <img
            src="/images/Soomin/westagram-icon.png"
            alt="logo"
            className="logo"
          />
          westagram
        </h1>
        <div className="searchbar">
          <input className="search" type="text" placeholder="검색" />
          <i className="fa-solid fa-magnifying-glass" />
        </div>
        <div className="notice">
          <button type="button" aria-label="search-feed">
            <img
              className="exploration"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="search"
            />
          </button>
          <button type="button" aria-label="#">
            <img
              className="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
          </button>
          <button type="button" aria-label="#">
            <img
              className="mypage"
              src=" https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="mypage"
            />
          </button>
        </div>
      </nav>
    </div>
  );
}
