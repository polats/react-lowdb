# react-lowdb

Save React state on LocalStorage using lowdb

[![Build Status](https://travis-ci.org/polats/react-lowdb.svg?branch=master)](https://travis-ci.org/polats/react-lowdb)
[![dependencies Status](https://david-dm.org/polats/react-lowdb/status.svg)](https://david-dm.org/polats/react-lowdb)
[![devDependencies Status](https://david-dm.org/polats/react-lowdb/dev-status.svg)](https://david-dm.org/polats/react-lowdb?type=dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

# Demo

[![Demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/polats/react-lowdb)

# Installation

```
npm install react-lowdb

```

# Usage
```
import ComponentWithReactLowdb from 'react-lowdb'

class Demo extends ComponentWithReactLowdb {

  // All state changes from Demo will now be saved
  // via ComponentWithReactLowdb's componentDidUpdate.
  //
  // They are loaded back via ComponentWithReactLowdb's
  // componentDidMount.

}
```

# Props

* **defaultDBFields** (Optional) - default values of the DB
* **dbName** (Optional) - specify the name of the node to save in LocalStorage. Defaults to __[constructor.name]-react-lowdb__

# License

MIT © Paul Gadi
