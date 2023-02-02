import React, { useState } from 'react';
import Comment from './Comment';

const HeinMainFeed = ({ feed }) => {
  const [commentList, setCommentList] = useState(['']);
  const {
    userId,
    userPic,
    feedPic,
    likedPP,
    likedPPic,
    likedNum,
    commentId,
    comment,
  } = feed;
  const [comments, setComments] = useState('');

  const handleHeart2 = index => {
    console.log(comments.isLiked);
    commentList.map((comment, idx) => {
      if (idx === index) comment.isLiked = !comment.isLiked;

      return { ...comment };
    });
  };

  const saveComment = () => {
    setCommentList([...commentList, { commentItem: comments, isLiked: false }]);
    setComments('');
  };

  return (
    <article>
      <header>
        <div className="profileOfArticle">
          <img className="mProfilePic" src={userPic} alt="프로필사진" />
          <span className="boldPoint">{userId}</span>
        </div>
        <img
          class="moreInfo"
          src="https://cdn-icons-png.flaticon.com/512/8638/8638553.png"
          alt="더보기"
        />
      </header>
      <img className="mainIMG" src={feedPic} alt="피드사진" />

      <div className="feedBody">
        <div className="feedIcons">
          <ul>
            <li>
              <a href="#none">
                <img
                  className="iconPress"
                  src="https://cdn-icons-png.flaticon.com/512/138/138533.png"
                  alt="하트"
                />
              </a>
            </li>
            <li>
              <a href="#none">
                <img
                  className="iconPress"
                  src="https://cdn-icons-png.flaticon.com/512/5948/5948565.png"
                  alt="말풍선"
                />
              </a>
            </li>
            <li>
              <a href="#none">
                <img
                  className="iconPress"
                  src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                  alt="dm보내기"
                />
              </a>
            </li>
          </ul>
          <img
            className="iconPress"
            src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
            alt="북마크"
          />
        </div>

        <div className="reaction">
          <div className="likedPP">
            <img className="profilePicR" src={likedPPic} alt="좋아요한사람" />
            <p>
              <span className="boldPoint">{likedPP}</span>님
              <span className="boldPoint">{likedNum}</span>이 좋아합니다
            </p>
          </div>
        </div>

        <div className="description">
          <p className="descriptionText">
            <span className="boldPoint">{feed.userId}</span> {feed.desText}
          </p>
        </div>

        <div className="commentSection">
          <ul className="comments">
            <li className="commentBox">
              <span className="boldPoint">{commentId}</span>
              <span className="commentContext">{comment}</span>
            </li>
            {commentList.map((obj, idx) => (
              <Comment
                data={obj}
                idx={idx}
                handleHeart2={handleHeart2}
                data2={feed}
                key={obj.id}
              />
            ))}
          </ul>
        </div>
        <span className="commentTime">16분 전</span>
      </div>

      <div className="putComment">
        <input
          onChange={e => {
            setComments(e.target.value);
          }}
          className="inputComment"
          type="text"
          value={comments}
          placeholder="댓글 달기..."
          onKeyPress={e => {
            if (e.key === 'Enter') {
              saveComment();
            }
          }}
        />
        <button className="submitComment" type="submit" onClick={saveComment}>
          게시
        </button>
      </div>
    </article>
  );
};

export default HeinMainFeed;
