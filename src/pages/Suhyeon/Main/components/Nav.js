import React from 'react';
import './Nav.scss';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/suhyeon-login');
  };
  return (
    <nav className="nav">
      <div className="navWrapper">
        <div className="navLeft">
          <img
            alt="instagramLogo"
            className="instagramLogoSuhyeon"
            src="/images/suhyeonImages/instagram.png"
          />
          <span onClick={goToLogin} className="instagramTitle">
            {' '}
            Instagram{' '}
          </span>
        </div>

        <div className="navCenter">
          <img
            alt="searchIcon"
            className="searchIcon"
            src="/images/suhyeonImages/search.png"
          />
          <input type="text" placeholder="검색" className="searchBar" />
        </div>

        <div className="navRight">
          <img
            alt="compassIcon"
            className="compassIcon icons"
            src="/images/suhyeonImages/compass.png"
          />
          <img
            alt="heartIcon"
            className="heartIcon icons"
            src="/images/suhyeonImages/love.png"
          />
          <img
            alt="uesrIcon"
            className="userIcon icons"
            src="/images/suhyeonImages/user.png"
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
