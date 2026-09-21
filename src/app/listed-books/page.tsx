'use client';
import { BooksContext } from '@/context/BookContext';
import React, { useContext } from 'react';

const listBookPage = () => {

    const {readBooks, setWishlist} = useContext(BooksContext)

    return (
        <div>
            Listed Books: {readBooks.length}
        </div>
    );
};

export default listBookPage;