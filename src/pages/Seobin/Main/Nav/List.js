import React from 'react';

const List = userList => {
  return (
    <>
      <span>{userList.name}</span>
      <span>{userList.email}</span>
    </>
  );
};

export default List;
