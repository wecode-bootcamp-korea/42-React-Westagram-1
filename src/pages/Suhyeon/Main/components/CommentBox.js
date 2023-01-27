import React from 'react';
import './CommentBox.scss';

function CommentBox({ comment }) {
  return (
    <div className="commentBox">
      <li>
        <div className="commentWrapper">
          <span className="commentId">neceosecius</span>
          <span className="commentContext">{comment}</span>
        </div>
      </li>
    </div>
  );
}

export default CommentBox;
