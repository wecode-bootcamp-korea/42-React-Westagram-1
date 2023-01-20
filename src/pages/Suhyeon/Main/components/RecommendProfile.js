import React from 'react';
import './RecommendProfile.scss';

function RecommendProfile() {
  return (
    <li className="recommendProfile">
      <div className="recommendProfileWrapper">
        <div className="recommendIcon">
          <img
            alt="profile_img_1"
            className="recommendIcon_img_1"
            src="/images/suhyeonImages/profileImg_1.png"
          />
        </div>
        <div className="recommendInfo">
          <span className="recommendId">rampart81</span>
          <span className="recommendPeople">gonia123님 외 2명이...</span>
        </div>

        <input type="button" value="팔로우" className="recommendFollow" />
      </div>
    </li>
  );
}

export default RecommendProfile;
