import React, { useState } from 'react';
import CommentBox from './CommentBox';
import './Article.scss';
import Feed from './Feed';

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
    setComments(currentArray => [...currentArray, inputValue]);
    setInputValue('');
  };

  const onDelete = id => {
    const newArray = comments.filter(comment => comment.id !== id);
    setComments(newArray);
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
      <Feed />
      <ul>
        <div className="commentsList">
          <ul className="commentList2">
            {comments.map((comment, id) => {
              return (
                <CommentBox key={id} comment={comment} onDelete={onDelete} />
              );
            })}
          </ul>
        </div>
      </ul>
      <div className="commentTimeBox">
        <span className="commentTime">42분 전</span>
      </div>

      <form className="commentWriteBox" onKeyPress={handleOnKeyPress}>
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
