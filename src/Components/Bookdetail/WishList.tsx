'use client';
import React, { useContext } from 'react';
import { IBook } from '../types/book.type';
import { BooksContext } from '@/context/BookContext';


const WishListButton = ({book} : {book : IBook}) => {

 const { wishlist, setWishlist } = useContext(BooksContext);

    const handleAddToWishButton = () => {
        setWishlist([...wishlist, book])
        console.log("wii");
    }

    return (
        <button className="btn btn-primary" onClick={() => handleAddToWishButton()}> READ </button>
    );
};

export default WishListButton;