import MENU_LIST from '../../../../uiData';
import './Footer.scss';

const Footer = () => {
  return (
    <ul className="menu">
      {MENU_LIST.map(menuList => {
        return <li key={menuList.id}>{menuList.menuName}</li>;
      })}
    </ul>
  );
};

export default Footer;
