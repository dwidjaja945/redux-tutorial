import React, { Component } from 'react';
import './App.css';
import Data from '../data.js';

import Search from '../components/Search';
import Content from '../components/Content';

const params = ['title', 'author', 'year', 'publisher'];

const App = props => {

  const [searchText, setSearchText] = React.useState('');
  const [searchParam, setParam] = React.useState('title');
  const [filteredBooks, setFilteredBooks] = React.useState(Data.data);

  React.useEffect(() => {
    if (!searchText) {
      setFilteredBooks(Data.data);
    } else {
      const filtered = Data.data.filter(item => {
        return item.book[searchParam].includes(searchText);
      });
      setFilteredBooks(filtered);
    }

    return () => {
      setFilteredBooks(Data.data);
    };

  }, [searchText, searchParam]);

  return (
    <div className="App">
      <div className="header">
        header
        </div>
      <Search params={ { params, setParam } } setSearchText={ setSearchText } searchText={ searchText } />
      <Content books={ filteredBooks } />
    </div>
  );
}

export default App;