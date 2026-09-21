import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-base-100/95 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">


        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-2xl z-50 mt-3 w-52 p-3 shadow-lg border border-base-200"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/books">Books</Link>
              </li>
              <li>
                <Link href="/listed-books">Listed Books</Link>
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="btn btn-ghost text-xl font-extrabold tracking-tight"
          >
            <span className="text-primary">Book</span>
            <span>Vibe</span>
          </Link>
        </div>


        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <li>
              <Link
                href="/"
                className="rounded-full px-5 hover:bg-primary/10 hover:text-primary"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/books"
                className="rounded-full px-5 hover:bg-primary/10 hover:text-primary"
              >
                Books
              </Link>
            </li>

            <li>
              <Link
                href="/listed-books"
                className="rounded-full px-5 hover:bg-primary/10 hover:text-primary"
              >
                Listed Books
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2">

          <button className="btn btn-ghost hidden sm:flex">
            Sign In
          </button>

          <button className="btn btn-primary rounded-full px-6">
            Sign Up
          </button>

        </div>

      </div>
    </div>
  );
};

export default Navbar;