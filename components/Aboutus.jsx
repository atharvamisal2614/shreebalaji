import Image from 'next/image';

const Aboutus = () => {
  return (
    <section className="container mx-auto mt-12 py-12">
      <div className="flex flex-wrap lg:flex-nowrap">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div data-aos="fade-up" className="relative w-full h-[35vh]  md:h-[50vh] overflow-hidden ">
            <Image
              src="/images/about-us-main-1.png"
              alt="About us main image"
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </div>
        {/* Text Section */}
        <div data-aos="fade-up" className="w-full lg:w-1/2 flex flex-col justify-start md:py-8 px-6">
          <h2 className="text-[18px] md:text-3xl text-yellow-500 font-bold mb-4 italic">
            Welcome to Shree Balaji Exim
          </h2>
          <p className="mb-4 text-customGray text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            incidunt, animi sunt cumque vero praesentium impedit eveniet! Totam
            recusandae, voluptates id accusamus error tenetur nam fugit
            veritatis perferendis maiores ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolorum, ex accusantium in quae cumque, reprehenderit voluptatem
            sint architecto fugiat excepturi! Quam reiciendis dolorum magni
            asperiores consectetur blanditiis, nobis autem?
          </p>
          <p className="mb-4 text-customGray text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolorum, ex accusantium in quae cumque, reprehenderit voluptatem
            sint architecto fugiat excepturi! Quam reiciendis dolorum magni
            asperiores consectetur blanditiis, nobis autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            dolorum, ex accusantium in quae cumque, reprehenderit voluptatem
            sint architecto fugiat excepturi! Quam reiciendis dolorum magni
            asperiores consectetur blanditiis, nobis autem?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
