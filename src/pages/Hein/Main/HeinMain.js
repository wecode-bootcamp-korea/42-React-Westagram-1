import React from 'react';
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
  return (
    <main>
      <div className="mainFeed">
        <article>
          <header>
            <div className="profileOfArticle">
              <img
                className="mProfilePic"
                src="/images/heinImages/heinProfile.jpeg"
                alt="프로필사진"
              />
              <span className="boldPoint">understand_iin</span>
            </div>
            <img
              class="moreInfo"
              src="https://cdn-icons-png.flaticon.com/512/8638/8638553.png"
              alt="더보기"
            />
          </header>

          <img
            className="mainIMG"
            src="/images/heinImages/feed.jpeg"
            alt="피드사진"
          />

          <div class="feedIcons">
            <ul>
              <li>
                <a href="#none">
                  <img
                    className="iconPress"
                    src="https://cdn-icons-png.flaticon.com/512/138/138533.png"
                    alt="하트"
                  />
                </a>
              </li>
              <li>
                <a href="#none">
                  <img
                    className="iconPress"
                    src="https://cdn-icons-png.flaticon.com/512/5948/5948565.png"
                    alt="말풍선"
                  />
                </a>
              </li>
              <li>
                <a href="#none">
                  <img
                    className="iconPress"
                    src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                    alt="dm보내기"
                  />
                </a>
              </li>
            </ul>
            <img
              className="iconPress"
              src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png"
              alt="북마크"
            />
          </div>

          <div className="reaction">
            <div className="likedPP">
              <img
                className="profilePicR"
                src="/images/heinImages/mingGu.jpeg"
                alt="좋아요한사람"
              />
              <p>
                <span className="boldPoint">MingGu</span>님{' '}
                <span className="boldPoint">외 616명</span>이 좋아합니다
              </p>
            </div>

            <div className="description">
              <p className="descriptionText">
                <span className="boldPoint">understand_iin</span> 엄빠랑
                보라카이 다녀왔당 &#127965; <br />
                아직 사람은 많이 없지만 코로나때 잠시 입국 금지였어서 그런지
                바다도 아주 맑고 예쁘고..&#127807; <br />
                역시 노을맛집은 필리핀이지 &#128293; &#128293; &#128293; <br />
                &#128150; 다음에는 형뉴랑도 놀러와야겠당 히히 &#128131;&#128150;
              </p>
            </div>

            <div className="commentSection">
              <ul className="comments">
                <li>
                  <span className="boldPoint">MingGu</span>
                  <span className="commentContext">
                    &#128127;나를 두고 가다니 &#128127;..가만두지
                    않겠다옹&#128074;&#128074;
                  </span>
                </li>
                <li>
                  <img
                    className="commentHeart"
                    src="https://cdn-icons-png.flaticon.com/512/1216/1216575.png"
                    alt="코멘트하트"
                  />
                </li>
              </ul>
            </div>
            <span className="commentTime">16분 전</span>
          </div>

          <div className="putComment">
            <input
              className="inputComment"
              type="text"
              placeholder="댓글 달기..."
            />
            <button className="submitComment" type="submit" disabled>
              게시
            </button>
          </div>
        </article>
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
          <p className="westaScript">
            Westagram 정보∙ 지원∙ 홍보 센터 ∙ AIP∙
            <br />
            채용 정보∙ 개인정보처리방침∙ 약관 ∙ 디렉터리∙ 프로필∙ 해시태그∙ 언어
            <br />
            <br />© 2023 WESTAGRAM
          </p>
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
