import React, { useState } from 'react';
import FeedContext from './FeedContext';
import CommentArea from './CommentArea';
import './Feed.scss';

function Feed({
  onDelete,
  handleOnKeyPress,
  inputValue,
  onInputComments,
  btnColor,
  btnState,
  addReply,
  comments,
}) {
  const [feedLists, setFeedLists] = useState([]);

  fetch('/data/feedData.json')
    .then(response => response.json())
    .then(data => setFeedLists(data));

  return (
    <>
      {feedLists.map((feedList, id) => {
        return (
          <>
            <FeedContext key={id} feedLists={feedLists} feedList={feedList} />
            <CommentArea
              onDelete={onDelete}
              handleOnKeyPress={handleOnKeyPress}
              inputValue={inputValue}
              onInputComments={onInputComments}
              btnColor={btnColor}
              btnState={btnState}
              addReply={addReply}
              comments={comments}
            />
          </>
        );
      })}
    </>
  );
}
export default Feed;
