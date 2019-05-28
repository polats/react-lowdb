import { Component } from 'react';
import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

const adapter = new LocalStorage('db');
const db = low(adapter);

class ComponentWithReactLowdb extends Component {

    // defaultDBFields = {
    //   username: "ziggystardust",
    //   email: "majortom@groundcontrol.com",
    //   planetEarthisBlue: true,
    //   countdown: 10,
    //   tinCan: 3.14
    // }

    defaultDBFields = { }

    constructor(props) {
      super(props);

      // initialize lowdb with default object if none found
      db.defaults(this.defaultDBFields).write();

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
