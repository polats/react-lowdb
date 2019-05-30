import { Component } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

class ComponentWithReactLowdb extends Component {

    // variables available to deriving class
    db = db;
    dbName = "";

    constructor(props) {
      super(props);

      // initialize lowdb with default object if none found
      var defaultDBFields = props.defaultDBFields ? props.defaultDBFields : [];
      var dbName = props.dbName ? props.dbName : "react-lowdb";

      this.dbName = dbName;

      var json = { };
      json[dbName] = defaultDBFields;

      db.defaults(json).write();
    }

    resetStateToDefault() {
      db.unset(this.dbName).write();
      return true;
    }

    async loadStateFromDB() {
      var dbJson = db.getState();
      await this.setState({
        ...dbJson
      })
    }

    componentDidMount() {
      this.loadStateFromDB();
    }

    render() {
      return null;
    }
}



export default ComponentWithReactLowdb;
