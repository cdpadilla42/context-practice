import React, { Component } from 'react';

// make a new context

const MyContext = React.createContext();

// Create a provider component
class MyProvider extends Component {
  state = {
    name: 'wes',
    cool: true,
    age: 100,
  };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          growAYearOlder: () =>
            this.setState({
              age: this.state.age + 1,
            }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const Family = (props) => {
  return (
    <div className="family">
      <Person />
    </div>
  );
};

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
          {(context) => (
            <>
              <p>I'm in the consumer. {context.state.name}</p>
              <p>I'm in the consumer. {context.state.age}</p>
              <button onClick={context.growAYearOlder}>
                <span role="img">🍰</span>
              </button>
            </>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;
