"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = [
    "All",
    "Healthcare",
    "EdTech",
    "Fintech",
    "Marketplace",
    "Transport",
    "Gaming",
  ];

  const portfolioProjects = [
    {
      id: "healthcare",
      title: "GDS Healthcare",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      description:
        "A comprehensive healthcare management platform streamlining patient records, appointment scheduling, and telemedicine capabilities for clinics and hospitals.",
      tags: ["React", "Node.js", "MongoDB", "HIPAA Compliant"],
      link: "/healthcare",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      id: "edtech",
      title: "GDS EdTech",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
      description:
        "An interactive e-learning platform with live classes, course management, progress tracking, and integrated payment processing for educators and students worldwide.",
      tags: ["Flutter", "Firebase", "WebRTC", "Stripe"],
      link: "/edtech",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 22 22 22" />
        </svg>
      ),
    },
    {
      id: "fintech",
      title: "GDS Fintech",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
      description:
        "A secure digital banking and wallet application with real-time transaction tracking, multi-currency support, and advanced fraud detection powered by machine learning.",
      tags: ["React Native", "Python", "PostgreSQL", "Plaid API"],
      link: "/fintech",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 12 12 22 2 12 12 2" />
        </svg>
      ),
    },
    {
      id: "marketplace",
      title: "GDS Marketplace",
      category: "Marketplace",
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80",
      description:
        "A full-featured multi-vendor marketplace with real-time inventory, smart search, seller dashboards, and integrated logistics tracking for seamless B2C commerce.",
      tags: ["Angular", "Node.js", "Elasticsearch", "AWS"],
      link: "/marketplace",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      id: "transport",
      title: "GDS Transport",
      category: "Transport",
      image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&auto=format&fit=crop&q=80",
      description:
        "A real-time ride-hailing and logistics platform with live GPS tracking, dynamic pricing, driver management, and analytics dashboard for fleet operators.",
      tags: ["React Native", "Node.js", "Google Maps API", "Socket.io"],
      link: "/transport",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 9l3 12h14l3-12-10-7z" />
        </svg>
      ),
    },
    {
      id: "gaming",
      title: "GDS Gaming",
      category: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
      description:
        "A multiplayer gaming platform with real-time matchmaking, in-app purchases, leaderboards, blockchain-based NFT assets, and cross-platform play support.",
      tags: ["Unity", "Solidity", "Node.js", "WebSocket"],
      link: "/gaming",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
        </svg>
      ),
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#060b13] text-white selection:bg-[#00d2ff] selection:text-black">
      {/* Background ambient radial lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-24">
        {/* Eyebrow badge */}
        <div className="flex items-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-[#0c1626]/80 backdrop-blur-md text-xs font-semibold uppercase tracking-wider text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse" />
            OUR WORK
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            <span className="font-serif">Software Development </span>
            <span className="font-serif italic text-[#00d2ff]">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            A selection of our industry-specific platforms and applications — built to solve real problems across healthcare, finance, education, and beyond.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14">
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white shadow-[0_0_20px_rgba(0,180,216,0.35)] scale-105"
                    : "bg-[#0c1424] text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700 hover:bg-[#101b30]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0c1220] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(0,210,255,0.14)] transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Card Banner Image */}
              <div className="h-64 relative w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/40" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#070b14]/85 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-[#00d2ff]">
                    {project.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-10">
                  <div className="w-9 h-9 rounded-xl bg-[#070b14]/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center text-[#00d2ff] shadow-sm">
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-7 md:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00d2ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-[#070b14] border border-cyan-500/20 text-[#00d2ff]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-28 relative rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-slate-800/90 py-16 px-6 md:px-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="font-serif">Have a Project in </span>
              <span className="font-serif italic text-[#00d2ff]">Mind?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              We'd love to add your success story to our portfolio. Let's build something great together.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,180,216,0.45)] transition-all text-base active:scale-95"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
