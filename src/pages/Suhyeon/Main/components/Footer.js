import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="info">
      {FOOTER_LISTS.map(footer_list => (
        <span key={footer_list.id} className="footer_lists">
          {footer_list.text}·
        </span>
      ))}

      <p className="watermark">Ⓒ 2019 INSTAGRAM</p>
    </footer>
  );
}

const FOOTER_LISTS = [
  { id: 1, text: '소개' },
  { id: 2, text: '도움말' },
  { id: 3, text: '홍보 센터' },
  { id: 4, text: 'API' },
  { id: 5, text: '채용 정보' },
  { id: 6, text: '개인정보처리방침' },
  { id: 7, text: '약관' },
  { id: 8, text: '위치' },
  { id: 9, text: '인기 계정' },
  { id: 10, text: '해시태그' },
  { id: 11, text: '언어' },
];

export default Footer;
