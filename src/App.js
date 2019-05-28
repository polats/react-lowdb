import React, { Component } from 'react';
import ReactJson from 'react-json-view';
// import withReactLowdb from 'react-lowdb'; // replace './package' with 'react-lowdb'
import withReactLowdb from './package';

class App extends Component {

  defaultDBFields = {
    selectedButton: null
  }

  constructor(props) {
    super(props);

    // initialize lowdb with default object if none found
    props.db.defaults(this.defaultDBFields).write();
  }

  componentDidMount() {
    this.loadStateFromDB();
  }

  loadStateFromDB() {
    var dbJson = this.props.db.getState();
    this.setState({
      ...dbJson
    })
  }

  render() {
    return (
      <div className="App">
        <h1>react-lowdb demo</h1>
        <p>This component&apos;s state is edittable on the&nbsp;
        <a href="https://www.npmjs.com/package/react-json-view">React JSON View</a>
        &nbsp;below.
        </p>
        <p>Changes are saved to LocalStorage as the state changes. You can try
        refreshing the page to see the data being saved.</p>
        <ReactJson theme="monokai" src={this.state}/>
      </div>
    );
  }
}

export default withReactLowdb(App);
