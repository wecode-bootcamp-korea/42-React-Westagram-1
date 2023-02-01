import React from 'react';
import { useState } from 'react';
import CommentBox from './CommentBox';
import './CommentArea.scss';

function CommentArea() {
  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);
  const [btnState, setBtnState] = useState(true);
  const [btnColor, setBtnColor] = useState('btn_disabled');

  const onInputComments = event => {
    setInputValue(event.target.value);
    event.target.value
      ? setBtnState(btnState => false)
      : setBtnState(bbtnState => true);
    event.target.value
      ? setBtnColor(btnColor => 'btn_abled')
      : setBtnColor(btnColor => 'btn_disabled');
  };

  const addReply = () => {
    setComments(currentArray => [
      ...currentArray,
      { id: comments.length, text: inputValue },
    ]);

    setInputValue(inputValue => '');
  };

  const onDelete = id => {
    const newArray = comments.filter(item => {
      return item.id !== id;
    });
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
    <>
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
      <form className="commentWriteBox" onKeyPress={handleOnKeyPress}>
        <input
          type="text"
          className="commentWrite"
          placeholder="댓글 달기..."
          value={inputValue}
          onChange={onInputComments}
        />
        <input hidden="hidden" className="hiddenInput" />
        <button
          type="button"
          className={btnColor}
          disabled={btnState}
          onClick={addReply}
        >
          게시
        </button>
      </form>
    </>
  );
}
export default CommentArea;
