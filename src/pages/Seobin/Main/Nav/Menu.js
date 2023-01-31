import React from 'react';
import './Menu.scss';

const List = () => {
  return (
    <ul>
      <li>프로필</li>
      <li>저장됨</li>
      <li>설정</li>
      <div className="logOut">
        <li>로그아웃</li>
      </div>
    </ul>
  );
};

export default List;
