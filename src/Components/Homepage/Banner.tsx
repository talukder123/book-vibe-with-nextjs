import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'
import Link from 'next/link';

const Banner = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 rounded-3xl bg-purple-100 p-8 md:p-12 overflow-hidden">

                    <div className="space-y-7">
                        <p className="font-semibold text-purple-600">
                            Welcome to Book Vibe
                        </p>

                        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                            Books to freshen up
                            <br />
                            your bookshelf
                        </h2>

                        <p className="max-w-lg text-gray-600">
                            Discover your next favorite book and build your personal
                            collection with Book Vibe.
                        </p>

                        <Link href="/books">
                            <button className="btn btn-primary rounded-full px-7">
                                Explore Books
                            </button>
                        </Link>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <Image
                            className="w-full max-w-md rounded-3xl object-cover shadow-lg"
                            src={bannerImg}
                            alt="Books"
                        />
                    </div>

                </div>
            </div>
        </section>

    );
};

export default Banner;