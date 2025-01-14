import Image from 'next/image';
const Aboutus = () => {
  return (
    <section className="bg-sky-50 w-full">
      <div className="container mx-auto  py-12">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              data-aos="fade-up"
              className="relative w-full h-[35vh] md:h-[50vh] mt-5 overflow-hidden"
            >
              <Image
                src="/images/about-us-main-1.png"
                alt="About us main image"
                layout="fill"
                objectFit="cover"
                className="w-full"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-full lg:w-1/2 flex flex-col justify-start md:py-8 px-6"
          >
            <h2 className="text-2xl md:text-3xl text-yellow-500 mt-8 md:mt-0 font-bold mb-4 italic">
              Welcome to Shree Balaji Exim
            </h2>
            <p className="mb-4 text-customGray text-justify">
            <span className='font-bold'>Shree Balaji EXIM</span>  - Building Excellence through the export of heavy construction machineries through out the world.
            </p>
            <p className="mb-4 text-customGray text-justify">
            Shree Balaji Group founded in 1960 by Shri N. G. Banaginwar, swiftly rose to prominence as one of India's leading trading firms.In 1990, the business entered a new era under the visionary leadership of CEO Rammdas Banaginwar. 
            </p>
            <p className="mb-4 text-customGray text-justify">
            Drawing on his unmatched expertise in the export-import trade, he established Export Import Business in 2001.
            Today, Shree Balaji Exim stands as a global leader, renowned for being a top eximpreneur of heavy building construction machinery throughout the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
