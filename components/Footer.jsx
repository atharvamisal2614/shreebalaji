import Link from "next/link";
export default function Footer() {
  return (
    <footer data-aos="fade-up"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/machine-2.png)',
        // height: '450px', // Increased height for better visibility
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div data-aos="fade-up" className="relative z-10 text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="w-28 mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm md:text-base">
              We are committed to delivering the best services to our customers.
              Discover more about our company and connect with us today!
            </p>
          </div>

          {/* Email Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p>info@yourcompany.com</p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Address</h3>
            <p>801, IIEIM, World Trade Center</p>
            <p>Kharadi, Pune</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <Link href="tel:917499837102">
              74998 37102
            </Link>
         
          </div>

          {/* Social Media Section */}
          {/* <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-blue-600">Twitter</a>
              <a href="#" className="hover:text-blue-600">Instagram</a>
            </div>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div  className="mt-10 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Shree Balaji Exim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
