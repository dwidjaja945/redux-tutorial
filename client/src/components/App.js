import React, { Component } from 'react';
import './App.css';
import Data from '../data.js';

import Search from '../components/Search';
import Content from '../components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          header
        </div>
        <Search />
        <Content />
      </div>
    );
  }
}

export default App;