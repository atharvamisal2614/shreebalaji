import { FaAward, FaUserCheck, FaClock, FaUsers } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="py-16">
      <div data-aos="fade-up" className="max-w-4xl mx-auto px-5">
        {/* About Us Header */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">About Us</h1>
            <p className="text-gray-600 text-lg">
              Our company and culture are a lot like our product. They're crafted, not cobbled, for a delightful experience.
            </p>
          </div>
          <div>
            <img
              src="/about-us.avif"
              alt="About Us"
              className="rounded-lg  object-cover"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <img
              src="/mission.avif"
              alt="Our Mission"
              className="rounded-lg  object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg">
              We believe not just in growing bigger, but in growing better. Growing better means aligning the success of your own business with the success of your customers. Win-win!
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-4">Our Success Story</h2>
            <p className="text-gray-600 text-lg">
              In 2004, we noticed a major shift in the way people shop and purchase products. Buyers didn&apos;t want to be interrupted by ads; they wanted helpful information.
            </p>
            <p className="text-gray-600 text-lg mt-4">
              Along the way, we expanded beyond marketing into a crafted, not cobbled suite of products to create a frictionless customer experience that buyers expect today.
            </p>
          </div>
          <div>
            <img
              src="/images/success.avif"
              alt="Our Story"
              className="rounded-lg  object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-yellow-500 text-center mb-10">Why We ??</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Top Quality */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <FaAward className="text-yellow-500 text-2xl md:text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-yellow-500 mb-2">Top Quality</h4>
              <p className="text-gray-600">
                We ensure the highest standards in every product and service we offer.
              </p>
            </div>
            {/* Trusted by Many */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <FaUserCheck className="text-yellow-500 text-2xl md:text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-yellow-500 mb-2">Trusted by Many</h4>
              <p className="text-gray-600">
                Our customers trust us for reliability and consistent results.
              </p>
            </div>
            {/* Timely Delivery */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <FaClock className="text-yellow-500 text-2xl md:text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-yellow-500 mb-2">Timely Delivery</h4>
              <p className="text-gray-600">
                We value your time and guarantee prompt delivery every time.
              </p>
            </div>
            {/* Dedicated Team */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <FaUsers className="text-yellow-500 text-2xl md:text-4xl mx-auto mb-4" />
              <h4 className="text-xl font-bold text-yellow-500 mb-2">Dedicated Team</h4>
              <p className="text-gray-600">
                Our passionate team works hard to meet and exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
