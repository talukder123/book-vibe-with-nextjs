import React, { createContext, ReactNode, useState } from 'react';

const BooksContext = createContext({})

export const BookProvider = ({children}: {children : ReactNode}) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist
    }

    return (
        <div>
            return <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
            
        </div>
    );
};

export default BookProvider;