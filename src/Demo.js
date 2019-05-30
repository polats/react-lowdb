import React from 'react';
import ReactJson from 'react-json-view';
// import ComponentWithReactLowdb from 'react-lowdb'; // replace './package' with 'react-lowdb'
import ComponentWithReactLowdb from './package';

class Demo extends ComponentWithReactLowdb {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(obj) {
    var newState = obj.updated_src;
    this.setState(newState);
  }

  // resetWholeDatabase() {
  //   const resetState = {}
  //   this.db.setState(resetState).write();
  //   return true;
  // }

  render() {
    return (
      <div className="App">
        <h1>react-lowdb demo</h1>

        <p>This Demo component is subclassed from <strong>ComponentWithReactLowdb</strong>,
        which saves any changes in its state to LocalStorage via lowdb.</p>

        <p>The state is saved under the <strong>{this.dbName}</strong> node in the database.</p>

        <p>The default fields are defined in <strong>props.defaultDBFields</strong>.
        Resetting the database will revert back to these default fields.</p>

        <p>This component&apos;s state is editable on the&nbsp;
        <a href="https://www.npmjs.com/package/react-json-view">React JSON View</a>
        &nbsp;below. Changes are saved to LocalStorage as the state changes. You can try
        refreshing the page to see the data being saved.
        </p>

        <h3>Component State</h3>
        <ReactJson theme="monokai" src={this.state ? this.state : {}}
          name={false}
          onAdd={this.handleChange}
          onDelete={this.handleChange}
          onEdit={this.handleChange}
          enableClipboard={false}
        />

        <p/>
        <button onClick={() =>
            window.confirm("This will reset " + this.dbName + " to default values.") &&
            (this.resetStateToDefault() && window.location.reload())
          }>Reset react-lowdb</button>
        <p/>

      </div>


    );
  }
}

export default Demo;
