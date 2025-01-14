import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
     
    });
  }, []);
  return (
    <>
    <div className="bg-sky-50 min-h-screen">
      <Navbar />

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
