import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/*import HeinMain from './pages/Hein/Main/HeinMain';
import HeinLogin from './pages/Hein/Login/HeinLogin';
*/
import SeobinMain from './pages/Seobin/Main/SeobinMain';
import SeobinLogin from './pages/Seobin/Login/SeobinLogin';
import FeedPost from '././pages/Seobin/Main/Feeds/Feeds';
/*
import SoominMain from './pages/Soomin/Main/SoominMain';
import SoominLogin from './pages/Soomin/Login/SoominLogin';
*/
/*
import SuhyeonMain from './pages/Suhyeon/Main/SuhyeonMain';
import SuhyeonLogin from './pages/Suhyeon/Login/SuhyeonLogin';
*/
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/hein-login" element={<HeinLogin />} />
        <Route path="/hein-main" element={<HeinMain />} /> */}
        <Route path="/seobin-login" element={<SeobinLogin />} />
        <Route path="/seobin-main" element={<SeobinMain />} />
        {/* <Route path="/soomin-login" element={<SoominLogin />} />
        <Route path="/soomin-main" element={<SoominMain />} />

        <Route path="/suhyeon-login" element={<SuhyeonLogin />} />
        <Route path="/suhyeon-main" element={<SuhyeonMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
