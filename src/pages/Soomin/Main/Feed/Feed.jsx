import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Feed.scss';
import Comment from './../Comment/Comment';

export default function Feed() {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const commentInput = event => {
    setComment(event.target.value);
  };
  const onSubmit = event => {
    const result = [...commentArray, comment];
    setCommentArray(result);
    setComment('');
  };
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
            <Link className="view-more" to="">
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
          <button
            className="heart-btn"
            type="button"
            aria-label="number of heart"
          >
            <img
              className="heart-icon"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart-button"
            />
          </button>
          <button type="button" aria-label="comment">
            <img
              className="comment-icon"
              src="https://cdn-icons-png.flaticon.com/512/5948/5948565.png"
              alt="comment-button"
            />
          </button>
          <button type="button" aria-label="upload">
            <img
              className="upload-icon"
              src="https://cdn-icons-png.flaticon.com/512/747/747416.png"
              alt="upload-button"
            />
          </button>
          <button type="button" aria-label="bookmark">
            <img
              className="bookmark-icon"
              src="https://cdn-icons-png.flaticon.com/512/2099/2099170.png"
              alt="bookmark-button"
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
          님&nbsp;
          <Link to="#" className="follower-info">
            외 10명
          </Link>
          이 좋아합니다
        </div>
        <div className="feed-box">
          <div className="feed-contents">
            <Link to="#" className="user-proflie">
              ggangage
            </Link>
            <p className="contents">크리스마스 좋아 ! 🎅🏻 케이크 맛있겠다 !</p>
          </div>
          <button
            className="comment-view-more"
            type="button"
            aria-label="view-more"
          >
            더 보기
          </button>
        </div>
        <form id="comment-box" className="comment-box">
          <ol className="comment-wrapper">
            <Comment commentArray={commentArray} />
          </ol>
        </form>
        <span className="time">26분 전</span>
        <div className="comment-bar">
          <input
            className="comment-input"
            type="text"
            placeholder="댓글 달기..."
            value={comment}
            aria-label="comment"
            onChange={commentInput}
            onKeyDown={e => {
              if (e.keyCode === 13) {
                onSubmit();
              }
            }}
          />
          <button
            id="upload-btn"
            className="upload"
            type="submit"
            onClick={onSubmit}
          >
            게시
          </button>
        </div>
      </article>
    </div>
  );
}
