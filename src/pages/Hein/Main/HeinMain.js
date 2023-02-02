import React, { useState, useEffect } from 'react';
import HeinMainFeed from './HeinMainFeed';
import '../../Hein/Main/HeinMain.scss';
import '../../../styles/common.scss';

function NavContainer() {
  return (
    <nav className="navContainer">
      <div className="nav1">
        <a href="#none">
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
            alt="instagram.png"
          />
        </a>
        <a href="#none">
          <div className="Westagram">Westagram</div>
        </a>
      </div>
      <input className="inputSearch" type="search" placeholder="검색" />
      <div className="nav2">
        <ul className="listWrapper">
          <li className="search navlist">
            <a href="#none">
              <img
                className="searchIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="탐색"
              />
            </a>
          </li>
          <li className="like navlist">
            <a href="#none">
              <img
                className="heartIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트"
              />
            </a>
          </li>
          <li className="myPage navlist">
            <a href="#none">
              <img
                className="myPageIcon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt="마이페이지"
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function MainFeed() {
  const [mainFeedList, setMainFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setMainFeedList(data));
  }, []);
  return (
    <main>
      <div className="mainFeed">
        {mainFeedList.map(feed => {
          return <HeinMainFeed key={feed.id} feed={feed} />;
        })}
      </div>

      <div className="mainRight">
        <div className="mainRightTop">
          <ul className="mainTopWrap">
            <li>
              <img
                className="myProfilePic2"
                src="./images/heinImages/heinProfile.jpeg"
                alt="프로필사진"
              />
            </li>
            <li>
              <span className="boldPoint">understand_iin</span>
              <br />
              <span className="subProfile">
                해인 &nbsp;| &nbsp; &#127800;6m16d&#127800;
              </span>
            </li>
          </ul>
        </div>

        <div className="storySection">
          <div className="storySectionTop">
            <span className="storyTitle">스토리</span>
            <span className="storyMore">모두 보기</span>
          </div>
          <div className="StoryLists">
            <ul className="storyList">
              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="./images/heinImages/hyungyoo.jpeg"
                  alt="형유"
                />
                <span className="boldPoint">Hyung_yoo</span>
                <span className="subProfile">1분 전</span>
              </li>

              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="https://images.unsplash.com/photo-1671742450600-3857ccde82cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="헐리우드"
                />
                <span className="boldPoint">HollyWood</span>
                <span className="subProfile">2분 전</span>
              </li>

              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="https://images.unsplash.com/photo-1671742466125-076b52562e77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="디즈니랜드"
                />
                <span className="boldPoint">Diseny_Land</span>
                <span className="subProfile">3분 전</span>
              </li>

              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="https://images.unsplash.com/photo-1669751553048-d78e452fcb55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="오사카"
                />
                <span className="boldPoint">Oosaka</span>
                <span className="subProfile">5분 전</span>
              </li>

              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="https://images.unsplash.com/photo-1659747533285-718f93994721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt="로마"
                />
                <span className="boldPoint">Rom_a</span>
                <span className="subProfile">13분 전</span>
              </li>

              <li className="storyWrap">
                <img
                  className="ProfilePic"
                  src="https://images.unsplash.com/photo-1626175910397-1c46191a8d44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                  alt="포시타노"
                />
                <span className="boldPoint">POSIT_aNO</span>
                <span className="subProfile">20분 전</span>
              </li>
            </ul>
          </div>

          <div className="recommandSection">
            <div className="recommandSectionTop">
              <span className="storyTitle">회원님을 위한 추천</span>
              <span className="storyMore">모두 보기</span>
            </div>

            <ul className="storyList">
              <li>
                <div className="recommandFollow">
                  <img
                    className="ProfilePic"
                    src="https://images.unsplash.com/photo-1669848768314-721950f69401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="토마토"
                  />
                  <span className="boldPoint">ToomaT</span>
                  <span className="subProfile">
                    Hyung_yoo님 외 70명이 팔로우 중
                  </span>
                </div>
                <span className="follow">팔로우</span>
              </li>

              <li>
                <div className="recommandFollow">
                  <img
                    className="ProfilePic"
                    src="https://images.unsplash.com/photo-1669490883041-2d0ac48bc4c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=557&q=80"
                    alt="피자"
                  />
                  <span className="boldPoint">PiZZang</span>
                  <span className="subProfile">
                    HollyWood님 외 150명이 팔로우 중
                  </span>
                </div>
                <span className="follow">팔로우</span>
              </li>

              <li>
                <div className="recommandFollow">
                  <img
                    className="ProfilePic"
                    src="https://t1.daumcdn.net/cfile/tistory/2307B240594E7A272B"
                    alt="팬케익"
                  />
                  <span className="boldPoint">Yammi_panCake_</span>
                  <span className="subProfile">
                    Rom_a님 외 100명이 팔로우 중
                  </span>
                </div>
                <span className="follow">팔로우</span>
              </li>

              <li>
                <div className="recommandFollow">
                  <img
                    className="ProfilePic"
                    src="https://plus.unsplash.com/premium_photo-1664527307673-c5a7b94738fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="레몬"
                  />
                  <span className="boldPoint">ImSo_Sour</span>
                  <span className="subProfile">
                    Oosaka님 외 53명이 팔로우 중
                  </span>
                </div>
                <span className="follow">팔로우</span>
              </li>
            </ul>
          </div>
        </div>

        <footer>
          <ul className="westaScript">
            {WESTAGRAM_ASIDE.map(aside => {
              return <li key={aside.id}>{aside.asideName}</li>;
            })}
            <li>© 2023 WESTAGRAM</li>
          </ul>
        </footer>
      </div>
    </main>
  );
}

function Main() {
  return (
    <>
      <NavContainer />
      <MainFeed />
    </>
  );
}

export default Main;

const WESTAGRAM_ASIDE = [
  { id: 1, asideName: 'Westagram 정보' },
  { id: 2, asideName: ' ∙ 지원' },
  { id: 3, asideName: ' ∙ 홍보 센터' },
  { id: 4, asideName: ' ∙ AIP ∙' },
  { id: 5, asideName: '채용 정보' },
  { id: 6, asideName: '∙ 개인정보처리방침' },
  { id: 7, asideName: ' ∙ 약관 ∙' },
  { id: 8, asideName: '디렉토리' },
  { id: 9, asideName: '∙ 프로필' },
  { id: 10, asideName: ' ∙ 해시태그' },
  { id: 11, asideName: ' ∙ 언어' },
];
