import React from 'react';
import Hero from '@/components/Hero';
import CardProduct from '@/components/CardProduct';

const products = [
  {
    name: 'Product 1',
    description: 'Description for Product 1',
    image: 'https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280', // Ubah sesuai dengan path gambar Anda
    price: 19.99,
  },
  {
    name: 'Product 2',
    description: 'Description for Product 2',
    image: 'https://www.zdnet.com/a/img/resize/ba1b1ab92085d777ab5e313b34c66a94b7aa1236/2023/06/05/79a43eb8-ce38-488c-8cc0-e04699aaca7f/bing.jpg?auto=webp&width=1280', // Ubah sesuai dengan path gambar Anda
    price: 24.99,
  },
  // Tambahkan produk lainnya sesuai kebutuhan
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <CardProduct key={index} product={product} />
          ))}
        </div>
        </div>
      </section>
    </main>
  );
}
