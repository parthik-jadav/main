import React from 'react';

const User = () => {
  let user = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
          <h1>wellcome Back : {user.name}</h1>
          <h3>your password is : {user.password}</h3>
    </div>
  );
}

export default User;
