import Link from 'next/link';
import React from 'react';

const products = [
  { id: 1, name: "Base Valve", image: "/images/base-valve.jpg" },
  { id: 2, name: "Bearing Comet", image: "/images/bearing-comet.jpg" },
  { id: 3, name: "Hand Pump Washer", image: "/images/hand-pump-washer.webp" },
  { id: 4, name: "Head Sheet", image: "/images/head_sheet.jpg" },
  { id: 5, name: "Industrial Valves", image: "/images/industrial-valves.jpg" },
  { id: 6, name: "5 Hole Gaket ", image: "/images/five-hole-gasket.png" },
  // { id: 7, name: "Flexible Drive Shaft", image: "/images/flexible-drive-shaft.webp" },
  // { id: 8, name: "Jack Bolt", image: "images/jackbolt.jpg" },
  // { id: 9, name: "Gasket Kit", image: "/images/gasket-kit.jpg" },
];

export default function Home() {
  return (
    <div data-aos="fade-up" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl md:text-4xl text-yellow-500 font-bold text-center italic mb-6">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md  overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl text-center font-semibold">{product.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
        <Link href={'/gallery'}
         className="  text-yellow-500  hover:text-yellow-600 font-semibold text-lg">
          View More
        </Link>
      </div>
      </div>
      
    </div>
    
  );
}
