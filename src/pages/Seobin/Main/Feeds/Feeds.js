import React, { useState, useEffect } from 'react';
import CommentComponent from './Comment/CommentComponent';
import Footer from '../Footer/Footer';
import './Feeds.scss';

const Feeds = () => {
  // Feed 여러개 구현
  const [Feeds, setFeeds] = useState([]);

  // 댓글 구현
  const [comment, setComment] = useState('');
  const handleComment = event => {
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
  useEffect(() => {
    fetch('data/userInfoList.json')
      .then(response => response.json())
      .then(result => setFeeds(result));
  }, []);

  return (
    <div className="feeds">
      <article>
        {Feeds.map(userInfo => {
          return (
            <>
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
                  <span>{userInfo.name}님 외 4명이 좋아합니다</span>
                </div>
              </div>
              <CommentComponent />
            </>
          );
        })}
        <Footer />
      </article>
    </div>
  );
};

export default Feeds;
