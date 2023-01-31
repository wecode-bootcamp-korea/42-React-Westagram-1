import React from 'react';
import Nav from './components/Nav';
import Article from './components/Article';
import MyProfileBox from './components/MyProfileBox';
import StoryBox from './components/StoryBox';
import RecommendBox from './components/RecommendBox';
import Footer from './components/Footer';
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
        <Footer />
      </aside>
    </main>
  </div>
);

export default Main;
