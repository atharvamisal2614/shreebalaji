import Image from "next/image";
export default function AboutUsSection() {
  return (
    <section className="bg-sky-50 py-16">
      <div className="max-w-4xl mx-auto px-5">
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-3xl italic font-serif text-customOrange mb-4">About Us</h1>
            <p className="text-gray-600 text-justify text-lg ">
              Rammdas Narayanrao Banginwar is a pioneering leader and a notable name in the world
              of exports and imports.Over the last 25 years, he has gained experience in
              international trade. Rammdas has revolutionized how companies has approach
              international markets.
              As chief executive officer of Shree Balaji EXIM, a world-renowned company
              specialising in heavy construction equipment, Rammdas has established a tradition of innovation and excellence.
            </p>
          </div>
          <div>
            <img
              src="/ramdas-sir.png"
              alt="About Us"
              className="rounded-lg  object-cover"
            />
          </div>
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <img
              src="/global-reach.webp"
              alt="Our Mission"
              className="rounded-lg h-64 w-full md:h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl italic font-serif text-customOrange mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg text-justify">
            Our mission is to expand our export business to reach over 251 countries, 
            fostering strong global connections and delivering quality products that 
            cater to diverse markets. We are committed to building long-lasting 
            relationships with international partners, ensuring exceptional 
            service, and adhering to the highest standards of excellence. By 
            leveraging innovation, efficiency, and a customer-centric approach, 
            we aim to position ourselves as a trusted and reliable name in the 
            global export industry, contributing to economic growth and cross-border collaboration.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h2 className="text-2xl md:text-3xl text-customOrange mb-4 italic font-serif">Our Success Story</h2>
            <p className="text-gray-600 text-justify text-lg">
            Our journey of success began in 2001 with the establishment of our operations in Sri Lanka and the UAE, 
            followed by our expansion into China in 2005. Over the years, our unwavering dedication and commitment
            to excellence have driven remarkable growth. Today, we proudly operate in six key countries: USA, Netherland, Tunisia, China, Singapore, and Vietnam. 
            Through perseverance, innovation, and a customer-focused approach, we have extended our reach to over 100+ 
            countries by 2024. This milestone reflects our passion for delivering quality and building lasting partnerships
            across the globe. 
            </p>
          </div>
          <div>
            <Image
              src="/success.avif"
              alt="Our Story"
              width={1000} height={1000}
              className="rounded-lg w-[100%] md:w-96 md:h-96 h-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
