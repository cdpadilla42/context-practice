import React, { Component } from 'react';
import { UserContext, cdpadilla } from './UserData';

class UserContextProvider extends Component {
  state = {
    user: cdpadilla,
  };

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
