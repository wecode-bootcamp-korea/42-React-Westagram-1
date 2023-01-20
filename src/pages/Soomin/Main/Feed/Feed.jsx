import React from 'react';
import { Link } from 'react-router-dom';
import './Feed.scss';

export default function Feed() {
  return (
    <div className="feed">
      <article>
        <h1 className="logo-box">my timeline</h1>
        <ol className="from-wrapper">
          <li className="profile-wrapper">
            <h1 className="logo-box">instagram form</h1>
            <header>
              <Link className="user-proflie" to="/">
                <img
                  className="profile"
                  src="./images/Soomin/profile.jpg"
                  alt="profile"
                />
                ggangage
              </Link>
            </header>
            <Link to="">
              <i className="fa-solid fa-ellipsis" />
            </Link>
          </li>
        </ol>
        <img
          className="feed-photo1"
          src="/images/Soomin/feed-photo.jpeg"
          alt="feed"
        />
        <div className="feed-icon">
          <button type="button" aria-label="number of heart">
            <img
              className="heart-icon"
              src="https://cdn-icons-png.flaticon.com/512/1538/1538598.png"
              alt="heart-button"
            />
          </button>
          <button type="button" aria-label="comment">
            <img
              className="comment-icon"
              src="https://cdn-icons-png.flaticon.com/512/2/2043.png"
              alt="comment-button"
            />
          </button>
          <button type="button" aria-label="upload">
            <img
              className="upload-icon"
              src="https://cdn-icons-png.flaticon.com/512/126/126494.png"
              alt="upload-button"
            />
          </button>
        </div>
        <div className="feed-info">
          <Link to="#" className="follower-info">
            <img
              className="follower-photo"
              src="./images/Soomin/follower-photo.jpeg"
              alt="follower"
            />
            aineworld
          </Link>
          님&nbsp;<Link to="#">외 10명</Link>이 좋아합니다
        </div>
        <div className="feed-box">
          <div className="feed-contents">
            <Link to="#">ggangage</Link>
            <p className="contents">크리스마스 좋아 ! 🎅🏻</p>
          </div>
          <button type="button" aria-label="view-more">
            더보기
          </button>
        </div>
        <div className="comment-box">
          <ol className="comment-wrapper">
            <li className="comment">
              <Link to="#">ppobi</Link>
              <p className="contents">🍰</p>
            </li>
          </ol>
        </div>
        <span className="time">26분 전</span>
        <div id="comment-bar" className="comment-bar">
          <input
            id="comment"
            type="text"
            placeholder="댓글 달기..."
            aria-label="comment"
          />
          <button id="upload-btn" className="upload" type="submit">
            게시
          </button>
        </div>
      </article>
    </div>
  );
}
