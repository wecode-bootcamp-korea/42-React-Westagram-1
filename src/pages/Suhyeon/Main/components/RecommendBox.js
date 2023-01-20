import React from 'react';
import './RecommendBox.scss';
import RecommendProfile from './RecommendProfile';

function RecommendBox() {
  return (
    <div className="recommendBox">
      <div className="recommendTop">
        <span className="recommendTopLeft">회원님을 위한 추천</span>
        <input type="button" className="recommendTopRight" value="모두 보기" />
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
