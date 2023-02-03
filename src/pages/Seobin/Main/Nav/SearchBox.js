import React from 'react';

function SearchBox(props) {
  return (
    <input
      type="search"
      className="navBar-search"
      placeholder="검색"
      onchange={props.handleInput}
    />
  );
}

export default SearchBox;
