import { IBook } from '@/Components/types/book.type';
import Image from 'next/image';
import React from 'react';

interface IbookDetailParamsProps {
    params: Promise<{
        id: string
    }>;
}

const BooksData = async () => {
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();

    return data;
};

const bookDetailPage = async ({ params }: IbookDetailParamsProps) => {

    const allBooks = await BooksData();
    const { id } = await params;

    const book = allBooks.find((book: IBook) => String(book.bookId) === String(id)) as IBook;


    return (
        <div>

            <div className="container mx-auto card card-side bg-base-100 shadow-md border border-base-200">
                {/* Book Image */}
                <figure className="w-1/3 bg-base-200 p-4">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={500}
                        height={6000}
                        unoptimized
                        className="h-full w-full rounded-lg object-cover"
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body w-2/3">

                    {/* Title */}
                    <h2 className="card-title text-2xl">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="text-sm text-base-content/70">
                        By <span className="font-semibold">{book.author}</span>
                    </p>

                    {/* Review */}
                    <p className="text-sm leading-6 mt-2">
                        {book.review}
                    </p>

                    {/* Book Information */}
                    <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
                        <div>
                            <span className="text-base-content/60">Category</span>
                            <p className="font-semibold">{book.category}</p>
                        </div>

                        <div>
                            <span className="text-base-content/60">Rating</span>
                            <p className="font-semibold">⭐ {book.rating}</p>
                        </div>

                        <div>
                            <span className="text-base-content/60">Pages</span>
                            <p className="font-semibold">{book.totalPages}</p>
                        </div>

                        <div>
                            <span className="text-base-content/60">Published</span>
                            <p className="font-semibold">{book.yearOfPublishing}</p>
                        </div>

                        <div className="col-span-2">
                            <span className="text-base-content/60">Publisher</span>
                            <p className="font-semibold">{book.publisher}</p>
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                        {book.tags.map((tag) => (
                            <span key={tag} className="badge badge-success badge-outline">
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Action */}
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">
                            READ
                        </button>
                        <button className="btn btn-primary">
                            Wishlist
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default bookDetailPage;