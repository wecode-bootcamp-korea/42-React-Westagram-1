import React from 'react';
import './FeedContext.scss';

function FeedContext({ feedList, feedLists, id }) {
  return (
    <>
      <div className="authorProfileBox">
        <div className="circle">
          <img
            alt="authorProfileImg"
            className="authorProfile_img"
            src={feedList.authorProfileImg}
          />
        </div>
        <span className="authorId">{feedList.authorId}</span>
        <img
          alt="otherIcon"
          className="otherIcon"
          src="/images/suhyeonImages/other.png"
        />
      </div>
      <div className="articleImgBox">
        <img
          alt="arrticle_img"
          className="article_img"
          src={feedList.articleImg}
        />
      </div>
      <div className="reactionIconBox">
        <div className="reactionIconLeft">
          <img
            alt="reaction_heartIcon"
            className="reaction_heartIcon reactionIcons"
            src="/images/suhyeonImages/love.png"
          />
          <img
            alt="reaction_commentIcon"
            className="
reaction_commentIcon reactionIcons"
            src="/images/suhyeonImages/comment.png"
          />
          <img
            alt="reaction_saveIcon"
            className="reaction_saveIcon reactionIcons"
            src="/images/suhyeonImages/save.png"
          />
        </div>
        <div className="reactionIconRight">
          <img
            alt="rection_bookmarkIcon"
            className="reaction_bookmarkIcon"
            src="/images/suhyeonImages/bookmark.png"
          />
        </div>
      </div>
      <div className="statusBox">
        <div className="circle_2">
          <img
            alt="statusProfile_img"
            className="statusProfile_img"
            src={feedList.statusProfileImg}
          />
        </div>
        <p className="status">
          {feedList.statusProfileId}님 외 10명이 좋아합니다
        </p>
      </div>
      <div className="postBox">
        <span className="postId">{feedList.authorId}</span>
        <div className="postContext">{feedList.postText}</div>
      </div>
      <div className="commentTimeBox">
        <span className="commentTime">{feedList.postTime}</span>
      </div>
    </>
  );
}

export default FeedContext;
