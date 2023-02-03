import React from 'react';

function SearchIdList({ searchIds }) {
  return (
    <ul className="searchIdContainer">
      {searchIds.map(({ userid, useremail, username }) => (
        <li className="searchIdImg" key={userid}>
          <p className="searchUserImg">{username}</p>
          <p className="searchId">{useremail}</p>
        </li>
      ))}
    </ul>
  );
}

export default SearchIdList;
