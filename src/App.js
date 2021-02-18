import React, { Component } from 'react';
import UserCard from './User/UserCard';
import UserContextProvider from './User/UserContextProvider';

class App extends Component {
  render() {
    return (
      <UserContextProvider>
        <UserCard />
      </UserContextProvider>
    );
  }
}

export default App;
