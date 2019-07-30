import React from 'react';
import Book from './Book';
import './Content.css';

function Contents(props) {
    return (
        <div className='content'>
            { Array.from({ length: 5 }, item => <Book />) }
        </div>
    );
}

export default Contents;