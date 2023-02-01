import React, { useState, useEffect } from 'react';
import FeedContext from './FeedContext';
import CommentArea from './CommentArea';
import './Feed.scss';

function Feed() {
  const [feedLists, setFeedLists] = useState([]);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(response => response.json())
      .then(data => setFeedLists(data));
  }, []);

  return (
    <>
      {feedLists.map((feedList, id) => {
        return (
          <>
            <FeedContext key={id} feedLists={feedLists} feedList={feedList} />
            <CommentArea />
          </>
        );
      })}
    </>
  );
}
export default Feed;
