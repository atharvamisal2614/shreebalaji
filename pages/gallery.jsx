import React from "react";
import Image from "next/image";
const Gallery = () => {
  const images = [
    { src: "/images/asphalt-paver.jpg", title: "Asphalt Paver", description: "Used specifically in road building projects to evenly spread asphalt out over roadway surfaces for improved durability and a smooth driving experience for vehicles." },
    { src: "/images/backhoe-loader.jpg", title: "Backhoe Loader", description: " Providing multifunctional capabilities, such as material handling with its loader bucket and backhoe digging capabilities, makes this machine perfect for diverse construction needs." },
    { src: "/images/bulldozer.jpg", title: "Bulldozer", description: " Used extensively during site preparation, this powerful machine pushes, levels, and clears soil surfaces, creating smooth and even surfaces." },
    { src: "/images/compactor.jpeg", title: "Compactor", description: " Used to compress soil and other loose materials, this machine ensures stable foundations for construction projects." },
    { src: "/images/concrete-mixer.jpg", title: "Concrete Mixer", description: "Essential in construction projects of all sorts, the concrete mixer blends cement, sand gravel, and water into high-quality concrete for various jobs." },
    { src: "/images/crane.jpeg", title: "Crane", description: "Cranes are heavy-duty lifting machines capable of moving steel beams, precast panels and other large materials with precision on construction sites." },
    { src: "/images/crawler-crane.jpg", title: "Crawler Crane", description: "These heavy-duty cranes are specifically designed to tackle larger projects and capable of lifting and moving massive loads with precision." },
    { src: "/images/excavator.jpg", title: "Excavator", description: "An excavator is an efficient machine designed with a bucket that helps users dig trenches quickly, lay foundations efficiently, and handle large volumes of soil efficiently." },
    { src: "/images/forklift.jpg", title: "Fork Lift", description: "An efficient machine used for lifting, transporting and stacking materials on pallets to facilitate smooth site operations. " },
    { src: "/images/generator.jpeg", title: "Generator", description: "Generators provide reliable power sources on construction sites for use of tools and machinery, providing uninterrupted energy that allows for optimal workflow." },
    { src: "/images/motor-graders.jpg", title: "Motor Grader", description: "Utilized for leveling roads before construction starts or maintenance takes place, this tool ensures smooth surfaces for road building or maintenance work." },
    { src: "/images/pile-driver.jpeg", title: "Pile Driver", description: "Drives foundation piles into the ground in various soil conditions to ensure stability for structures built upon it." },
    { src: "/images/road-roller.jpg", title: "Road Roller", description: "Used to compact asphalt and soil surfaces to increase durability and stability for construction projects, improving surface durability." },
    { src: "/images/shotcrete-machine.jpg", title: "Shot Create Machine", description: "An innovative tool used to spray concrete at high speed onto surfaces for rapid construction of walls and structures." },
    { src: "/images/telehandler.jpg", title: "Telehandler", description: "Perfect for lifting materials at height, this machine is essential when working at elevated locations during construction." },
    { src: "/images/skid_steer_loader.webp", title: "Skid Steer Loader", description: "An adaptable compact machine equipped with various attachments to perform tasks such as digging, loading, and material handling." },
    { src: "/images/tunnel-boring-machine.jpg", title: "Tunnel Boring Machine", description: "Used for digging tunnels efficiently for infrastructure projects like subways and underground passages, these large machines make short work of tunneling tasks." },
    { src: "/images/articulated-dump-truck.avif", title: "Articulated Dump Truck", description: "Engineered specifically to handle off-road hauling of large loads efficiently across uneven terrains and remote sites, this truck makes short work of hauling large volumes." },
    { src: "/images/welding-machine.jpeg", title: "Wlding Machine", description: "Used to join metal components together and is widely utilized for structural steelwork repairs as well as various repair jobs in construction." },
    { src: "/images/wheel-loaders.jpg", title: "Wheel Loaders", description: "Great for moving materials such as soil, gravel or debris efficiently for effective material management." },
    { src: "/images/concrete-pump.jpg", title: "Concrete Pump", description: "This machinery provides fast, precise transportation of concrete to hard-to-reach areas or elevated locations thereby optimizing construction efficiency." },
    { src: "/images/soil-stabilizer.jpg", title: "Soil Stabilizer", description: "Engineered to strengthen and stabilize weak soil, this machine plays a pivotal role in providing safe construction foundations." },
    { src: "/images/dump-trucks.jpg", title: "Dump Truck", description: "With its ability to haul loose materials like soil or gravel quickly and effectively - such a truck plays a pivotal part in transport." },
    { src: "/images/trencher.jpg", title: "Trencher", description: "Ideal for digging narrow trenches used to lay utility lines such as water pipes, electrical cables or sewerage networks." }
  ];
  return (
    <div data-aos="fade-up" className="bg-sky-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {images.map((image, i) => (
        <div key={i} className="bg-sky-50 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <Image src={image.src} alt={image.title} width={1000} height={1000} className="w-full h-80 md:h-96 object-cover" />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{image.title}</h3>
            <p className="text-sm text-gray-600">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Gallery;
