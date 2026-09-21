import Link from 'next/link';
import React from 'react';

const FooterPage = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4 py-12">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="text-2xl font-extrabold text-white"
                        >
                            <span className="text-primary">Book</span> Vibe
                        </Link>

                        <p className="mt-4 max-w-sm text-sm leading-6 text-gray-400">
                            Discover amazing books, explore new stories, and
                            build your personal reading collection with Book Vibe.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-primary transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/books"
                                    className="hover:text-primary transition"
                                >
                                    Books
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/listed-books"
                                    className="hover:text-primary transition"
                                >
                                    Listed Books
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-4 font-bold text-white">
                            Stay Connected
                        </h3>

                        <p className="text-sm text-gray-400">
                            Follow us and stay updated with new books and
                            reading recommendations.
                        </p>

                        <div className="mt-5 flex gap-3">
                            <a
                                href="#"
                                className="btn btn-sm btn-circle btn-ghost bg-gray-800 hover:bg-primary"
                            >
                                F
                            </a>

                            <a
                                href="#"
                                className="btn btn-sm btn-circle btn-ghost bg-gray-800 hover:bg-primary"
                            >
                                X
                            </a>

                            <a
                                href="#"
                                className="btn btn-sm btn-circle btn-ghost bg-gray-800 hover:bg-primary"
                            >
                                in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Book Vibe. All rights reserved. Talukder
                </div>

            </div>
        </footer>
    );
};

export default FooterPage;