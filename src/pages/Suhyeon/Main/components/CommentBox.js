import React from 'react';
import './CommentBox.scss';

function CommentBox({ comment, onDelete }) {
  const { text, id } = comment;
  return (
    <div className="commentBox">
      <li>
        <div className="commentWrapper">
          <span className="commentId">neceosecius</span>
          <span className="commentContext">{text}</span>
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
