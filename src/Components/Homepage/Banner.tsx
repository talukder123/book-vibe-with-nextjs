import Image from 'next/image';
import React from 'react';
import bannerImg from '@/assets/hero_img.jpg'
import Link from 'next/link';

const Banner = () => {
    return (
        <section className=''>
            <div className="bg-purple-400 grid grid-cols-1 md:grid-cols-2 items-center container mx-auto p-10">
                <div className='space-y-7'>
                    <h2 className='text-4xl font-bold'>
                        Books to freshen up <br /> your book shelf
                    </h2>
                    <Link href="/books">
                    <button className='btn btn-success'>
                        Explore
                    </button>
                    </Link>
                    
                </div>
                <div>
                    <Image className='rounded-4xl' src={bannerImg} alt='img'></Image>
                </div>
            </div>
        </section>

    );
};

export default Banner;