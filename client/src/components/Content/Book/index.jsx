import React from 'react';
import './Book.css';

function Book(props) {
    const { book } = props;
    return (
        <div className='book'>
            <div className='book_author'>{ book.author }</div>
            <div className='book_title'>{ book.title }</div>
            <div className='book_year'>{ book.year }</div>
            <div className='book_publisher'>{ book.publisher }</div>
        </div>
    );
}

export default Book;