import React from 'react';
import './Comment.scss';

export default function Comment(props) {
  const { commentArray } = props;
  return (
    <>
      {commentArray.map((comment, index) => (
        <li className="comment" key={index}>
          <p>{comment}</p>
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
