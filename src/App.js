import React, { Component } from 'react';
import withReactLowdb from './package'; //  import withReactLowdb from 'react-lowdb';

class App extends Component {
  componentDidMount() {
    console.log(this.props.db);
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
