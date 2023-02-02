import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import MainRight from './Components/MainRight/MainRight';
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
