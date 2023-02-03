import React, { useEffect } from 'react';
import { useState } from 'react';
import MenuList from './Menu';
import List from './List';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setMenu] = useState(false);
  const [loading, setLoading] = useState(true);
  // user list
  const [userList, setUserList] = useState([]);
  const [search, setSearch] = useState('');

  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };

  const searchUser = event => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    fetch('../data/usePost.json')
      .then(response => response.json())
      .then(result => {
        setUserList(result);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>로딩중... </h1>;

  const filterId = search.length
    ? userList.filter(idName => idName.userId.includes(search))
    : [];

  return (
    <nav>
      <div className="navBox">
        <div className="navBoxDiv">
          <i className="fab fa-instagram navIcon" />
          <span className="navTitle">instagram</span>
        </div>
        <div>
          <div className="searchList" />
          <input type="text" placeholder="검색" />
          {userList.map(userList => (
            <List key={userList.id} userList={userList} />
          ))}
        </div>
        <div className="rightNavIcon">
          <i className="far fa-compass" />
          <i className="far fa-heart heart" />
          <i className="far fa-user user" />
          <img src="images/dan.jpg" onClick={() => toggleMenu()} />
          <div className="navMenu">{isOpen === true ? <MenuList /> : null}</div>
        </div>
      </div>
      <script
        src="https://kit.fontawesome.com/f1d6ea217b.js"
        crossorigin="anonymous"
      />
    </nav>
  );
};

export default Nav;
