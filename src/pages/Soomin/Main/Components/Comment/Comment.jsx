import React, { useState } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './Comment.scss';

export default function Comment({ commentArray, commentContens, followerId }) {
  const [like, setLike] = useState(false);

  const toggleLike = event => {
    setLike(!like);
  };
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
          <LikeButton toggleLike={toggleLike} like={like} />
        </li>
      ))}
    </>
  );
}
