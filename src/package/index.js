import React, { Component } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

function withReactLowdb(WrappedComponent) {
  return class extends Component {
    render() {
      return (
        <WrappedComponent db={db} {...this.props} />
      );
    }
  };
}



export default withReactLowdb;
