/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { useEffect } from 'react';

function Comment(props) {
  useEffect(() => {
    //useEffect : 화면이 렌더링 될때 실행하는것
    console.log(props);
  }, []); //화면이 매번 렌더링 되는게 아니고 데이터 값이 바뀔때 하는거라 [] dependency 라고 하는것에 상태가 바뀌었는지 감지해야하는 데이터를 넣어줌

  return (
    <div>
      <li className="commentBox">
        <span className="boldPoint">MingGu</span>
        <span className="commentContext">{props.data.commentItem}</span>
        <img
          className="commentHeart"
          src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
          alt="코멘트하트"
        />
      </li>
    </div>
  );
}

export default Comment;

//rfce

//useEffect(()=>{
// 내가 실행시킬 함수
// },[])
// [state]어떤 데이터가 바뀌었는지 감지해야하는 데이터
