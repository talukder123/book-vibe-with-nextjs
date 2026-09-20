import Image from 'next/image';
import React from 'react';
import { IBook } from '../types/book.type';
import Link from 'next/link';

interface IBookProps {
    book: IBook;
}

const BookCard = ({ book }: IBookProps) => {
    return (
        <div>
            <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">

                {/* Image */}
                <div className="relative flex h-72 items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={220}
                        height={320}
                        className="h-full w-auto rounded-lg object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
                        {book.category}
                    </span>

                    {/* Rating */}
                    <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur">
                        ⭐ {book.rating}
                    </span>
                </div>

                {/* Content */}
                <div className="p-5">

                    {/* Title */}
                    <h2 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors duration-200 group-hover:text-green-700">
                        {book.bookName}
                    </h2>

                    {/* Author */}
                    <p className="mt-1 text-sm text-gray-500">
                        By{" "}
                        <span className="font-medium text-gray-700">
                            {book.author}
                        </span>
                    </p>

                    {/* Review */}
                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                        {book.review}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {book.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-gray-100" />

                    {/* Info */}
                    <div className="grid grid-cols-3 gap-2 text-center">

                        <div>
                            <p className="text-xs text-gray-400">Pages</p>
                            <p className="mt-1 text-sm font-bold text-gray-800">
                                {book.totalPages}
                            </p>
                        </div>

                        <div className="border-x border-gray-100">
                            <p className="text-xs text-gray-400">Published</p>
                            <p className="mt-1 text-sm font-bold text-gray-800">
                                {book.yearOfPublishing}
                            </p>
                        </div>

                        <div className="min-w-0">
                            <p className="text-xs text-gray-400">Publisher</p>
                            <p className="mt-1 truncate text-sm font-bold text-gray-800">
                                {book.publisher}
                            </p>
                        </div>

                    </div>

                    {/* Button */}
                    <Link href={`/books/${book.bookId}`}>
                    <button className="mt-5 w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-[0.98]">
                        View Details
                    </button>
                    </Link>
                    

                </div>
            </div>
        </div>
    );
};

export default BookCard;