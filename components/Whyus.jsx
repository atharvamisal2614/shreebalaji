import { FaAward, FaThumbsUp, FaClock, FaUsers } from "react-icons/fa";

export default function WhyUs() {
  return (
    <div data-aos="fade-up" className="bg-sky-50 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Heading and Paragraph */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-yellow-500 mb-4">Why Us?</h2>
          <p className="text-lg text-gray-700">
         Shree Balaji Exim stands as more than just another business: It stands as an embodiment of quality, innovation, and providing domestic and international trade solutions. Headquartered in India, this global manufacturer delivers cutting-edge construction machinery explicitly designed to meet infrastructure project demands worldwide.

          </p>
        </div>

        {/* Right Side: Cards */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaAward className="text-blue-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Top Quality</h3>
              <p className="text-gray-600">
                Delivering unmatched quality in every aspect of our services.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaThumbsUp className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Trusted by Many</h3>
              <p className="text-gray-600">
                Thousands of satisfied customers choose us repeatedly.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaClock className="text-blue-500 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Timely Delivery</h3>
              <p className="text-gray-600">
                Ensuring every project is delivered on time, every time.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex items-center bg-white p-6 rounded-lg shadow-md">
            <FaUsers className="text-blue-600 text-3xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Dedicated Team</h3>
              <p className="text-gray-600">
                A passionate team committed to your success and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
