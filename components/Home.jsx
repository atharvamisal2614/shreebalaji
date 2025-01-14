import Image from "next/image";

function HomePage() {
    return (
        <div data-aos="fade-up">
            <section className="relative w-full h-[70vh] md:h-[90vh]">
                <Image
                    src="/images/backhoe-loader.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                
            </section>
        </div>
    );
}

export default HomePage;
