import React, { useState } from 'react';
import './CommentBox.scss';

function CommentBox({ comment, onDelete }) {
  const { text, id } = comment;
  const [heartState, setHeartState] = useState(false);

  const handleHeart = () => {
    setHeartState(heartState => !heartState);
  };
  return (
    <div className="commentBox">
      <li>
        <div className="commentWrapper">
          <span className="commentId">neceosecius</span>
          <span className="commentContext">{text}</span>
          <img
            alt="heartIcon"
            className={
              heartState ? 'commentHeartIcon_on' : 'commentHeartIcon_off'
            }
            onClick={handleHeart}
          />
          <img
            alt="deleteIcon"
            className="commentDeleteIcon"
            src="/images/suhyeonImages/recycle.png"
            onClick={() => onDelete(id)}
          />
        </div>
      </li>
    </div>
  );
}

export default CommentBox;
