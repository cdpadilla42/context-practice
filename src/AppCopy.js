import React, { Component } from 'react';

// Make a new Context

const ChrisContext = React.createContext();

// Create a provider component

class ChrisProvider extends Component {
  state = {
    name: 'Chris',
    cool: true,
    age: 28,
  };

  render() {
    return (
      <ChrisContext.Provider
        value={{
          state: this.state,
          growOlder: () => {
            this.setState({
              age: this.state.age + 1,
            });
          },
        }}
      >
        {this.props.children}
      </ChrisContext.Provider>
    );
  }
}

class Family extends Component {
  render() {
    return (
      <ChrisContext.Consumer>
        {(context) => (
          <>
            <h1>{context.state.name}</h1>
            <p>{context.state.age}</p>
            <button onClick={context.growOlder}>👵🏻</button>
          </>
        )}
      </ChrisContext.Consumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <ChrisProvider>
        <Family />
      </ChrisProvider>
    );
  }
}

export default App;
