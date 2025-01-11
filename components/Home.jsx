import Image from "next/image";

function HomePage() {
    return (
        <div data-aos="fade-up">
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[90vh]">
                {/* Background Image */}
                <Image
                    src="/machine.png"
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
