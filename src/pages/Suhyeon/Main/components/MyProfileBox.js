import React from 'react';
import './MyProfileBox.scss';

function MyProfileBox() {
  return (
    <div className="myProfileBox">
      <div className="myProfileImg">
        <img
          alt="wecode_img"
          className="wecode"
          src="/images/suhyeonImages/wecode.png"
        />
      </div>
      <div className="myProfileInfo">
        <span className="myProfileId">wecode_bootcamp</span>
        <span className="myProfileName">WeCode 위코드</span>
      </div>
    </div>
  );
}

export default MyProfileBox;
