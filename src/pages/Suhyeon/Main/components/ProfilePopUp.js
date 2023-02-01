import React from 'react';

function ProfilePopUp() {
  return (
    <div className="profilePopUp">
      <ul className="profileList">
        <li className="profileMenu">
          <img
            src="/images/suhyeonimages/user.png"
            alt="icon"
            className="profileIcon"
          />
          <span className="profileText">프로필</span>
        </li>
        <li className="profileMenu">
          <img
            src="/images/suhyeonimages/bookmark.png"
            alt="icon"
            className="profileIcon"
          />
          <span className="profileText">북마크</span>
        </li>
        <li className="profileMenu">
          <img
            src="/images/suhyeonimages/settings.png"
            alt="icon"
            className="profileIcon"
          />
          <span className="profileText">설정</span>
        </li>
      </ul>
    </div>
  );
}
export default ProfilePopUp;
