import React from 'react';
import './Book.css';

function Book(props) {
    return (
        <div className='book'>
            <div className='book_title'>book</div>
            <div className='book_author'>author</div>
            <div className='book_year'>year</div>
        </div>
    );
}

export default Book;