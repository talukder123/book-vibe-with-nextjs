'use client';
import React, { useContext } from 'react';
import { IBook } from '../types/book.type';
import { BooksContext } from '@/context/BookContext';
import { toast } from 'react-toastify';


const ReadButton = ({book} : {book : IBook}) => {

 const { readBooks, setReadBooks } = useContext(BooksContext);

    const handleReadButton = () => {
        setReadBooks([...readBooks, book])
        toast.success(`You have added ${book.bookName} to Read List`)
    }

    return (
        <button className="btn btn-primary" onClick={() => handleReadButton()}> Add to Read </button>
    );
};

export default ReadButton;