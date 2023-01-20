import React from 'react';
import './StoryProfile.scss';

function StoryProfile() {
  return (
    <li className="storyProfile">
      <div className="storyProfileWrapper">
        <div className="storyIcon">
          <img
            alt="profile_img_5"
            className="storyIcon_img_1"
            src="/images/suhyeonImages/profileImg_5.png"
          />
        </div>

        <div className="storyInfo">
          <span className="storyId">_yum_s</span>
          <span className="storyTime">16분 전</span>
        </div>
      </div>
    </li>
  );
}

export default StoryProfile;
