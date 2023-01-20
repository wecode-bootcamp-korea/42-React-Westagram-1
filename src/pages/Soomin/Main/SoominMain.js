import React from 'react';
import Nav from './Nav/Nav';
import Feed from './Feed/Feed';
import MainRight from './MainRight/MainRight';

import './SoominMain.scss';

export default function SoominMain() {
  return (
    <div className="soominMain">
      <Nav />
      <main className="container-box">
        <Feed />
        <MainRight />
      </main>
    </div>
  );
}
