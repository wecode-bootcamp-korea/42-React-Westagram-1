import React from 'react';
import './CommentBox.scss';

function CommentBox(props) {
  return (
    <div className="commentBox">
      <li>
        <div className="commentWrapper">
          <span className="commentId">neceosecius</span>
          <span className="commentContext">{props.comment}</span>
        </div>
      </li>
    </div>
  );
}

export default CommentBox;
