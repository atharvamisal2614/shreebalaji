import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowCircleUp } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior:"smooth"
    })
  }
  return (
    <>
    <div className="bg-sky-50 min-h-screen">
      <Navbar />
      <div className="fixed hover:cursor-pointer bottom-24 z-50 right-5">
      <button onClick={handleScrollToTop}>
        <FaArrowCircleUp className="text-customRed  rounded-full border-sky-500 bg-sky-500" size={50} />
      </button>
    </div>
      <div className="fixed hover:cursor-pointer bottom-5 z-50 right-2">
      <Link href="https://wa.me/917499837102">
        <Image
          src="/images/whatsappimage.png"
          width={65}
          height={65}
          alt={"Whatsapp"}
          priority
        />
      </Link>
    </div>
      <Component {...pageProps} />
      <Footer/>
      </div>
    </>
  );
}
