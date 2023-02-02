import React, { useEffect } from 'react';
import { useState } from 'react';
import './Feed.scss';
import Article from './Article/Article';

export default function Feed({ feed }) {
  const [feedData, setfeedData] = useState([]);

  useEffect(() => {
    fetch('./data/feedList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setfeedData(data);
      });
  }, []);

  return (
    <div className="feed">
      {feedData.map(feed => (
        <Article key={feed.id} feed={feed} />
      ))}
    </div>
  );
}
