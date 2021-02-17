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

const Person = (context) => (
  <>
    <h1>{context.state.name}</h1>
    <p>{context.state.age}</p>
    <button onClick={context.growOlder}>👵🏻</button>
  </>
);

class Family extends Component {
  render() {
    return <ChrisContext.Consumer>{Person}</ChrisContext.Consumer>;
  }
}
class CoolDispay extends Component {
  static contextType = ChrisContext;
  isCool() {
    if (this.context.state.cool && this.context.state.age < 30)
      return 'YEEEEAAAAH!';
    return 'naw';
  }

  render() {
    console.log(this.context);
    return <p>Is it cool? {this.isCool()}</p>;
  }
}

// CoolDispay.contextType = ChrisContext;

class App extends Component {
  render() {
    return (
      <ChrisProvider>
        <Family />
        <CoolDispay />
      </ChrisProvider>
    );
  }
}

export default App;
