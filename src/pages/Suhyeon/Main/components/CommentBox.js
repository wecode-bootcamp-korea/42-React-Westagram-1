import React from 'react';
import './CommentBox.scss';

function CommentBox({ comment, onDelete, id }) {
  return (
    <div className="commentBox">
      <li>
        <div className="commentWrapper">
          <span className="commentId">neceosecius</span>
          <span className="commentContext">{comment}</span>
          <img
            alt="deleteIcon"
            className="commentDeleteIcon"
            src="/images/suhyeonImages/recycle.png"
            onClick={() => onDelete(comment.id)}
          />
        </div>
      </li>
    </div>
  );
}

export default CommentBox;
