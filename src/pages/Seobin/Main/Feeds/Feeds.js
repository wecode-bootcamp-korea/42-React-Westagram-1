import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import './Feeds.scss';

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
        <div className="profileBox">
          <div className="postProfile">
            <img
              className="feedsProfileImg"
              src="images/lukas.jpg"
              rel="sorry"
            />
            <div className="feedsProfileText">
              <p>wecode_bootcamp</p>
              <span>WeCode - 위코드</span>
            </div>
          </div>
          <div className="feedsLike">
            <img className="feedsImg" src="images/duncan.jpg" rel="sorry" />
            <div className="feedsicon">
              <div className="feedslowericon">
                <i className="fas fa-heart heartColor" />
                <i className="far fa-comment" />
              </div>
              <div>
                <i className="far fa-bookmark" />
              </div>
            </div>
            <div className="feedsProfileLike">
              <img
                className="feedsCircle"
                src="images/lukas.jpg"
                width="70px"
              />
              <span>Icebear님 외 4명이 좋아합니다</span>
            </div>
          </div>
          <div className="bootcampDescribed">
            <span>wecode_bootcamp</span>
            <span>
              "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다... 더보기
            </span>
          </div>
          <ul className="commentUl">
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
        <button className="commentButton" onClick={eventComment}>
          게시
        </button>
      </article>
      <Footer />
    </div>
  );
};

export default Feeds;
