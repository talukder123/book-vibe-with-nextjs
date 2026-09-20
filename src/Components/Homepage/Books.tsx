import React from "react";
import BookCard from "../Shared/BookCard";
import { IBook } from "../types/book.type";

const BooksData = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();

    return data;
};

const BooksPage = async () => {
    const books = await BooksData();

    return (
        <div className="container mx-auto grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.slice(0, 4).map((book:IBook) => (
                <BookCard key={book.bookId} book={book} />
            ))}
        </div>
    );
};

export default BooksPage;