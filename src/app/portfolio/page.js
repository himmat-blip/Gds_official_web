"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "GDS Healthcare",
    "GDS EdTech",
    "GDS Fintech",
    "GDS Marketplace",
    "GDS Transport",
    "GDS Gaming",
  ];

  const portfolioProjects = [
    {
      id: "edtech",
      title: "GDS EdTech",
      category: "GDS EdTech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      description:
        "Interactive e-learning platforms, Learning Management Systems (LMS), IoT-driven solutions, and virtual classrooms with AI-assisted grading and personalized student journeys.",
      tags: ["Educational Apps", "LMS", "IoT & AI", "Virtual Classrooms"],
      link: "/edtech",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 22 22 22" />
        </svg>
      ),
    },
    {
      id: "fintech",
      title: "GDS Fintech",
      category: "GDS Fintech",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      description:
        "Full-cycle fintech software development including Finance AI agents (Taskweaver, Autogen, CrewAI), algorithmic WealthTech, smart contracts, real-time fraud detection, and payment rails.",
      tags: ["AI Finance Agents", "WealthTech", "Web3 Settlement", "Anti-Money Laundering"],
      link: "/fintech",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 12 12 22 2 12 12 2" />
        </svg>
      ),
    },
    {
      id: "marketplace",
      title: "GDS Marketplace",
      category: "GDS Marketplace",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format&fit=crop&q=80",
      description:
        "Custom high-performance multi-vendor marketplaces like Amazon, Uber, and Airbnb across B2B, B2C, P2P, and B2G business models with automated payouts and inventory sync.",
      tags: ["B2B & B2C Models", "Vendor Portals", "Escrow Payments", "Dispute Resolution"],
      link: "/marketplace",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      id: "gaming",
      title: "GDS Gaming",
      category: "GDS Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      description:
        "High-performance games in Unity and Unreal Engine, real-time 3D rendering, multiplayer server architectures, VR/AR simulation, and decentralized metaverse environments.",
      tags: ["Unity & Unreal Engine", "Real-Time 3D", "Multiplayer Servers", "VR/AR & Metaverse"],
      link: "/gaming",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
        </svg>
      ),
    },
    {
      id: "transport",
      title: "GDS Transport",
      category: "GDS Transport",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
      description:
        "Advanced transport and logistics management software with real-time GPS telemetry, route batching, fleet maintenance diagnostics, and automated driver dispatch systems.",
      tags: ["Fleet Management", "GPS Telemetry", "Dispatch Algorithms", "Logistics Apps"],
      link: "/transport",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 9l3 12h14l3-12-10-7z" />
        </svg>
      ),
    },
    {
      id: "healthcare",
      title: "GDS Healthcare",
      category: "GDS Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      description:
        "Comprehensive Hospital Information Systems, Electronic Health Records (EHR/EMR), Remote Patient Monitoring (RPM), and HIPAA-compliant telehealth platforms.",
      tags: ["EHR & EMR Systems", "Telehealth & RPM", "HIPAA Compliant", "HL7 & FHIR"],
      link: "/healthcare",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 1. Hero Section matching old.gdsoftwares.com/portfolio.php text */}
      <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 bg-gradient-to-b from-[#faf8f5] via-white to-[#fafafa] border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold uppercase tracking-wider text-[#d97706] mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#d97706]" />
            OUR WORK &bull; CLIENT PORTFOLIO
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            <span className="font-serif block">Our</span>
            <span className="font-serif italic text-[#d97706] font-normal">Portfolio</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We are an outsource software development company in India. GD Softwares has the expertise in developing custom software applications to meet customers&apos; needs.
          </p>

        </div>
      </section>

      {/* 2. Gallery & Filter Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#d97706] text-white shadow-md scale-105"
                    : "bg-white text-slate-700 hover:text-[#d97706] border border-slate-200/80 hover:border-amber-300 hover:bg-amber-50/40 shadow-xs"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3-Column / 2-Column Responsive Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden hover:border-amber-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
            >
              {/* Card Banner Image */}
              <div>
                <div className="h-60 relative w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-amber-300/50 text-xs font-bold text-[#d97706] shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-9 h-9 rounded-xl bg-white/95 backdrop-blur-md border border-amber-300/50 flex items-center justify-center text-[#d97706] shadow-sm">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-7">
                  <Link href={project.link}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-[#d97706] transition-colors font-serif">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-50/80 border border-amber-200/60 text-amber-900"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  href={project.link}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-amber-500 hover:text-white border border-slate-200 hover:border-amber-500 text-xs font-semibold text-slate-700 transition-all group/btn"
                >
                  <span>View Details &amp; Case Study</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform font-bold">&rarr;</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-24 relative rounded-3xl bg-white border border-amber-200/80 py-16 px-6 md:px-12 text-center overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-[#d97706] text-xs font-bold tracking-widest uppercase mb-3 block">
              START YOUR PROJECT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif">
              We can transform your digital needs
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">
              GD Softwares has the expertise in developing custom software applications to meet your business needs. We employ the best skills and knowledge to supply our clients with state-of-the-art technology solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => {
                  if (typeof window !== "undefined" && window.Calendly) {
                    window.Calendly.initPopupWidget({ url: "https://calendly.com/dev-145" });
                  } else {
                    window.location.href = "/contact-us";
                  }
                }}
                className="bg-[#d97706] hover:bg-[#b45309] text-white px-8 py-3.5 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all text-base active:scale-95 cursor-pointer"
              >
                Schedule a Call
              </button>
              <Link
                href="/contact-us"
                className="inline-flex justify-center items-center border border-slate-300 hover:border-slate-800 text-slate-800 bg-white font-semibold py-3.5 px-8 rounded-xl transition-all text-base shadow-sm"
              >
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
