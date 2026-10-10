import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "GDSoftwares | Hire-Resources",
  description: "Looking to hire a contractor, developer please reach out to GDSoftwares"
};

export default function HireResources() {
  const steps = [
    { icon: "fa-briefcase", color: "bg-blue-600", text: "Select the skill of coder" },
    { icon: "fa-share-square", color: "bg-orange-500", text: "Share the details of project" },
    { icon: "fa-wifi", color: "bg-purple-600", text: "Receive the free quote" },
    { icon: "fa-money", color: "bg-green-500", text: "Contract and payment" },
    { icon: "fa-thumbs-up", color: "bg-cyan-500", text: "Whoo | you are good to go!" }
  ];

  const resources = [
    { title: "Cloud and DevOps", image: "/images/cloud.jpg", link: "/quote" },
    { title: "Data Analytics", image: "/images/data.jpg", link: "/quote" },
    { title: "Project & Programme Management", image: "/images/icon-project.jpg", link: "/quote" },
    { title: "Front End Development & UI/UX", image: "/images/uiux.jpg", link: "/quote" },
    { title: ".Net Developer", image: "/images/icon-net.jpg", link: "/quote" },
    { title: "Business Consulting", image: "/images/icon-business.jpg", link: "/quote" },
    { title: "MEAN / MEARN", image: "/images/icon-defence.jpg", link: "/quote" },
    { title: "Mobile Development Android & IOS", image: "/images/icon-app.jpg", link: "/quote" },
    { title: "Testing and QA", image: "/images/icon-qa.jpg", link: "/quote" },
    { title: "Other IT Jobs", image: "/images/icon-it.jpg", link: "/quote" },
    { title: "Laravel Developer", image: "/images/icon-laravel.png", link: "/quote" },
    { title: "Wearable Application Developer", image: "/images/icon-wib.png", link: "/quote" }
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Top Banner */}
      <section className="relative h-56 md:h-72 flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden text-center px-4" style={{ backgroundImage: "url('/images/bg-top-career.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Hire Dedicated Developers</h1>
          <p className="text-xl md:text-2xl text-amber-400 font-medium tracking-wide">
            5 Quick Steps Coders For Your Next Projects
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4 bg-white border-b border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className={`w-20 h-20 md:w-24 md:h-24 ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg transform transition-transform group-hover:-translate-y-2 mb-4`}>
                  {/* Using placeholder for font-awesome, in real app you'd use react-icons or similar */}
                  <span className="text-3xl font-bold">{i+1}</span> 
                </div>
                <h4 className="text-sm md:text-base font-bold text-gray-800 leading-snug max-w-[150px]">
                  {step.text}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Resources Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((res, i) => (
              <Link href={res.link} key={i}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center h-full border border-gray-100 transform hover:-translate-y-2 cursor-pointer group">
                  <div className="w-24 h-24 relative mb-6 overflow-hidden rounded-full border-4 border-gray-50 group-hover:border-amber-100 transition-colors">
                    <Image src={res.image} alt={res.title} fill className="object-cover" />
                  </div>
                  <p className="font-bold text-gray-800 text-lg group-hover:text-amber-500 transition-colors">
                    {res.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info & Hire Now Button */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4">
              <p className="text-gray-600 leading-relaxed text-lg text-justify">
                Our team is of highly qualified professionals. we have been in the industry from last 8 years and have delivered many projects successfully, Our Internet and Custom Application Development extends to Internet Business/Corporate System Development, Database Application Development, Game Development , Blockchain development, Client/Server Application Development, Windows Application Development, Android Application Development, iPhone Application Development, Quality Assurance etc.
              </p>
            </div>
            <div className="md:w-1/4 flex justify-center md:justify-end">
              <Link href="/pricing-structure" className="bg-[#e0bd10] hover:bg-[#c9a90e] text-white font-bold text-xl py-4 px-10 rounded-full transition-colors shadow-md whitespace-nowrap">
                Hire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
