import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [suggestionsLists, setSuggestionsLists] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isPopUp, setPopUp] = useState(false);
  const modalEl = useRef(null);
  const iconEl = useRef();

  const handleClickOutside = event => {
    if (
      isPopUp &&
      !iconEl.current.contains(event.target) &&
      !modalEl.current.contains(event.target)
    ) {
      return setPopUp(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const onPopUp = () => {
    setPopUp(isPopUp => !isPopUp);
  };
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/suhyeon-login');
  };

  const onUserInput = event => setUserInput(event.target.value);

  useEffect(() => {
    fetch('/data/suggestionsData.json')
      .then(response => response.json())
      .then(data => setSuggestionsLists(data));
  }, []);

  const searchedLists = suggestionsLists.filter(suggenstionsList => {
    return suggenstionsList.userId
      .toLowerCase()
      .includes(userInput.toLowerCase());
  });

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
          <input
            type="text"
            placeholder="검색"
            className="searchBar"
            onChange={onUserInput}
          />
          <div
            className={`suggestions_container ${userInput ? 'is_active' : ''}`}
          >
            <ul className="suggestions_lists">
              {userInput !== ''
                ? searchedLists.map((searchedList, id) => {
                    return (
                      <li key={id} className="suggestions_list">
                        <div className="suggestions_icon">
                          <img
                            alt="profileImg"
                            src={searchedList.userImg}
                            className="suggestions_icon_img"
                          />
                        </div>
                        <span className="suggestions_id">
                          {searchedList.userId}
                        </span>
                      </li>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
        {isPopUp ? (
          <div ref={modalEl} className="profilePopUp">
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
        ) : (
          ''
        )}
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
            onClick={onPopUp}
            ref={iconEl}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
