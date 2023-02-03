import React from 'react';

const CommentComponent = props => {
  const onClickLogin = () => {
    fetch('http://localhost:3000/seobin-main', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: props.email,
        username: props.username,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => localStorage.setItem('token', data.accessToken));
  };
  return (
    <>
      <div className="bootcamp-described">
        <span>{props.name}</span>
        <span>
          "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기
        </span>
        <ul className="comment-ul">
          {props.commentArray.map(function (a, i) {
            return <p id={i}>{props.commentArray[i]}</p>;
          })}
        </ul>
      </div>
      <div className="CommentBox">
        <input
          type="text"
          value={props.comment}
          onChange={props.handleComment}
          placeholder="댓글달기"
          className="addComment"
        />
        <button className="comment-button" onClick={props.eventComment}>
          게시
        </button>
      </div>
    </>
  );
};

export default CommentComponent;
