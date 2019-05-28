import { Component } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

class ComponentWithReactLowdb extends Component {

    constructor(props) {
      super(props);

      var defaultDBFields = { }

      // initialize lowdb with default object if none found
      db.defaults(defaultDBFields).write();

    }

    resetDatabase() {
      const resetState = {}
      db.setState(resetState).write();
      window.location.reload();
    }

    saveDatabase(json) {
      db.setState(json).write();
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
