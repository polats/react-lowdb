import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

var defaultDBFields = {
  sessionID: "SomeFakeSessionID123456",
  layoutMode: 1
};

ReactDOM.render(
  <Demo
    defaultDBFields={defaultDBFields}
  />, document.getElementById('root'));
