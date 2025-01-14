import Link from 'next/link';
import React from 'react';
const products = [
  { id: 1, name: "Asphalt Paver", image: "/images/asphalt-paver.jpg" },
  { id: 2, name: "Backhoe Loader", image: "/images/backhoe-loader.jpg" },
  { id: 3, name: "Bulldozer", image: "/images/bulldozer.jpg" },
  { id: 4, name: "Compactor", image: "/images/compactor.jpeg" },
  { id: 5, name: "Concrete Mixer", image: "/images/concrete-mixer.jpg" },
  { id: 6, name: "Crane", image: "/images/crane.jpeg" },
];
export default function Home() {
  return (
    <div data-aos="fade-up" className="min-h-screen bg-sky-50 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-3xl text-customOrange font-bold text-center italic mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-sky-50 rounded-lg shadow-md  overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl text-customOrange text-center font-semibold">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <Link href={'/gallery'}
            className="text-customOrange  hover:text-orange-600 font-semibold text-lg">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
