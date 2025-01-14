import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
    const router = useRouter();
    return (
        <header className="bg-sky-50 text-gray-600 body-font">
            <div
                data-aos="fade-up"
                className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
            >
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-10 h-10 text-white p-2 bg-sky-600 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl font-bold">Logo</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap text-lg items-center justify-center gap-6">
                    <Link
                        href="/"
                        className={`mr-5 font-bold ${
                            router.pathname === "/" ? "text-sky-500" : "text-gray-600"
                        } hover:text-sky-500 transition duration-300`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`mr-5 font-bold ${
                            router.pathname === "/about" ? "text-sky-500" : "text-gray-600"
                        } hover:text-sky-500 transition duration-300`}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/gallery"
                        className={`mr-5 font-bold ${
                            router.pathname === "/gallery" ? "text-sky-500" : "text-gray-600"
                        } hover:text-sky-500 transition duration-300`}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/contact"
                        className={`mr-5 font-bold ${
                            router.pathname === "/contact" ? "text-sky-500" : "text-gray-600"
                        } hover:text-sky-500 transition duration-300`}
                    >
                        Contact Us
                    </Link>
                </nav>
                <Link href={'https://wa.me/917499837102'}>
                <button
                    className="inline-flex items-center bg-transparent border border-sky-500 text-sky-500 font-bold py-2 px-4 focus:outline-none hover:bg-sky-500 hover:text-white rounded-full transition duration-300 text-base mt-4 md:mt-0"
                >
                    Get a Quote
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
                </Link>
            </div>
        </header>
    );
}
export default Navbar;
