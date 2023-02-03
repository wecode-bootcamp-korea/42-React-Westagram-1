import React, { useEffect, useState } from 'react';

const CommentComponent = props => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const handleComment = event => {
    const { value } = event.target;
    setComment(value);
  };

  const eventComment = () => {
    const result = [...commentArray];
    result.push(comment);
    setCommentArray(result);
    setComment('');
  };

  return (
    <>
      <div className="bootcamp-described">
        <span />
        <span>
          "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기
        </span>
        <ul className="comment-ul">
          {commentArray.map(function (a, i) {
            return <p id={i}>{commentArray[i]}</p>;
          })}
        </ul>
      </div>
      <div className="CommentBox">
        <input
          type="text"
          value={comment}
          onChange={handleComment}
          placeholder="댓글달기"
          className="addComment"
        />
        <button className="comment-button" onClick={eventComment}>
          게시
        </button>
      </div>
    </>
  );
};

export default CommentComponent;
