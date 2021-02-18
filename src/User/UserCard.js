import React, { Component } from 'react';
import { UserContext } from './UserData';

class UserCard extends Component {
  static contextType = UserContext;

  render() {
    return <div>{this.context.name}</div>;
  }
}

export default UserCard;
