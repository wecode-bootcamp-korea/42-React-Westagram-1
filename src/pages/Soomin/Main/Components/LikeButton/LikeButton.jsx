import React from 'react';

export default function LikeButton({ toggleLike, like }) {
  return (
    <div>
      <button
        className="heart-btn"
        type="button"
        aria-label="number of heart"
        onClick={toggleLike}
      >
        <img
          className="heart-icon"
          src={
            like
              ? './images/soomin/colorheart.png'
              : './images/soomin/heart.png'
          }
          alt="heart-button"
        />
      </button>
    </div>
  );
}
