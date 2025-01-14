import Link from "next/link";
export default function Footer() {
  return (
    <footer data-aos="fade-up"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/machine-2.png)',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div data-aos="fade-up" className="relative z-10 text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
      
          <div className="md:col-span-2">
            {/* <img
              src="/logo.png"
              alt="Company Logo"
              className="w-28 mx-auto md:mx-0 mb-4"
            /> */}

            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-blue-600 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl font-bold">Logo</span>
                </a>

            <p className="text-sm md:text-base">
              We are committed to delivering the best services to our customers.
              Discover more about our company and connect with us today!
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p>info@yourcompany.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p>801, IIEIM, World Trade Center</p>
            <p>Kharadi, Pune</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <Link href="tel:917499837102">
              74998 37102
            </Link>         
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-blue-600">Twitter</a>
              <a href="#" className="hover:text-blue-600">Instagram</a>
            </div>
          </div>
        </div>
        <div  className="mt-10 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shree Balaji Exim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
