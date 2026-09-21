'use client';
import React, { useContext } from 'react';
import { IBook } from '../types/book.type';
import { BooksContext } from '@/context/BookContext';
import { toast } from 'react-toastify';


const WishListButton = ({book} : {book : IBook}) => {

 const { wishlist, setWishlist } = useContext(BooksContext);

    const handleAddToWishButton = () => {
        setWishlist([...wishlist, book])
        toast.success(`You have added ${book.bookName} to Wishlist`)
    }

    return (
        <button className="btn btn-primary" onClick={() => handleAddToWishButton()}> Wishlist </button>
    );
};

export default WishListButton;