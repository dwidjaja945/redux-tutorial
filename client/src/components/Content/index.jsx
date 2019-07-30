import React from 'react';
import Book from './Book';

import './Content.css';

function Contents(props) {
    const renderBooks = () => {
        const { books } = props;
        return books.map((item, index) => {
            const { id, book } = item;
            return (<Book book={ book } key={ id } />);
        });
    };

    return (
        <div className='content'>
            { renderBooks() }
        </div>
    );
}

export default Contents;