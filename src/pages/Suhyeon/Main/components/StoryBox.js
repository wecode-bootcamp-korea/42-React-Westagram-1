import React from 'react';
import './StoryBox.scss';
import StoryProfile from './StoryProfile';

function StoryBox() {
  return (
    <div className="storyBox">
      <div className="storyTop">
        <span className="storyTopLeft">스토리</span>
        <input type="button" className="storyTopRight" value="모두 보기" />
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
