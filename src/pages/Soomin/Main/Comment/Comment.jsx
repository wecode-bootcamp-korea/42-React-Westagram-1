import React from 'react';
import './Comment.scss';

export default function Comment({ commentArray, commentContens, followerId }) {
  return (
    <>
      <span className="contents-box">{followerId}</span>
      <span>{commentContens}</span>
      {commentArray.map((comment, i) => (
        <li className="comment" key={i}>
          <div>
            <span className="contents-box">{followerId}</span>
            <span>{comment}</span>
          </div>
          <button
            className="comment-heart"
            type="button"
            aria-label="comment-heart"
          >
            ♡
          </button>
        </li>
      ))}
    </>
  );
}
