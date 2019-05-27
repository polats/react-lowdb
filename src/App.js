import React, { Component } from 'react';

// import withReactLowdb from 'react-lowdb'; // use this when installed with npm
import withReactLowdb from './package';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
      </div>
    );
  }
}

export default withReactLowdb(App);
