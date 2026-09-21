'use client';
import BookCard from '@/Components/Shared/BookCard';
import { IBook } from '@/Components/types/book.type';
import { BooksContext } from '@/context/BookContext';
import React, { useContext, useState } from 'react';

const listBookPage = () => {

    const { readBooks, wishlist } = useContext(BooksContext)
    const [sortby, setSortby] = useState<
        "Rating" | "Number of pages" | "Published year"
    >("Rating");


    const sortfn = (books: IBook[]) => {
        const sortedBooks = [...books]

        if (sortby === "Rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortby === "Number of pages") {
            sortedBooks.sort((a, b) => a.totalPages - b.totalPages);
        } else if (sortby === "Published year") {
            sortedBooks.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }

        return sortedBooks
    }


    const sortedRead = sortfn(readBooks);
    const sortedWish = sortfn(wishlist);

    return (
        <div className='container mx-auto py-15'>
            <h2 className='bg-amber-200 font-bold p-5 py-5 mb-5 rounded-3xl text-center'>Listed Books</h2>


            <div className='text-center'>
                <select
                    value={sortby}
                    className="select select-primary mb-7"
                    onChange={(e) => setSortby(e.target.value as "Rating" | "Number of pages" | "Published year")}>
                    <option disabled={true}>Sort by</option>
                    <option>Rating</option>
                    <option>Number of pages</option>
                    <option>Published year</option>
                </select>
            </div>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab text-blue-700 font-bold" aria-label={`Read Book (${sortedRead.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedRead.length > 0
                            ? sortedRead.map((book: IBook) => {
                                return (
                                    <BookCard
                                        key={book.bookId}
                                        book={book}
                                    />
                                );
                            })
                            : <span className="text-center font-bold text-gray-700">
                                no book selected
                            </span>
                    }
                </div>

                <input type="radio" name="my_tabs_3" className="tab text-pink-500 font-bold" aria-label={`Wishlist (${sortedWish.length})`} />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWish.length > 0 ? sortedWish.map((book: IBook) => {
                            return <BookCard key={book.bookId} book={book}></BookCard>
                        }) : <span className='text-center font-bold text-gray-700'>no book selected</span>
                    }
                </div>
            </div>






        </div>
    );
};

export default listBookPage;