import React from 'react';
import { Link } from 'react-router-dom';
import './MainRight.scss';

export default function MainRight() {
  return (
    <div className="main-right">
      <aside>
        <div className="wecode">
          <Link className="wecode-follower-profile" to="#">
            <img
              className="wecode-profile"
              src="./images/Soomin/wecode-logo.png"
              alt="user"
            />
          </Link>
          <div>
            <Link to="#">
              wecode bootcamp
              <p className="color-gray">WeCode | 위코드</p>
            </Link>
          </div>
        </div>
        <div className="story-box">
          <div className="followers-story">
            <p className="color-gray">스토리</p>
            <button className="see-all" type="button" aria-label="see-all">
              모두 보기
            </button>
          </div>
          <div className="follower-story-box">
            <ol className="follower-story">
              <li className="profile-wrapper">
                <Link className="story-follower-profile" href="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo1.jpg"
                    alt="follower-imge"
                  />
                </Link>
                <div className="story-upload-time">
                  <Link to="#" className="follower-info">
                    __gkxm_
                  </Link>
                  <p className="color-gray">16분 전</p>
                </div>
              </li>
              <li className="profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo2.jpeg"
                    alt="follower-profile"
                  />
                </Link>
                <div className="story-upload-time">
                  <Link to="#" className="follower-info">
                    dndbwhgdk
                  </Link>
                  <p className="color-gray">3시간 전</p>
                </div>
              </li>
              <li className="profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo3.jpeg"
                    alt="follower-profile"
                  />
                </Link>
                <div className="story-upload-time">
                  <Link to="#" className="follower-info">
                    ghhkh
                  </Link>
                  <p className="color-gray">20시간 전</p>
                </div>
              </li>
              <li className="profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo7.jpg"
                    alt="follower-profile"
                  />
                </Link>
                <div>
                  <Link to="#" className="follower-info">
                    ckzkxkgk
                  </Link>
                  <p className="color-gray">23시간 전</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="recommendation-box">
          <div className="recommendation">
            <p className="recommendation-color">회원님을 위한추천</p>
            <button className="see-all" type="button" aria-label="see-all">
              모두 보기
            </button>
          </div>
          <div className="follower-box">
            <ul className="profile-wrapper">
              <li className="follower-profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo4.jpeg"
                    alt="#"
                  />
                </Link>
                <div>
                  <Link to="#">djfudnj</Link>
                  <p className="recommendation-color">
                    hahhho님 외 12명이 팔로우합니다
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="following"
                  className="button-color"
                >
                  팔로우
                </button>
              </li>
              <li className="follower-profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo5.jpeg"
                    alt="#"
                  />
                </Link>
                <div>
                  <Link to="#">kskekfk</Link>
                  <p className="recommendation-color">
                    hahhho님 외 10명이 팔로우합니다
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="following"
                  className="button-color"
                >
                  팔로우
                </button>
              </li>
              <li className="follower-profile-wrapper">
                <Link className="story-follower-profile" to="#">
                  <img
                    className="follower-profile"
                    src="./images/Soomin/follower-photo6.jpeg"
                    alt="#"
                  />
                </Link>
                <div>
                  <Link href="#">akqktk</Link>
                  <p className="recommendation-color">
                    hahhho님 외 8명이 팔로우합니다
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="following"
                  className="button-color"
                >
                  팔로우
                </button>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>
            instagram 정보 &#183; 지원 &#183; 홍보 센터 &#183; API &#183; 채용
            정보 &#183; 개인정보처리방침 &#183; 약관 &#183; 디렉터리 &#183;
            프로필 &#183; 해시태그 &#183; 언어
          </p>
          <br />
          <p>&copy; 2023 INSTAGRAM</p>
        </footer>
      </aside>
    </div>
  );
}
