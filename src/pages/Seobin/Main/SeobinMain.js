import React from 'react';
import Feeds from './Feeds/Feeds';
import Nav from './Nav/Nav';
import './SeobinMain.scss';

const Home = () => {
  return (
    <main>
      <Nav />
      <Feeds />
      <div className="mainRight">
        <div className="mainRightProfile">
          <img alt="sorry" src="./images/lukas.jpg" />
          <div className="mainRightProfileText">
            <p>Wecode_bootcamp</p>
            <p>WeCode | 위코드</p>
          </div>
        </div>
        <div>
          <div className="story">
            <div className="storyAll">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>
            <div className="storyBox">
              <ul className="storyUl ulStyle">
                <li className="storyLi">
                  <div className="storyLiBox">
                    <img
                      alt="sorry"
                      className="circle"
                      src="./images/lukas.jpg"
                    />
                    <div>
                      <p>alexhynul</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                </li>
                <li className="storyLi">
                  <div className="storyLiBox">
                    <img
                      alt="sorry"
                      className="circle"
                      src="./images/lukas.jpg"
                    />
                    <div>
                      <p>ohynul</p>
                      <p>30분 전</p>
                    </div>
                  </div>
                </li>
                <li className="storyLi">
                  <div className="storyLiBox">
                    <img
                      alt="sorry"
                      className="circle"
                      src="./images/lukas.jpg"
                    />
                    <div>
                      <p>alexis</p>
                      <p>2시간 전</p>
                    </div>
                  </div>
                </li>
                <li className="storyLi">
                  <div className="storyLiBox">
                    <img
                      alt="sorry"
                      className="circle"
                      src="./images/lukas.jpg"
                    />
                    <div>
                      <p>alexhynul</p>
                      <p>1시간 전</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="recommentDiv">
          <div className="storyAll">
            <span>회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
        </div>
        <ul className="recommendUl ulStyle">
          <li>
            <div className="storyLiBox">
              <img alt="sorry" src="./images/duncan.jpg" />
              <div>
                <p>bowerbird_sym</p>
                <p>회원님을 팔로우합니다.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="storyLiBox">
              <img alt="sorry" src="./images/duncan.jpg" />
              <div>
                <p>bower_sym</p>
                <p>회원님을 팔로우합니다.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="storyLiBox">
              <img alt="sorry" src="./images/duncan.jpg" />
              <div>
                <p>bird_sym</p>
                <p>회원님을 팔로우합니다.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="storyLiBox">
              <img alt="sorry" src="./images/duncan.jpg" />
              <div>
                <p>bobird_sym</p>
                <p>회원님을 팔로우합니다.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};
export default Home;
