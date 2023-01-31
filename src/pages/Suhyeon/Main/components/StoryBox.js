import React from 'react';
import StoryProfile from './StoryProfile';
import './StoryBox.scss';

function StoryBox() {
  return (
    <div className="storyBox">
      <div className="storyTop">
        <span className="storyTopLeft">스토리</span>
        <button className="storyTopRight">모두 보기</button>
      </div>
      <div className="storyBottom">
        <ul className="storyList">
          <StoryProfile />
          <StoryProfile />
          <StoryProfile />
          <StoryProfile />
          <StoryProfile />
        </ul>
      </div>
    </div>
  );
}

export default StoryBox;
