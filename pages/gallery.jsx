import React from "react";

const Gallery = () => {
  const images = [
    { src: "/images/base-valve.jpg", title: "Base Valve", description: "A high-quality base valve for industrial use." },
    { src: "/images/bearing-comet.jpg", title: "Bearing Comet", description: "Durable bearing for heavy machinery." },
    { src: "/images/bicycle-main.avif", title: "Bicycle Pump", description: "Compact and efficient bicycle pump." },
    { src: "/images/breazing-rod.png", title: "Brazing Rod", description: "High-performance brazing rods for welding." },
    { src: "/images/connection-pvc.jpg", title: "PVC Connection", description: "Strong and reliable PVC pipe connection." },
    { src: "/images/five-hole-gasket.png", title: "Five-Hole Gasket", description: "Five-hole gasket for various applications." },
    { src: "/images/flexible-drive-shaft.webp", title: "Flexible Drive Shaft", description: "Flexible drive shaft for industrial use." },
    { src: "/images/Flexible-Shaft.jpg", title: "Flexible Shaft", description: "Versatile flexible shaft for machines." },
    { src: "/images/gasket-kit.jpg", title: "Gasket Kit", description: "Complete gasket kit for sealing needs." },
    { src: "/images/gasket.jpg", title: "Gasket", description: "High-quality gasket for secure sealing." },
    { src: "/images/hand-pump-washer.webp", title: "Hand Pump Washer", description: "Hand pump washer for efficient pumping." },
    { src: "/images/head_sheet.jpg", title: "Head Sheet", description: "Sheet for machinery head components." },
    { src: "/images/industrial-valves.jpg", title: "Industrial Valves", description: "Precision industrial valves for various systems." },
    { src: "/images/4-bang-valve.jpg", title: "4-Bang Valve", description: "Four-bang valve for enhanced performance." },
    { src: "/images/jackbolt.jpg", title: "Jackbolt", description: "Heavy-duty jackbolt for robust use." },
    { src: "/images/nozzle-tip.jpg", title: "Nozzle Tip", description: "Precision nozzle tip for industrial applications." },
    { src: "/images/plastic-extrusion.jpg", title: "Plastic Extrusion", description: "Plastic extrusion parts for manufacturing." },
    { src: "/images/rubber-patta.jpg", title: "Rubber Patta", description: "Durable rubber patta for sealing." },
    { src: "/images/sewing-machine.webp", title: "Sewing Machine", description: "High-quality sewing machine for precise stitching." },
    { src: "/images/single-bang-valve.webp", title: "Single Bang Valve", description: "Single bang valve for industrial systems." },
    { src: "/images/stainless-steel-machine.webp", title: "Stainless Steel Machine", description: "Stainless steel machine for heavy-duty work." },
    { src: "/images/textile-machinery-parts.webp", title: "Textile Machinery Parts", description: "Parts for textile machinery." },
    { src: "/images/textile-machinery.avif", title: "Textile Machinery", description: "Machinery for textile production." },
    { src: "/images/nylopack.jpg", title: "Nylopack", description: "High-strength nylopack for packaging." }
  ];
  return (
    <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-50">
      {images.map((image, i) => (
        <div key={i} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <img src={image.src} alt={image.title} className="w-full h-80 md:h-96 object-cover" />
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
