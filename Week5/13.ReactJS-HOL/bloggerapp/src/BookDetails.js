 
import React from 'react';
import { books } from './data';

function BookDetails() {
    const bookdet = books.map((book) =>
        <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
        </div>
    );
    return (
        <div className="st2">
            <h1>Book Details</h1>
            {bookdet}
        </div>
    );
}

export default BookDetails;