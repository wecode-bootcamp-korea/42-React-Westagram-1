import React from 'react';
import { FOOTER_INFO } from '../../../Data';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <ul className="info">
        {FOOTER_INFO.map(infoList => {
          return (
            <li className="info-list" key={infoList.id}>
              {infoList.infoName}
            </li>
          );
        })}
      </ul>
      <address className="address">&copy; 2023 INSTAGRAM</address>
    </footer>
  );
}
