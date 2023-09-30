'use client'
import React from 'react';

type Product = {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
};

const CardProduct = ({ product }: { product: Product }) => {
  const { title, description, image, price, category } = product;
  const truncatedTitle =
    title.length > 35 ? `${title.slice(0, 35)}...` : title;

  const truncatedDescription =
    description.length > 100 ? `${description.slice(0, 100)}...` : description;

  // Format the price as currency (e.g., $19.99)
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:bg-indigo-100 hover:text-indigo-600 transition duration-300 ease-in-out">
      <img src={image} alt={title} className="w-full h-40 md:48 object-cover" />
      <div className="p-4">
        <span className="text-gray-600 text-sm md:text-sm lg:text-md dark:text-white font-semibold">
          {category}
        </span>
        <h2 className="text-sm md:text-md lg:text-lg font-semibold text-gray-800 dark:text-white">
          {truncatedTitle}
        </h2>
        <span className="text-gray-800 text-sm md:text-sm lg:text-md dark:text-white font-semibold">
          {formattedPrice}
        </span>
        <p className="text-gray-500 dark:text-gray-300 hidden sm:hidden md:block text-sm md:text-sm lg:text-sm overflow-ellipsis overflow-hidden whitespace-nowrap">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
