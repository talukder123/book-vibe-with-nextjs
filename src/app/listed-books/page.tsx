'use client';
import BookCard from '@/Components/Shared/BookCard';
import { IBook } from '@/Components/types/book.type';
import { BooksContext } from '@/context/BookContext';
import React, { useContext } from 'react';

const listBookPage = () => {

    const { readBooks, wishlist } = useContext(BooksContext)

    return (
        <div className='container mx-auto py-15'>
            <h2 className='bg-amber-200 font-bold p-5 py-5 mb-5 rounded-3xl text-center'>Listed Books</h2>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab text-blue-700 font-bold" aria-label={`Read Book (${readBooks.length})`} defaultChecked/>
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        readBooks.length > 0 ? readBooks.map((book:IBook) => {
                            return 
                            <BookCard key={book.bookId} book={book}></BookCard>
                        }) : <span className='text-center font-bold text-gray-700'>no book selected</span>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab text-pink-500 font-bold" aria-label={`Wishlist (${wishlist.length})`}  />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        wishlist.length > 0 ? wishlist.map((book:IBook) => {
                            return <BookCard key={book.bookId} book={book}></BookCard>
                        }) : <span className='text-center font-bold text-gray-700'>no book selected</span>
                    }
                </div>
            </div>






        </div>
    );
};

export default listBookPage;