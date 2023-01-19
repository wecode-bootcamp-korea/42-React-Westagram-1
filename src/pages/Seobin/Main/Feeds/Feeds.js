/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import './Feeds.scss';
import React, { useState } from 'react';

const Feeds = () => {
  const [comment, setComment] = useState('');
  const hendleComment = event => {
    const { value } = event.target;
    setComment(value);
  };
  const [commentArray, setCommentArray] = useState([]);
  const eventComment = () => {
    const result = [...commentArray];
    result.push(comment);
    setCommentArray(result);
    setComment('');
  };

  return (
    <div className="feeds">
      <article>
        <div className="profile-box">
          <div className="profile">
            <img
              className="airplane-img"
              src="images/lukas.jpg"
              rel="sorry"
              width="500px"
            />
            <p>wecode_bootcamp</p>
            <span>WeCode - 위코드</span>
          </div>
        </div>
        <div className="like">
          <img className="feed-img" src="images/duncan.jpg" rel="sorry" />
          <div className="icon-lower">
            <div className="icon-lower__icon">
              <i className="fas fa-heart heartColor" />
              <i className="far fa-comment" />
            </div>
            <div>
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="profile-like">
            <img className="circle" src="images/lukas.jpg" width="70px" />
            <span>Icebear님 외 4명이 좋아합니다</span>
          </div>
        </div>

        <div className="bootcamp-described">
          <span>wecode_bootcamp</span>
          <span>
            "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기
          </span>
          <ul className="comment-ul">
            {commentArray.map(function (a, i) {
              return <p>{commentArray[i]}</p>;
            })}
          </ul>
        </div>
        <input
          type="text"
          value={comment}
          onChange={hendleComment}
          placeholder="댓글달기"
          className="addComment"
        />
        <button className="comment-button" onClick={eventComment}>
          게시
        </button>
      </article>
    </div>
  );
};

export default Feeds;
