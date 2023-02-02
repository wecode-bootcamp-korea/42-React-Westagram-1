import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Comment from '../../Comment/Comment';
import LikeButton from '../../LikeButton/LikeButton';
import './Article.scss';

export default function Article({ feed }) {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);
  const [like, setLike] = useState(false);

  const toggleLike = event => {
    setLike(!like);
  };

  const commentInput = event => {
    setComment(event.target.value);
  };
  const onSubmit = event => {
    const result = [...commentArray, comment];
    setCommentArray(result);
    setComment('');
  };

  return (
    <article key={feed.id}>
      <h1 className="logo-box">my timeline</h1>
      <ol className="from-wrapper">
        <li className="profile-wrapper">
          <h1 className="logo-box">instagram form</h1>
          <header>
            <Link className="user-proflie" to="/">
              <img className="profile" src={feed.userProfile} alt="profile" />
              {feed.userId}
            </Link>
          </header>
          <Link className="view-more" to="">
            <i className="fa-solid fa-ellipsis" />
          </Link>
        </li>
      </ol>
      <img className="feed-photo1" src={feed.feedPhoto} alt="feed" />
      <div className="feed-icon">
        <LikeButton toggleLike={toggleLike} like={like} />
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
            src={feed.followerProfile}
            alt="follower"
          />
          {feed.followerId}
        </Link>
        님&nbsp;외
        <Link to="#" className="follower-info">
          &nbsp;{feed.likesNumber}
        </Link>
        이 좋아합니다
      </div>
      <div className="feed-box">
        <div className="feed-contents">
          <Link to="#" className="user-proflie">
            {feed.userId}
          </Link>
          <p className="contents">{feed.comment}</p>
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
          <Comment
            commentArray={commentArray}
            commentContens={feed.commentContens}
            followerId={feed.followerId}
          />
        </ol>
      </form>
      <span className="time">{feed.postTime}</span>
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
  );
}
