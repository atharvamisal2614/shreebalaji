import Image from "next/image";

function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative w-full h-[50vh] md:h-[80vh]">
                {/* Background Image */}
                <Image
                    src="/images/import-export-home-1.avif"
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
