import React from 'react';
import RecommendProfile from './RecommendProfile';
import './RecommendBox.scss';

function RecommendBox() {
  return (
    <div className="recommendBox">
      <div className="recommendTop">
        <span className="recommendTopLeft">회원님을 위한 추천</span>
        <button className="recommendTopRight">모두 보기</button>
      </div>
      <div className="recommendBottom">
        <ul className="recommendList">
          <RecommendProfile />
          <RecommendProfile />
          <RecommendProfile />
        </ul>
      </div>
    </div>
  );
}

export default RecommendBox;
