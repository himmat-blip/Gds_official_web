import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Our Software Development Projects | GD Software",
  description: "Explore our diverse portfolio of cutting-edge software solutions. Discover how our software development company has delivered innovation and excellence to clients worldwide."
};

export default function Portfolio() {
  const portfolioItems = [
    { title: "GDS Edtech", image: "/images/edtech.jpg", link: "/edtech" },
    { title: "GDS Fintech", image: "/images/fintech.png", link: "/fintech" },
    { title: "GDS Marketplace", image: "/images/marketpalace.jpg", link: "/marketplace" },
    { title: "GDS Gaming", image: "/images/gaming.jpg", link: "/gaming" },
    { title: "GDS Transport", image: "/images/transport.jpg", link: "/transport" },
    { title: "GDS Healthcare", image: "/images/healthcare.jpg", link: "/healthcare" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Top Banner Section */}
      <section className="relative h-64 md:h-80 flex flex-col items-center justify-center bg-[#6f15e7] text-white overflow-hidden text-center px-4">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/gds-bg-head.png')", opacity: 0.2 }} />
        <div className="relative z-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-['Raleway']">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We are an outsource software development company in India. GD Softwares has the expertise in developing <br className="hidden md:block" />custom software applications to meet customers' needs.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="pt-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Filters (Static for now, can implement state filtering later) */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {['All', 'GDS Healthcare', 'GDS Edtech', 'GDS Transport', 'GDS Fintech', 'GDS Gaming', 'GDS Marketplace'].map((filter, i) => (
              <button 
                key={i}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${i === 0 ? 'bg-amber-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md bg-white block h-64 cursor-pointer">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <Link href={item.link} className="text-amber-400 hover:text-amber-300 font-medium underline">
                    View More...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
