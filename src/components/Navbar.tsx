'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white p-4 text-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Logo</div>
        <div className="space-x-4 hidden md:flex"> {/* Menyembunyikan navigasi pada layar kecil */}
          <Link className="hover:text-blue-500" href="/">
            Home
          </Link>
          <Link className="hover:text-blue-500" href="/about">
            About
          </Link>
          <div className="relative inline-block text-left">
            <button onClick={toggleDropdown} className="hover:text-blue-500">
              Dropdown
            </button>
            {isDropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Link href="/item1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 1
                  </Link>
                  <Link href="/item2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 2
                  </Link>
                  <Link href="/item3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 3
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="md:hidden"> {/* Tampilan navigasi mobile */}
          <button onClick={toggleDropdown} className="hover:text-blue-500">
            Menu
          </button>
          {isDropdownOpen && (
            <div className="mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Link href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Home
                </Link>
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    About
                </Link>
                <Link href="/item1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 1
                </Link>
                <Link href="/item2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 2
                </Link>
                <Link href="/item3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                    Item 3
                 
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
