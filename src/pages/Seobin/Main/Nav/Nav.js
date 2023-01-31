import React from 'react';
import { useState } from 'react';
import List from '../Nav/List';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(isOpen => !isOpen);
  };
  return (
    <nav>
      <div className="navBox">
        <div className="navBoxDiv">
          <i className="fab fa-instagram navIcon" />
          <span className="navTitle">instagram</span>
        </div>
        <div>
          <input type="text" placeholder="검색" />
        </div>
        <div className="rightNavIcon">
          <i className="far fa-compass" />
          <i className="far fa-heart heart" />
          <i className="far fa-user user" />
          <img src="images/dan.jpg" onClick={() => toggleMenu()} />
          <div className="navMenu">{isOpen === true ? <List /> : null}</div>
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
