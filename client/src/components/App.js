import React, { Component } from 'react';
import './App.css';
import Data from '../data.js';

import Search from '../components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          header
        </div>
        <Search />
      </div>
    );
  }
}

export default App;