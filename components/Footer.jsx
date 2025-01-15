import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer data-aos="fade-up"
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/bulldozer.jpg)',
      
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div data-aos="fade-up" className="relative z-10 text-white py-10 px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
      
          <div className="md:col-span-2">
            <Image width={200} height={200}
              src="/logo-home.png"
              alt="Company Logo"
              className="w-40 mx-auto md:mx-0 mb-4"
            />
            <p className="text-sm md:text-base mt-5">
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
            <p>801, Regus, Shree Balaji Exim,</p>
            <p>World Trade Center, Kharadi, Pune</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <Link href="tel:917499837102">
              +91 74998 37102
            </Link>         
          </div>
          <div className="mt-6 md:mt-0">
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-500"><FaFacebookF  size={20} /></a>
              <a href="#" className="hover:text-blue-800"><FaLinkedinIn size={20} /></a>
              <a href="#" className="hover:text-pink-600"><FaInstagram  size={20}/></a>
            </div>
          </div>
        </div>
        <div  className="mt-10 text-center">
          <p className="text-sm italic">&copy; {new Date().getFullYear()} Shree Balaji Exim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
