import Banner from '@/Components/Homepage/Banner';
import BooksPage from '@/Components/Homepage/Books';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <BooksPage></BooksPage>
    </div>
  );
};

export default page;