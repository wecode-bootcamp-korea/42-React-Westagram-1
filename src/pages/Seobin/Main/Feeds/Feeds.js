import './Feeds.scss';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';

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
        <div className="post">
          <div className="profile">
            <img className="circle" src="images/lukas.jpg" alt="Sorry" />
            <div className="profile-text">
              <p>wecode_bootcamp</p>
              <span>WeCode - 위코드</span>
            </div>
          </div>
          <img className="airplane-img" src="images/lukas.jpg" alt="Sorry" />
          <div className="icon-lower">
            <div className="icon-lower__icon">
              <i className="fas fa-heart heartColor" />
              <i className="far fa-comment" />
            </div>
            <div>
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="like">
            <img className="circle" src="images/duncan.jpg" alt="Sorry" />
            <span>Icebear님 외 4명이 좋아합니다</span>
          </div>
          <div className="bootcamp-described">
            <span>wecode_bootcamp</span>
            <span>
              "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기
            </span>
          </div>
          <ul className="comment-ul">
            {commentArray.map(function (a, i) {
              return <li key={i}>{commentArray[i]}</li>;
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
      <Footer />
    </div>
  );
};

export default Feeds;
