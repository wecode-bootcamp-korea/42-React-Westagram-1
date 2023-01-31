import React, { useEffect } from 'react';

function Comment(props) {
  useEffect(() => {}, []);

  return (
    <div>
      <li className="commentBox">
        <span className="boldPoint">MingGu</span>
        <span className="commentContext">{props.data.commentItem}</span>
        <img
          className="commentHeart"
          src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
          alt="코멘트하트"
        />
      </li>
    </div>
  );
}

export default Comment;
