import React from 'react';
import Feed from './Feed';

function FeedList({ userList }) {
  return (
    <div className="cardList">
      {userList.map((user) => (
        <Feed key={user.id} user={user} />
      ))}
    </div>
  );
}

export default FeedList;
