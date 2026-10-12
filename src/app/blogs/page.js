"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "FinTech", "EdTech", "Mobility", "Healthcare", "Mobile", "React"];

  const blogs = [
    {
      id: "fintech-software-2024",
      category: "FinTech",
      readTime: "8 min read",
      title: "Explore the features of fintech software in 2024",
      summary:
        "How modern financial technology is improving access, automating financial processes, and reshaping services for consumers and businesses.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
      date: "Oct 2024",
    },
    {
      id: "educational-technology-solutions",
      category: "EdTech",
      readTime: "6 min read",
      title: "Explore different types of educational technology solutions",
      summary:
        "From interactive learning platforms to educator analytics, discover the tools transforming traditional classrooms.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=80",
      date: "Sep 2024",
    },
    {
      id: "cost-to-develop-taxi-app",
      category: "Mobility",
      readTime: "7 min read",
      title: "How much does it cost to develop a taxi app?",
      summary:
        "A practical look at the features, team, platforms, and engineering choices that shape a mobility product budget.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80",
      date: "Sep 2024",
    },
    {
      id: "healthcare-it-solutions",
      category: "Healthcare",
      readTime: "9 min read",
      title: "Top 8 healthcare IT solutions",
      summary:
        "The digital systems helping providers improve care coordination, access, operations, and patient outcomes.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
      date: "Aug 2024",
    },
    {
      id: "benefits-mobile-app-development",
      category: "Mobile",
      readTime: "5 min read",
      title: "6 top benefits of mobile app development for business",
      summary:
        "Why thoughtful mobile products can strengthen customer relationships and unlock new ways to grow.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      date: "Aug 2024",
    },
    {
      id: "component-driven-architecture-react",
      category: "React",
      readTime: "6 min read",
      title: "Component-driven architecture in React applications",
      summary:
        "A closer look at the component model, ecosystem, performance, and maintainability behind modern React products.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
      date: "Jul 2024",
    },
  ];

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((b) => b.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="bg-[#060b13] text-white min-h-screen pt-32 pb-24 selection:bg-cyan-500 selection:text-black">
      {/* Ambient background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 1. Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-semibold text-[#00d2ff] uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
            GDSOFTWARES INSIGHTS
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15]">
            <span className="font-serif text-white">Ideas for building what's </span>
            <span className="font-serif italic text-[#00d2ff]">next.</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Useful perspectives on software development, product strategy, emerging technology, and digital business.
          </p>
        </div>

        {/* 2. Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white shadow-[0_0_20px_rgba(0,180,216,0.4)]"
                    : "bg-[#0c1322] text-slate-400 hover:text-white border border-slate-800/80 hover:border-slate-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 3. Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-[#0c1322] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.12)] transition-all duration-300"
            >
              {/* Post Image Container */}
              <div className="relative w-full h-52 overflow-hidden bg-slate-900">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1322] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                {/* Meta details */}
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#00d2ff] mb-3">
                  <span>{post.category}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-400 font-normal normal-case">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-white mb-3 group-hover:text-[#00d2ff] transition-colors leading-snug">
                  {post.title}
                </h2>

                {/* Summary */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.summary}
                </p>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-sm">
                  <span className="inline-flex items-center gap-1.5 text-[#00d2ff] font-medium group-hover:text-cyan-300 transition-colors">
                    <span>Learn more</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="text-slate-500 text-xs">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 4. Bottom CTA Section */}
        <div className="mt-28 relative rounded-3xl bg-gradient-to-b from-[#0c1424] to-[#070b14] border border-slate-800/90 py-16 px-6 md:px-12 text-center overflow-hidden shadow-2xl">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="font-serif">Discuss an idea </span>
              <span className="font-serif italic text-[#00d2ff]">with us</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mb-8 leading-relaxed">
              Turn your concepts into high-performing digital applications with our experienced engineering team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00b4d8] to-[#0096c7] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,180,216,0.55)] shadow-[0_0_20px_rgba(0,180,216,0.35)] transition-all text-base active:scale-95"
              >
                Start a conversation →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
