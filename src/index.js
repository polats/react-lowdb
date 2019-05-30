import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var defaultDBFields = {
  sessionID: "SomeFakeSessionID123456",
  layoutMode: 1
};

var dbName = "componentState";

ReactDOM.render(
  <App
    dbName={dbName}
    defaultDBFields={defaultDBFields}
  />, document.getElementById('root'));
