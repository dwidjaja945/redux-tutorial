import React from 'react';

import './Search.css';

function Search(props) {

    const { searchText, setSearchText, params } = props;

    return (
        <div className='search'>
            <div className='search_container'>
                Search Container:
            </div>
            <input type="text" value={ searchText } onChange={ event => setSearchText(event.target.value) } />

            { params.params.map(item => (
                <button onClick={ () => params.setParam(item) }>{ item }</button>
            )) }

        </div>
    );
}

export default Search;