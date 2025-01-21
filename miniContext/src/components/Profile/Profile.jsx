import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);

  if (user && user.username!="") {
    // If user and user.username are truthy (i.e., user is logged in)
    return (
      <div>
        <h1>Profile</h1>
        <h2>Welcome {user.username}</h2>
        {user.username}
      </div>
    );
  } else if(!user || user.username=="") {
    // If there's no user or the username is falsy
    return (
      <div>
        <h1>Profile</h1>
        <h2>You are not logged in</h2>
      </div>
    );
  }
}

export default Profile;
