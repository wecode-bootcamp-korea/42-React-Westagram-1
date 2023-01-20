import React from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import MyProfileBox from './components/MyProfileBox';
import StoryBox from './components/StoryBox';
import RecommendBox from './components/RecommendBox';
import './SuhyeonMain.scss';

const Main = () => (
  <div className="main">
    <Nav />

    <main>
      <section>
        <Article />
      </section>

      <aside className="mobile">
        <MyProfileBox />
        <StoryBox />
        <RecommendBox />
        <footer className="info">
          <p className="links">Instagram 정보 ꞏ 지원 ꞏ 홍보 센터 ꞏ API ꞏ </p>
          <p className="links">채용 정보 ꞏ 개인정보처리방침 ꞏ 약관 ꞏ</p>
          <p className="links">디렉터리 ꞏ 프로필 ꞏ 해시태그 ꞏ 언어</p>
          <p className="watermark">Ⓒ 2019 INSTAGRAM</p>
        </footer>
      </aside>
    </main>
  </div>
);

export default Main;
