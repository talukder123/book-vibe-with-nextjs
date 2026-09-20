import React from "react";
import BookCard from "@/Components/Shared/BookCard";
import { IBook } from "@/Components/types/book.type";


const BooksData = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();

    return data;
};

const BooksPage = async () => {
    const books = await BooksData();

    return (

        <div>
            <h2 className=" mt-30 text-4xl text-blue-800 font-bold flex items-center justify-center">Exploare All Books</h2>
            <div className="container mx-auto grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book:IBook) => (
                <BookCard key={book.bookId} book={book} />
            ))}
        </div>
        </div>
        
    );
};

export default BooksPage;