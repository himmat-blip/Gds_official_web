"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Mobile", "Web", "QA", "AI", "Enterprise"];

  const services = [
    {
      id: "flutter",
      title: "Flutter App Development",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
      description:
        "A reliable Flutter development team building beautiful cross-platform apps for iOS and Android from a single codebase. Fast, performant, and cost-effective.",
      features: [
        "Single codebase for iOS & Android",
        "Hot reload for faster development",
        "Native performance",
      ],
      tags: ["Flutter", "Dart", "Firebase"],
      link: "/flutter-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      id: "mobile-app",
      title: "Mobile App Development",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      description:
        "Among the best mobile app development companies in the USA. We build scalable, cutting-edge native iOS and Android apps that meet the highest market standards.",
      features: [
        "Native iOS & Android development",
        "App Store & Play Store deployment",
        "Push notifications",
      ],
      tags: ["Swift", "Kotlin", "Xcode"],
      link: "/mobile-app-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: "react-js",
      title: "ReactJS Development",
      category: "Web",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
      description:
        "Component-based UI development using the React framework maintained by Meta. Build fast, interactive web applications with reusable components and efficient state management.",
      features: [
        "Component-based architecture",
        "State management (Redux/Context)",
        "Server-side rendering",
      ],
      tags: ["React", "TypeScript", "Redux"],
      link: "/react-js-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "react-native",
      title: "React Native Development",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=800&auto=format&fit=crop&q=80",
      description:
        "Cross-platform Android/iOS solutions using React Native for feature-rich, market-ready apps. Share code between platforms while maintaining a truly native experience.",
      features: [
        "Cross-platform code sharing",
        "Native modules integration",
        "OTA updates",
      ],
      tags: ["React Native", "Expo", "JavaScript"],
      link: "/react-native-app-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      ),
    },
    {
      id: "ios-dev",
      title: "iOS App Development",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&auto=format&fit=crop&q=80",
      description:
        "Full iPhone and iPad app development — from solution design through delivery and ongoing maintenance. We follow Apple's Human Interface Guidelines for exceptional UX.",
      features: [
        "iPhone & iPad support",
        "Apple Pay & In-App Purchases",
        "HealthKit & ARKit integration",
      ],
      tags: ["Swift", "SwiftUI", "Xcode"],
      link: "/ios-app-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      id: "angular",
      title: "Angular.JS Development",
      category: "Web",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=80",
      description:
        "Google-maintained Angular framework extending HTML with data binding and dependency injection. Ideal for large enterprise applications requiring strong structure and testability.",
      features: [
        "Two-way data binding",
        "Dependency injection",
        "TypeScript first",
      ],
      tags: ["Angular", "TypeScript", "RxJS"],
      link: "/angular-js-development",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "qa",
      title: "QA Automation / Testing",
      category: "QA",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
      description:
        "Automated testing with Selenium, Cypress, and custom test suites. Ensure flawless reliability across browsers, operating systems, and device form factors.",
      features: [
        "Cross-browser automated testing",
        "CI/CD pipeline integration",
        "Performance & regression testing",
      ],
      tags: ["Selenium", "Cypress", "Jest"],
      link: "/qa-automation",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      id: "ai",
      title: "Artificial Intelligence Solutions",
      category: "AI",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      description:
        "Ultra-intelligent AI solutions delivering unmatched accuracy, automation, and operational efficiency for modern businesses.",
      features: [
        "Custom LLM & NLP integrations",
        "Computer vision systems",
        "Predictive analytics models",
      ],
      tags: ["OpenAI", "Python", "TensorFlow"],
      link: "/artificial-intelligence-solution-providers",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      id: "ml",
      title: "Machine Learning Services",
      category: "AI",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&auto=format&fit=crop&q=80",
      description:
        "End-to-end ML model development from data preparation to production deployment. Skilled engineers delivering high-precision algorithms.",
      features: [
        "Supervised & unsupervised models",
        "Data pipeline engineering",
        "MLOps & model monitoring",
      ],
      tags: ["PyTorch", "Scikit-learn", "MLOps"],
      link: "/machine-learning-services",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: "servicenow",
      title: "ServiceNow Services",
      category: "Enterprise",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
      description:
        "Enterprise platform digitizing workflows, breaking organizational silos, and enabling seamless service experiences across IT, HR, finance, and customer operations.",
      features: [
        "ITSM implementation",
        "Custom app development",
        "Workflow automation",
      ],
      tags: ["ServiceNow", "ITSM", "JavaScript"],
      link: "/servicenow-services",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
  ];

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#060b13] text-white selection:bg-[#00d2ff] selection:text-black">
      {/* Background radial effects */}
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
            CONSULTING & SERVICES
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            <span className="font-serif">Our </span>
            <span className="font-serif italic text-[#00d2ff]">Services</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            From mobile apps to AI solutions — we build technology that drives real business results. Explore our full range of development and consulting services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-[#0c1220] border border-slate-800/90 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.12)] transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Card Image Banner */}
              <div className="h-48 relative w-full overflow-hidden bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/30" />

                {/* Overlaid badges at bottom-left */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2 z-10">
                  <div className="w-8 h-8 rounded-lg bg-[#070b14]/85 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center text-[#00d2ff] shadow-sm">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#070b14]/85 backdrop-blur-md border border-cyan-500/30 text-xs font-semibold text-[#00d2ff]">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 md:p-7 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d2ff] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm leading-snug">
                      <span className="text-[#00d2ff] text-xs mt-0.5 select-none">✦</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mt-auto">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#070b14] border border-slate-800/80 text-cyan-400"
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
              <span className="font-serif">Need a Custom </span>
              <span className="font-serif italic text-[#00d2ff]">Solution?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
              Let's discuss your requirements and build the right technology roadmap for your business.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-gradient-to-r from-[#00b4d8] to-[#6366f1] text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(0,180,216,0.45)] transition-all text-base active:scale-95"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
