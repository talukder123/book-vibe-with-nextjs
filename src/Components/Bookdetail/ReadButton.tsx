'use client';
import React, { useContext } from 'react';
import { IBook } from '../types/book.type';
import { BooksContext } from '@/context/BookContext';


const ReadButton = ({book} : {book : IBook}) => {

 const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadButton = () => {
        setReadBooks([...readBooks, book])
    }

    return (
        <button className="btn btn-primary" onClick={() => handleReadButton()}> READ </button>
    );
};

export default ReadButton;