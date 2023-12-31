'use client'
import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import CardProduct from '@/components/CardProduct';
import CardProductSkeleton from '@/components/CardProductSkeleton';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]); // Initialize products as an empty array with the correct type
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <main>
      <Hero />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Portfolio
          </h1>
          <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
            voluptatibus
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80")'
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Best website collections
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  Website
                </p>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")'
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Block of Ui kit collections
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  Ui kit
                </p>
              </div>
            </div>
            <div
              className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")'
              }}
            >
              <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                  Ton’s of mobile mockup
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                  Mockups
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-white mb-6">
            Our Products
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {loading ? (
              // Display skeleton placeholders when loading
              Array.from({ length: 12 }).map((_, index) => (
                <CardProductSkeleton key={index} />
              ))
            ) : (
              // Display actual product cards when data is loaded
              products.map((product) => (
                <CardProduct key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>

    </main>
  );
}
