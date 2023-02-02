import React from 'react';

function Comment(props) {
  const { data2, idx, handleHeart2, data } = props;
  const { commentId } = data2;
  const { commentItem, isLiked } = data;

  const handleHeart = () => {
    handleHeart2(idx);
  };
  return (
    <div>
      <li className="commentBox">
        <span className="boldPoint">{commentId}</span>
        <span className="commentContext">{commentItem}</span>
        <button onClick={handleHeart}>
          <img
            className="commentHeart"
            src={
              isLiked
                ? 'https://cdn-icons-png.flaticon.com/512/138/138533.png'
                : 'https://cdn-icons-png.flaticon.com/512/1216/1216575.png'
            }
            alt="코멘트하트"
          />
        </button>
      </li>
    </div>
  );
}

export default Comment;
