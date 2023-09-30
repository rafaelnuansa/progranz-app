'use client'

import React from 'react';

// Menentukan tipe data Product
type Product = {
  name: string;
  description: string;
  image: string;
  price: number;
};

// Menggunakan tipe data Product untuk prop product
const CardProduct = ({ product }: { product: Product }) => {
  const { name, description, image, price } = product;

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h2>
        <p className="text-gray-500 dark:text-gray-300">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-800 dark:text-white font-semibold">${price}</span>
          <button
            className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            onClick={() => alert(`Added ${name} to cart`)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
