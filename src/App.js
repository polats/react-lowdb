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

  resetWholeDatabase() {
    const resetState = {}
    this.db.setState(resetState).write();
    return true;
  }


  saveDatabase(json) {
    this.db.setState(json).write();
  }

  render() {
    return (
      <div className="App">
        <h1>react-lowdb demo</h1>
        <p>This component&apos;s state is editable on the&nbsp;
        <a href="https://www.npmjs.com/package/react-json-view">React JSON View</a>
        &nbsp;below.
        </p>

        <p>Changes are saved to LocalStorage as the state changes. You can try
        refreshing the page to see the data being saved.</p>

        <p>The default fields are defined in <strong>props.defaultDBFields</strong>.
        Resetting the database will revert back to these default fields.</p>

        <button onClick={() =>
            window.confirm("This will reset the " + this.dbName + " node to default values.") &&
            (this.resetStateToDefault() && window.location.reload())
          }>Reset react-lowdb ({this.dbName} node)</button>
        <p/>

        <button onClick={() =>
            window.confirm("Are you sure you wish the delete the whole lowdb database?") &&
            (this.resetWholeDatabase() && window.location.reload())
          }>Reset Whole Database</button>
        <p/>

        <ReactJson theme="monokai" src={this.state ? this.state : {}}
          name={false}
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
