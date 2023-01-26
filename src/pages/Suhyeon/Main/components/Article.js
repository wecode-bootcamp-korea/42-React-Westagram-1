import React, { useState } from 'react';
import CommentBox from './CommentBox';
import './Article.scss';

function Article() {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [btnState, setBtnState] = useState(true);
  const [btnColor, setBtnColor] = useState('btn_disabled');

  const onInputComments = event => {
    setInputValue(event.target.value);
    inputValue.length > 0 ? setBtnState(false) : setBtnState(true);
    inputValue.length > 0
      ? setBtnColor('btn_abled')
      : setBtnState('btn_disabled');
  };

  const addReply = () => {
    const copyArr = [...comments];
    copyArr.push(inputValue);
    setComments(copyArr);
    setInputValue('');
  };

  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      inputValue.length > 0
        ? addReply()
        : window.alert('댓글 내용 입력해주세요');
    }
  };

  return (
    <article className="article">
      <div className="authorProfileBox">
        <div className="circle">
          <img
            alt="authorProfileImg"
            className="authorProfile_img"
            src="/images/suhyeonImages/authorProfileImg.png"
          />
        </div>
        <span className="authorId">blushcats</span>
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
          src="/images/suhyeonImages/articleImg.png"
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
            src="/images/suhyeonImages/wecode.png"
          />
        </div>
        <p className="status"> aineworld님 외 10명이 좋아합니다</p>
      </div>

      <div className="postBox">
        <span className="postId">canon_mj</span>
        <div className="postContext">
          위워크에서 진행한 베이킹 클래스 넘나 재밌었다! 사랑하는 내 사람들이랑
          함께하니 베이킹이 더 잘 되는 것 같다. 상세한 문의는 DM으로 친절한
          인삿말과 함께 부탁드립니다
        </div>
        <input type="button" id="postMore" value="더 보기" />
      </div>

      <ul>
        <div className="commentsList">
          <ul className="commentList2">
            {comments.map((comment, id) => {
              return <CommentBox key={id} comment={comment} />;
            })}
          </ul>
        </div>
      </ul>
      <div className="commentTimeBox">
        <span className="commentTime">42분 전</span>
      </div>

      <form className="commentWriteBox" onKeyDown={handleOnKeyPress}>
        <input
          type="text"
          className="commentWrite"
          placeholder="댓글 달기..."
          value={inputValue}
          onChange={onInputComments}
        />
        <input hidden="hidden" className="hiddenInput" />
        <input
          type="button"
          className={btnColor}
          value="게시"
          disabled={btnState}
          onClick={addReply}
        />
      </form>
    </article>
  );
}

export default Article;
