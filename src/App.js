import React from 'react';
import ReactJson from 'react-json-view';
// import withReactLowdb from 'react-lowdb'; // replace './package' with 'react-lowdb'
import ComponentWithReactLowdb from './package';

class App extends ComponentWithReactLowdb {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(obj) {
    this.saveDatabase(obj.updated_src);
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

        <button onClick={() =>
            window.confirm("Are you sure you wish the delete the database?") &&
            this.resetDatabase()
          }>Reset Database</button>
        <p/>

        <ReactJson theme="monokai" src={this.state}
          onAdd={this.handleChange}
          onDelete={this.handleChange}
          onEdit={this.handleChange}
          enableClipboard={false}
        />
      </div>
    );
  }
}

export default App;
