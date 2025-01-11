

// pages/index.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [ 
    {
      name: "John Doe",
      title: "CEO and Founder",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
      // replace with your image path
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
    },
    {
      name: "Sam Wilson",
      title: "Designer",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
    },

    {
      name: "John Doe",
      title: "CEO and Founder",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
      // replace with your image path
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
    },
    {
      name: "Sam Wilson",
      title: "Designer",
      review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint, pariatur voluptate dolorem culpa optio incidunt accusamus voluptas sit id est neque possimus sunt laboriosam nesciunt vero delectus itaque quo.",
    },

  ];

  return (
    <section className="py-12">
      <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
        <h2 className=" text-2xl md:text-4xl font-bold text-center mb-8 text-yellow-500 italic">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
      
              <h3 className="text-xl font-semibold text-blue-600 italic">{testimonial.name}</h3>
              <p className="text-lg text-yellow-500">{testimonial.title}</p>
              <p className="mt-4  text-gray-600">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <Testimonials />
    </div>
  );
}
